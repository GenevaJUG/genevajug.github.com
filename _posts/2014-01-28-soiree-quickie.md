---
layout: post
title: Soirée Quickies pour le 4ème anniversaire du GenevaJUG
speaker:
  - audrey_lievremont
  - nicolas_frankel
  - guillaume_vial
  - teryk_bellahsene
  - philippe_kernevez
  - nicolas_peru
youtube: RaXHKYiYxvs
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker2id="/speakers/"|append: page.speaker[2]  %}
{% assign speaker3id="/speakers/"|append: page.speaker[3]  %}
{% assign speaker4id="/speakers/"|append: page.speaker[4]  %}
{% assign speaker5id="/speakers/"|append: page.speaker[5]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
{% assign speaker2 = site.speakers|where:"id", speaker2id |first%}
{% assign speaker3 = site.speakers|where:"id", speaker3id |first%}
{% assign speaker4 = site.speakers|where:"id", speaker4id |first%}
{% assign speaker5 = site.speakers|where:"id", speaker5id |first%}
**Clean HTML** par [{{speaker0.title}}]({{speaker0.url}})

Dans toute application Web notre principal outil de rendu est le HTML. Or beaucoup de développeurs connaissent mal cet outil et font un peu comme ils peuvent pour obtenir le rendu qu’ils veulent. Pourquoi ne faut-il pas faire de la mise en page par tableaux, qu’est-ce que le HTML sémantique ? Comment faire du HTML propre ? C’est ce que je me propose de vous expliquer !

**Les spécificités des tests d’intégration** par [{{speaker1.title}}]({{speaker1.url}})

C’est quoi un test unitaire ? Et si je fais du JUnit, est-ce que je fais du TU ? En quoi les tests d’intégration sont-ils différents ? Et en quoi peuvent-ils m’aider à améliorer la qualité de mon logiciel ? Quels sont les outils qui permettent de faciliter les TU ? Et finalement, comment utiliser ces outils au mieux ?

**Centre de développement agile chez Nespresso :retour d’expérience** par [{{speaker2.title}}]({{speaker2.url}}) 

L’agilité aux frontières du waterfall…
Passer de 15 à 80 développeurs sur 3 sites différents : en mode agile ?
Initiatives, réussites, difficultés, …
What else ?


**git : un workflow simple et efficace** par [{{speaker3.title}}]({{speaker3.url}}) 

live coding avec les opérations usuelles et un workflow éprouvé et conseillé
 
**Comment avantageusement remplacer Excel par R pour traiter vos fichiers de log** par [{{speaker4.title}}]({{speaker4.url}}) 

Nous verrons comment simplement exploiter des fichiers de log issus de tests de performances ou de production.
J’ai longtemps utilisé Excel pour faire exploiter ces fichiers, nous verrons dans cette session comment utiliser R sans être un expert (je n’en suis pas un ) et contourner les limitation d’Excel, à savoir :
* les volumes (on parle rapidement de plusieurs centaines de milliers de lignes à traiter, voire plus)
* la richesse fonctionnelle (calculer simplement une moyenne glissante, un percentile 95th, une interpolation)
* l’industrialisation (opérations manuelles/temps entre la récupération d’un nouveau fichier de log et la visualisation des nouveaux graphs)

**Reverse Psychologie in Java development** par [{{speaker5.title}}]({{speaker5.url}}) 

Au fil des années les developpeurs java ont acquis des biais psychologiques sur certaines pratiques du developpement qui sont interessantes à explorer (bonnes ou mauvaises pratiques). Voire, ces biais sont également à exploiter pour rendre évidentes les mauvaises pratiques qui ne sautent pas toujours aux yeux.
Durant le talk, nous parlerons de quelques-unes de ces habitudes et nous verrons pourquoi elles sont parfois mauvaises et comment les contourner.
