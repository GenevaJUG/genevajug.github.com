---
layout: post
title: Soirée Quickies pour les 6 ans du GenevaJUG
speaker:
  - alexis_roussel
  - zaid_boudamouz
  - moussa_boudamouz
  - benjamin_leroux
  - bertrand_dickele
  - jp_laurent
  - jc_plessis
youtube: KHDkQFOT7Xc
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker2id="/speakers/"|append: page.speaker[2]  %}
{% assign speaker3id="/speakers/"|append: page.speaker[3]  %}
{% assign speaker4id="/speakers/"|append: page.speaker[4]  %}
{% assign speaker5id="/speakers/"|append: page.speaker[5]  %}
{% assign speaker6id="/speakers/"|append: page.speaker[6]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
{% assign speaker2 = site.speakers|where:"id", speaker2id |first%}
{% assign speaker3 = site.speakers|where:"id", speaker3id |first%}
{% assign speaker4 = site.speakers|where:"id", speaker4id |first%}
{% assign speaker5 = site.speakers|where:"id", speaker5id |first%}
{% assign speaker6 = site.speakers|where:"id", speaker6id |first%}
{% assign speakersurl = "/jug/speakers.html?speaker=" %}

**Keynote surprise** par [{{speaker0.title}}]({{speakersurl}}{{page.speaker[0]}})

**Développement d’une application Ionic** par [{{speaker1.title}}]({{speakersurl}}{{page.speaker[1]}}) et [{{speaker2.title}}]({{speakersurl}}{{page.speaker[2]}})

Ionic, par où commencer ? Mais qu’est ce qui se cache derrière ? Mais comment gérer le multi-plateforme ? Et quelle compétence sont nécessaires ou requise pour développer Ionic ? Mais dans ce cas là ? Pourquoi le présenter au JAVA User Group ?

**Tester des comportements : Mais de quoi parle  t-on?** par [{{speaker3.title}}]({{speakersurl}}{{page.speaker[3]}})

L’idée de ce quickies est de mettre en avant que dans les approche de type BDD on ne teste jamais vraiment des comportements mais des exemples de ces derniers et de fournir quelques pistes pour pouvoir adresser cette problématique. Avec quelques exemples d’implémentation en java.

**Enterrons la couverture de code** par [{{speaker4.title}}]({{speakersurl}}{{page.speaker[4]}}) 

Ecrire des tests unitaires ou d’intégration c’est très bien, mais avec la popularité de l’agilité et du tableau de bord Sonar, un indicateur est en train de prendre une importance sans mesure avec sa vraie valeur: la couverture de code (par les tests). Les managers disposent enfin d’un chiffre pour s’assurer que les développeurs écrivent bien des tests. Mais en apparence seulement. Car cet indicateur porte en lui tellement de défauts qu’on peut se demander s’il ne mériterait pas d’être tout simplement enterré.
Qu’il s’agisse des “Assertion Free Testing” de Martin Fowler mais surtout des défauts, voire des dangers, plus subtils qu’il porte, je vous montrerai tout ce que je reproche à cet indicateur, et comment il mérite d’être vraiment considéré.

**Learn the Ways of the Graph** par [{{speaker5.title}}]({{speakersurl}}{{page.speaker[5]}}) 

La base de donnée relationnelle est le choix par defaut de nombreux projet, mais est-ce toujours le bon choix? Quand est-il pour les cas ou les relations entre les entités est aussi important que ses propriétés? Les bases de données graphe répondent à ce besoin en permettant de modéliser des relations complexes.
        
**Retour d’expérience - Architecture d’un bus d’intégration lightweight** par [{{speaker6.title}}]({{speakersurl}}{{page.speaker[6]}}) 

Pour un de nos clients en banque privée, nous consolidons dans des services REST, exposant un modèle métier unifié, des données issues de différents backends. Le tout est basé sur une architecture micro-service et orchestré par l’EAI Apache Camel. Au travers de cette présentation nous discuterons l’architecture mise en place, les contraintes, les succès et les pièges que nous avons rencontrés. Enfin, Nous finirons par une vision de l’architecture telle que nous la verrions aujourd’hui avec le recul de cette expérience.
