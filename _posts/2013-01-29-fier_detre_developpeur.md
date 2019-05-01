---
layout: post
title: Soirée fier d'être développeur
speaker:
  - pierre_pezziardi
  - audrey_neveu
  - freddy_mallet
  - olivier_gaudin
---

<ul id="grid-premium">
      <li><img align="left" alt="GenevaJug" border="0" src=
      "/images/geneva-jug-duke-181.png" title="GenevaJug"></li>
      <li>
        <a href="http://www.augg.ch/" target="_blank"><img align=
        "left" alt="AUGG" border="0" src="/images/AUGG_Logo.png"
        title="AUGG"></a>
      </li>
      <li>
        <a href="http://www.meetup.com/jsromandie/" target=
        "_blank"><img align="left" alt="JSRomandie" border="0" src=
        "/images/jsromandie.jpeg" title="JSRomandie"></a>
      </li>
      <li>
        <a href="http://genevarb.com/" target="_blank"><img align=
        "left" alt="Geneva Ruby Brigade" border="0" src=
        "/images/genevarb.png" title="Geneva Ruby Brigade"></a>
      </li>
</ul>
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker2id="/speakers/"|append: page.speaker[2]  %}
{% assign speaker3id="/speakers/"|append: page.speaker[3]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
{% assign speaker2 = site.speakers|where:"id", speaker2id |first%}
{% assign speaker3 = site.speakers|where:"id", speaker3id |first%}
{% assign speakersurl = "/jug/speakers.html?speaker=" %}

Pour fêter ses 3 ans le GenevaJUG invite les autres users groups de Suisse Romande pour une soirée spéciale “Fier d’être développeur”

**Fier d’être informaticien** par **[{{speaker0.title}}]({{speakersurl}}{{page.speaker[0]}})**

En 2013, quelle place occupe le développeur dans l’entreprise ? Comment son rôle, sa capacité à innover et à agir peuvent-ils influencer l’efficacité de celle-ci ? Du rôle de spectacteur au rôle d’acteur, que pouvons-nous faire chacun, au quotidien, pour que le métier de Développeur soit perçu comme une richesse à cultiver plus que comme un coût à diminuer ?

**Programatoo** par **[{{speaker1.title}}]({{speakersurl}}{{page.speaker[1]}})**

Alors que l’informatique est de plus en plus présente dans notre vie, son apprentissage à l’école reste très superficiel : un peu d’internet, un peu de logiciel type traitement de texte… mais pas de programmation. A l’heure où les enfants naissent avec ces technologies, on ne prend pas la peine de leur donner les clés pour devenir utilisateur de l’outil informatique, et pas seulement consommateur. Mais alors … comment leur faire découvrir notre métier et notre passion ? C’est l’objectif que s’est fixé Programatoo et je vous présenterai ce que nous avons mis en place pour y parvenir.

**Développer c’est Tester ?** par **[{{speaker2.title}}]({{speakersurl}}{{page.speaker[2]}})** et **[{{speaker3.title}}]({{speakersurl}}{{page.speaker[3]}})**

Le développement logiciel est l’activité coeur chez SonarSource, celle qui mobilise les passions et les énergies. Lors de cette session de 40 minutes, nous vous présenterons 4 ans d’évolution des pratiques de développement et ce sans utiliser de buzzwords ! 
