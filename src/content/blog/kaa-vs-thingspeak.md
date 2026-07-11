---
title: "Kaa vs ThingSpeak"
date: "2016-09-04"
tags: [IoT, Kaa, ThingSpeak]
---

When our university started to build an IoT platform, we did some research and
decided to use Kaa as our middleware/platform.
In this article we want to compare Kaa and ThingSpeak.

## Introduction

### [Kaa](https://www.kaaproject.org/)

Kaa is a multi-purpose middleware platform for building complete end-to-end IoT
solutions. Kaa has a 3-layer architecture as shown below:

![kaa-arch](/posts/kaa-arch.jpg)

Kaa provides some basic services for you, such as
**Notifications**, **Logging** and
**Events**. In Kaa you have to install an SDK on your nodes in order
to join them to your network; as a result your node choices decrease, but you
have more control over your nodes.

One of the most important features of Kaa is its log collector. With the log
collector you can store your logs in NoSQL databases like MongoDB, you can
analyze your data with many data processors like Hadoop, and finally you can
connect your log collector to Kaa with a simple REST URL callback.

Kaa runs in a distributed manner, and you can build your Kaa-based
environment on two or more servers for load distribution.

### [ThingSpeak](http://thingspeak.com/)

ThingSpeak provides **real-time data collection and storage**.
You can easily create a channel for your data on this platform and send your
data to it using the simple and readily available REST protocol!

Generally speaking, ThingSpeak is less complicated than Kaa, and in some ways
that's a good thing because you can get it up and running in a few steps.
ThingSpeak does not have any SDK or package requirements on your nodes, so you
can use whatever you want as long as it can create a REST request for ThingSpeak.

ThingSpeak provides a 2-layer architecture for your IoT platform. In this
architecture ThingSpeak just collects and stores your data, and you can do some
MATLAB-based analysis on it.

## Comparison

|  Platform  | Notification | Events | Logging | Layers |
| :--------: | :----------: | :----: | :-----: | :----: |
|    Kaa     |      ✔️      |   ✔️   |   ✔️    |   3    |
| ThingSpeak |      ❌      |   ❌   |   ✔️    |   2    |

## Conclusion

Personally, I think Kaa can be used in a local environment when
you have your own cloud and servers. With Kaa you can always keep your data in
your own place and manage your devices based on your applications.

It's worth noting that Kaa provides many ways to create management and other
types of applications, from REST to SDK! With ThingSpeak you don't even need a PC,
but it restricts you to MATLAB for data analysis and you can't build a controller
application for your nodes with this platform.
