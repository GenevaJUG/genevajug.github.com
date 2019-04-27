---
layout: post
title: Flex et GraniteDS en collaboration avec l'AUGG
speaker:
  - fabien_nicollet
  - william_drai
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
**1ème partie : Nouveautés Flex 4.6 / AIR 3 / Apache Flex par [{{speaker0.title}}]({{speaker0.url}})** ![Flex](/images/events/apache_flex.png){.margin-logo}{:align="right"}
Présentation des nouveautés de Flex 4.6 / AIR 3 pour le développement d’application à destination du desktop (Windows / Mac / Linux), web et mobiles (iOS, Android, BlackBerry Tablet OS). Explications sur le passage de Flex à la Apache Software Fundation.

**2ème partie : Flex et Spring avec GraniteDS par [{{speaker1.title}}]({{speaker1.url}})** ![GraniteDS](/images/events/graniteds.png){.margin-logo}{:align="left"}
Après une rapide présentation des fonctionnalités qu’apporte GraniteDS pour l’intégration de Flex et Spring, on passera à la pratique avec le développement en partant de zéro d’une application simple mais incluant l’ensemble des éléments qu’on attend habituellement d’une application d’entreprise : persistance, validation, sécurité et autres joyeusetés.

<center><a href="http://www.augg.ch/"><img src="/images/AUGG_Logo.jpg" alt="AUGG"></a></center>
