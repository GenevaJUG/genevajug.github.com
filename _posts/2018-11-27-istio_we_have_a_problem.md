---
layout: post
title: Istio, we have a problem! Understanding and fixing bugs with a service-mesh
speaker:
  - david_gageot
---
Istio, we have a problem! We've just deployed a shinny new set of micro-services and it behaves in a strange manner. Hard to say why with so many moving parts...

Let's leverage the newly installed service mesh to understand what we've deployed, find the root problem, fix it with a bandaid and then do a proper, non trivial, blue-green deployment of a v2.

That will involve the Service Graph, Prometheus monitoring, Grafana Dashboards, Traffic mirroring, all orchestrated in a simple manner by Istio.
