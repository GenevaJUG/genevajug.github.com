---
layout: post
title: Apache CloudStack
speaker:
  - sebastien_goasguen
  - pablo_tamarit
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
[{{speaker0.title}}]({{speaker0.url}}) présentera le système de cloud IaaS Apache CloudStack. Lancé au mois d’Avril, CloudStack est sur le point de faire sa première Apache release: CloudStack 4.0.

Cette présentation couvrira les étapes nécessaires à la release, le process de la Fondation Apache, les nouvelles features spécifiques aux solutions IaaS mais aussi la structure du logiciel et notamment un nouveau système de build avec Maven.

Sébastien nous fera une démo et nous montrera comment participer à ce nouveau projet Java.

Et dans la cadre de la Speaker Academy, [{{speaker1.title}}]({{speaker1.url}}) nous fera un Quickie de 15 mn sur Clojure en introduction de cette soirée
