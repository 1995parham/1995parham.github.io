---
title: "Kaa vs ThingSpeak"
date: "2016-09-04"
tags: [IoT, Kaa, ThingSpeak]
---

When our university had started to create IoT platform, we did some research and
decided to use Kaa as our middleware/platform.
In this article we want to compare Kaa and ThingSpeak.

### Introduction

#### [Kaa](https://www.kaaproject.org/)

Kaa is multi-purpose middleware platform for building complete end-to-end IoT
solutions. Kaa has 3 layer architecture as below:

![kaa-arch](/posts/kaa-arch.jpg)

Kaa provides some basic services for you such as
**Notifications**, **Logging** and
**Events**. In Kaa you have to install SDK on your nodes in order
to join them to your network, as a result your node choices decrease, but you
have more control on your nodes.

One the most important features of Kaa is it's log collector, with it's log
collector you can store your log in NoSQL databases like MongoDB, you can
analyze your data with many data processors like hadoop and at the end you can
provide your log collector to kaa with simple REST URL callbacking.

Kaa provides in distributed manner and you can build your Kaa based
environment on a two or more server for load distribution.

#### [ThingSpeak](http://thingspeak.com/)

ThingSpeak provides **Real-time data collection and storage**.
You can easily create channel for your data in this platform and send your
data to it using simple and available REST protocol!

Generally speaking ThingSpeak is less complicated than Kaa but in some point
of views it's a good thing because you can up and running it in few steps.
ThingSpeak do not have any SDK or package requirements in your nodes, so you
can use whatever you want util they can create REST request for ThingSpeak

ThingSpeak indeed provides 2 layer architecture for your IoT platform, in this
architecture ThingSpeak just collects and stores your data and you can do some
Matlab based analysis on it.

### Comparison

|  Platform  | Notification | Events | Logging | Layers |
| :--------: | :----------: | :----: | :-----: | :----: |
|    Kaa     |      ✔️      |   ✔️   |   ✔️    |   3    |
| ThingSpeak |      ❌      |   ❌   |   ✔️    |   2    |

### Conclusion

Personally I think Kaa can be used in a local environment when
you have your own cloud and servers, with Kaa you can always have your data in
your place and provide management on your devices based on your applications.

It's good to remind that Kaa provides many way for creating management and other
type applications from REST to SDK! With ThingSpeak you don't need even a PC
but it restrict you to Matlab for data analysis and you can't provide controller
application for your nodes with this platform.
