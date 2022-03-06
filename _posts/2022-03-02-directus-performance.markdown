---
layout:     post
title:      "设计高性能可扩展的API服务"
subtitle:   "Directus performance and scaling"
date:       2022-03-02
author:     "awis.me"
header-img: "img/sea.jpg"
tags:
    - Open Source
    - Directus
    - CockroachDB
---

Directus本身是NodeJS实现的API服务器。 其能支持多大的TPS取决于数据库系统，API查询设计等多个因素。本文提供一些架构上的考虑，目的是使得Directus应用能随着业务的增长，通过增加硬件等方式，同步提高系统处理能力，在性能上具有好的扩展性。

## 1. 如何规划可扩展的Directus应用

Directus 对于高负载情况的处理有以下两个关注点：
1. 横向扩展应用服务器（directus实例多部署几个）
2. 数据库服务器采用高性能方案，例如Amazon Aurora或者CockroachDB

> Rijk van Zanten: That being said, I do highly recommend horizontally scaling your Directus instance if you're planning on running it at scale. Make sure you use Redis for caches / rate limiter, and S3 or another shared file storage for the file storage. At that point, the bottleneck will become the amount of allowed connections and the overall server performance of the database. That being said, there's a lot of database services nowadays that scale virtually endless, like Amazon Aurora or CockroachDB. 

## 2. 应用服务器的横向扩展

关于横向扩展，需要注意所有实例共享的数据不能存本地，需要使用CDN或者Redis等高性能方案。实例的共享数据包括：图片，文件，cache等

Directus由于使用JWT，所以没有session共享的问题。 每次API请求在哪一个实例处理都一样，实例没有存储用户状态信息。

## 3. 数据库的可扩展性

目前Directus 9.5版本支持了CockroachDB， 使用PG的驱动。 小强数据库CockroachDB这种全分布式数据库是一个革命性产品。 大大增强系统的可扩展性。

例如，在多个国家的IDC都部署CockroachDB节点，组网后，在各个国家可以分别接入。这样可以：
- 增加数据库处理带宽，
- 引入多城市，多IDC提高容灾备份能力，
- 海外用户的应用在本地接入数据库，API服务器在海外机房部署，降低访问延迟

持续关注 Directus 和 CockroachDB 在生产环境的使用和测试情况。

## 4. 参考资料

- [performance discussion](https://github.com/directus/directus/discussions/11563)
- [Implement CockroachDB support](https://github.com/directus/directus/pull/10113)