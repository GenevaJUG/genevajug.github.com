---
layout: post
title: Java Champions Night!
speaker:
  - sebastian_daschner
  - andres_almiray
---
{% assign speaker0id="/speakers/"|append: page.speaker[0]  %}
{% assign speaker1id="/speakers/"|append: page.speaker[1]  %}
{% assign speaker0 = site.speakers|where:"id", speaker0id |first%}
{% assign speaker1 = site.speakers|where:"id", speaker1id |first%}
**When, why and how to CQRS** by [{{ speaker0.title}}]({{ speaker0.url }}).

Most of today’s enterprise applications base on a CRUD data model that is simple and straightforward to implement. Another concept of how to model applications is Command Query Responsibility Segregation (CQRS) that enables interesting solutions and use cases, especially with rising demands of scalability. In this session I’ll show the concept and benefits of CQRS, to which other buzzwords such as eventual consistency, event-driven architectures and event sourcing it is related and how to realize a CQRS application. The questions whether this concept can be realized with Java EE technology, where the framework already offers solutions and where it has to be extended will be answered. Most of the time will be spent live-coding and examining the ‘devil is in the details’ cases of both approaches.

**Making the Most of Your Gradle Build** by [{{ speaker1.title}}]({{ speaker1.url }}) (english talk)

Maven has been the dominant build tool in the Java space for quite some time now. While it’s a proven technology it’s certainly aged, there are new and better alternatives out there. Gradle is perhaps the one that’s better positioned to succeed Maven as the build tool of choice. Since 2012 Gradle adoption has skyrocketed. Not only do popular and big open source projects, such as Spring and its portfolio, Hibernarte and Groovy, have migrated to Gradle but large enterprises too. Not to forget that Gradle is the defacto build tool for Android applications since 2013.
