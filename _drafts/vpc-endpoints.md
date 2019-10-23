---
layout: post
title: Amazon AWS VPC Endpoints
categories: [Knowledge Base]
---
I recently learned about [VPC
Endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints.html).

An excerpt from the AWS documentation says:
>A VPC endpoint enables you to privately connect your VPC to supported AWS services and
VPC endpoint services powered by PrivateLink without requiring an internet gateway, NAT
device, VPN connection, or AWS Direct Connect connection.

This means that you can have your instances connect directly to various Amazon services.
This is a huge win since it also means that you could place your EC2 instances into
internal only subnets. For example, you might have a Kubernetes/EKS cluster that's
running its nodes in this internal only subnet. No public ingress or public egress
allowed. Your requests come in through a public ELB and an ingress controller, but now
you need to work with data in S3. You might want to allow for public data transfer, but
you could configure a VPC endpoint in your route tables and you're done!

The list of services that have VPC Endpoints is huge. Everything from your [Elastic Load
Balancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/load-balancer-vpc-endpoints.html) to your [Elastic Container Registry](https://docs.aws.amazon.com/AmazonECR/latest/userguide/vpc-endpoints.html). Or in my case, I setup the [Amazon S3](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-endpoints-s3.html) endpoint.

There are two types of VPC Endpoints. [Interface
endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/vpce-interface.html) and [Gateway endpoints](https://docs.aws.amazon.com/vpc/latest/userguide/vpce-gateway.html). When I was first told about these, I thought it'd be complicated to setup since I always have a hard time with anything networking related. Fortunately, while using Terraform, linking up to these endpoints becomes really easy. Here's an example taken from the [Terraform website](https://www.terraform.io/docs/providers/aws/r/vpc_endpoint.html#basic).
{% gist dff2afe47664a637ee75b5369583d890 vpc_endpoint.tf %}

Thanks to the VPC endpoint, I've actually noticed a small increase in transfer speeds,
and since the data transfer is direct, it's much more secure. There's no risk of an
external party sniffing through my packets while they're passing through who knows
where.

Using AWS PrivateLink, you can expose your own services privately as well. I haven't
used it yet but it seems exciting.
