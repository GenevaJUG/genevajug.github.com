---
layout: post
title: Java Static Analysis and Improve your tests quality with Mutation Testing
speaker:
  - nicolas_peru
  - nicolas_frankel
  - evgeny_mandrikov
youtube: biLyXaJwO3c
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker2id="/speakers/"|append: page.speaker[2]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
{% assign speaker2 = site.speakers|where:"id", speaker2id |first%}

**DIY : Java Static Analysis** par [{{speaker0.title}}]({{speaker0.url}}) (french talk)
L’analyse statique permet de detecter des bugs et des problèmes dans votre code sans l’executer.
Cette présentation vous promet, en toute simplicité, d’ecrire votre propre analyseur pour Java basé sur SonarQube.
Pour y arriver il faudra comprendre les challenges d’analyse du langage, du parsing à l’execution symbolique, pour pouvoir coder des vérifications specifiques à vos projets !

**Improve your tests quality with Mutation Testing** par [{{speaker1.title}}]({{speaker1.url}}) et [{{speaker2.title}}]({{speaker2.url}}) (english talk)
Unit testing ensures your production code is relevant. But what does ensure your testing code is relevant? Come discover mutation testing and make sure your never forget another assert again.i
In the realm of testing, the code coverage metrics is the most often talked about. However, it doesn’t mean that the test has been useful or even that an assert has been coded. Mutation testing is a strategy to make sure that the test code is relevant.
In this talk, we will explain how Code Coverage is computed and what its inherent flaw is. Afterwards, we will describe how Mutation Testing work and how it helps pointing out code that is tested but leave out corner cases. We will also demo PIT, a Java production-grade framework that enables Mutation Testing on a simple code base. If time allows, a demo will also show how PIT can be integrated with SonarQube.
