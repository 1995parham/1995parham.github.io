---
title: "ThingSpeak Domain Model"
date: "2016-09-05"
tags: [IoT, ThingSpeak]
---

## [Domain Model](https://en.wikipedia.org/wiki/Domain_model)

In the [Unified Modeling Language (UML)](https://en.wikipedia.org/wiki/Unified_Modeling_Language) a [class diagram](https://en.wikipedia.org/wiki/Class_diagram) is used to represent the domain model.

## Code Review

In ThingSpeak code there is a ruby file is named _config/routes.rb_, in
this file ThinkSpeak provides mapping between HTTP URLs and HTTP Controllers
that resident under _app/controllers/_ folder.

Models are provided under _app/models_ folder and database migirations
also provided under _app/admin_.

## Tables

ThingSpeak provides following tables:

- Active Admin Comments
- Admin Users
- API Keys
- Channels
- Commands
- Comments
- Daily Feeds
- Devices
- Failed Logins
- Feeds
- Headers
- Pipes
- Plugins
- Reacts
- Scheduled Thing Https
- Taggings
- Tags
- Talk Backs
- Thing Https
- Tweet Controls
- Twitters Accounts
- Users
- Watchings
- Windows
