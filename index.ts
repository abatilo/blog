import * as awsx from "@pulumi/awsx";
import * as k8s from "@pulumi/kubernetes";
import * as kx from "@pulumi/kubernetesx";
import * as pulumi from "@pulumi/pulumi";

const appName = "blog";

const clusterStackRef = new pulumi.StackReference("prod");
const kubeconfig = clusterStackRef.getOutput("kubeconfig");
const k8sProvider = new k8s.Provider("prod", {
  kubeconfig: kubeconfig.apply(JSON.stringify),
});
const repository = new awsx.ecr.Repository(appName);
const image = repository.buildAndPushImage("./");
const pod = new kx.PodBuilder({
  containers: [
    {
      image,
      ports: { http: 80 },
    },
  ],
});
const deployment = new kx.Deployment(
  appName,
  {
    spec: pod.asDeploymentSpec({
      replicas: 2,
      strategy: { rollingUpdate: { maxUnavailable: 0 } },
    }),
  },
  { provider: k8sProvider }
);
const service = deployment.createService();

const pdb = new k8s.policy.v1beta1.PodDisruptionBudget(
  appName,
  {
    spec: {
      maxUnavailable: 0,
      selector: deployment.spec.selector,
    },
  },
  { provider: k8sProvider }
);

const gateway = new k8s.apiextensions.CustomResource(
  appName,
  {
    apiVersion: "networking.istio.io/v1alpha3",
    kind: "Gateway",
    metadata: {},
    spec: {
      selector: {
        istio: "ingressgateway",
      },
      servers: [
        {
          port: {
            number: service.spec.ports[0].port,
            name: service.spec.ports[0].name,
            protocol: "HTTP",
          },
          hosts: ["www.aaronbatilo.dev"],
        },
      ],
    },
  },
  { provider: k8sProvider }
);

const virtualService = new k8s.apiextensions.CustomResource(
  appName,
  {
    apiVersion: "networking.istio.io/v1alpha3",
    kind: "VirtualService",
    metadata: {},
    spec: {
      hosts: ["www.aaronbatilo.dev"],
      gateways: [gateway.metadata.name],
      http: [
        {
          match: [
            {
              uri: {
                prefix: "/",
              },
            },
          ],
          route: [
            {
              destination: {
                port: {
                  number: service.spec.ports[0].port,
                },
                host: service.metadata.name,
              },
            },
          ],
        },
      ],
    },
  },
  { provider: k8sProvider }
);
