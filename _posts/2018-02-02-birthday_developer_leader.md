---
layout: post
title: Birthday_developer_leader
speaker:
  - freddy_mallet
  - daniel_schwarz
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
{% assign speakersurl = "/jug/speakers.html?speaker=" %}

**Développeurs, être un expert incompris ou un leader d’opinions ne dépend que de vous** par [{{ speaker0.title}}]({{speakersurl}}{{page.speaker[0]}})

Après chaque GenevaJUG ou conférence, vous retrouvez vos collègues la tête pleine de nouvelles idées, de nouvelles technos et de nouvelles pratiques de développement. Serez-vous de ces acteurs capables de transformer cette belle énergie en changement ? Ou serez-vous l’un de ces développeurs incompris et frustrés d’être entourés par autant d’incompétents ?
Contrairement à ce que l’on voudrait bien croire les autres sont rarement le problème. Basé en partie sur des principes et techniques de communication mises en place chez SonarSource, l’objectif de cette présentation est de fournir quelques réflexes de base pour devenir un leader d’opinions au quotidien. Pourquoi ne pas commencer dès demain ?

**Boost Your Presentation** by [{{ speaker1.title}}]({{speakersurl}}{{page.speaker[1]}})

A bucket full of ideas on how to let your audience pay attention and never forget your presentation’s content.
