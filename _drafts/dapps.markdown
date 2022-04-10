---
layout:     post
title:      "从月活数和交易规模看目前流行的web3应用"
subtitle:   "popular web 3.0 apps"
date:       2022-04-10
author:     "awis.me"
header-img: "img/app.jpg"
tags:
    - web3
    - blockchain
---

> 目前在Web 3的领域里，有哪些明星应用？这些应用的MAU（月活用户数）是多少？和金融相关的应用中，月交易规模是多少美金？
> 参考资料一的dappradar网站提供了实时的数据可以分析。 

Web3应用和目前的web 2.0互联网应用有一点不一样， 所有用户数据和交易数据都是透明的。不需要通过应用的运营方，从区块链上就能获取真实的运营数据。

按照dappradar网站的统计，本文分别从两个维度看最近30天内的明星dapp应用：

- 活跃度：月活跃用户数（钱包数）前十的应用
- 交易规模：
  - 进行交易流入的代币（等值美金）排名前十的应用
  - 智能合约内的资产总值排名前十的应用

## 1. 活跃度

![picture 37](/img/1649519204938.jpg)  

上表是30天内，按照使用用户数目（独立账户个数）排列的TOP 10应用。

排名| 应用名称 | 简介
---|-----|----------
1| PancakeSwap | BSC上领先的去中心化交易所
2| Primelab | 从介绍看，Primelab 为用户提供了一个区块链生态系统，主要特征是比较好的可访问性和可用性。 所有 Primelab dapp 都允许用户 通过电子邮件或电话注册帐户。从数据看，其用户数量非常不稳定。
3| AtomicAssets | 实现 WAX 区块链上的NFT协议（对应于以太坊上，常见的 NFT 标准ERC721 、ERC1155）。
4| Alien Worlds | 游戏相关 
5| Splinterlands | 游戏相关
6| OpenSea | 第一个也是最大的加密收藏品点对点市场，其中包括游戏物品、数字艺术和其他由区块链支持的虚拟商品。
7| Axie Marketplace | 游戏相关
8| Upland | 游戏相关
9| Katana | 建立在 Ronin 之上的自动做市商 (AMM) 去中心化交易所 (DEX)。
10| Magic Eden | Solana区块链上的NFT市场。

从上表分析可见：
- 游戏应用的参与人数比较多， 前10有4个都是游戏相关应用
- AMM等类似uniswap的去中心化交易所也很活跃，例如：Pancackswap，Katana
- NFT交易相关应用活跃： OpenSea，Magic Eden， AtomicAssets
- Primelab是唯一一个比较特殊的存在， 其卖点是易用性。让普通人更容易使用blockchain的服务。 但观察其数据，很不稳定。 怀疑它冲上前十是偶然。

## 2. 交易规模

### 2.1. 交易规模前10
![picture 36](/img/1649519175042.jpg)  

### 2.2. 资产规模前10
![picture 38](/img/1649519234243.jpg)  

从交易规模（过去30天流入到智能合约的等值美金金额）和资产规模（智能合约上沉淀的资产规模存量）看， 排名前十的应用无一例外，都是DeFi类应用。 并且以在各个不同的区块链上的去中心化交易所为主。 例如，在当前的DeFi系统中，三个各具特点的AMM应用都在TOP 10列表中：Uniswap，Curve，1inch。

> ETH2 Deposit Contract 持有的资金明显高于其它所有的应用。 这个应用是为以太坊迁移到2.0，也即使用基于POS的共识机制而服务的。 2.0时代的validator类似于1.0时代的矿工。成为validator需要质押以太币。这个智能协议是收取质押的以太币用的。

Polygon POS Bridge 和 Ronin Bridge 等在以太坊和 L2 侧链之间转移资产的应用也有相当大的资产沉淀。

排名TOP 10的应用都支持以下一个或者多个区块链平台：
- Layer1 公链：ETH, WAX, Flow, Solana, NEAR, Hive(Steem分叉), EOS, Klaytn（韩国Kaokao), Waves（俄罗斯), Avalanche（雪崩链）,Moonbean, Fantom;
- Layer2 侧链：BSC、Ronin、Polygon、Immutable X， Optimism


## 3. 参考资料

- [https://dappradar.com/rankings](https://dappradar.com/rankings)