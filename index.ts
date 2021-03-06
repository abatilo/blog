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
const image = repository.buildAndPushImage({
  cacheFrom: {
    stages: ["builder"],
  },
});
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
    metadata: {
      namespace: "applications",
    },
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
    metadata: {
      namespace: deployment.metadata.namespace,
    },
    spec: {
      maxUnavailable: 1,
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
    metadata: {
      namespace: deployment.metadata.namespace,
    },
    spec: {
      selector: {
        istio: "ingressgateway",
      },
      servers: [
        {
          port: {
            number: 443,
            name: "https",
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
    metadata: {
      namespace: deployment.metadata.namespace,
    },
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
                host: service.metadata.name,
              },
              headers: {
                response: {
                  add: {
                    "Strict-Transport-Security":
                      "max-age=31536000; includeSubDomains",
                    "Content-Security-Policy": "upgrade-insecure-requests",
                    "X-Frame-Options": "SAMEORIGIN",
                    "X-Content-Type-Options": "nosniff",
                    "Referrer-Policy": "no-referrer-when-downgrade",
                    "X-XSS-Protection": "1; mode=block",
                    "Feature-Policy":
                      "geolocation none; midi none; notifications none; push none; sync-xhr none; microphone none; camera none; magnetometer none; gyroscope none; speaker self; vibrate none; fullscreen self; payment none;",
                  },
                },
              },
            },
          ],
        },
      ],
    },
  },
  { provider: k8sProvider }
);
