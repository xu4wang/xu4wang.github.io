---
layout:     post
title:      "DEX: 去中心化交易所"
subtitle:   ""
date:       2022-04-19
author:     "awis.me"
header-img: "img/star_night.jpg"
tags:
    - web3
    - blockchain
---

## Uniswap AMM

假设有两个币， USD和ALT。 其AMM算法是使得流动性池中这两个币的数量的乘积保持一个常数。

![picture 39](/img/1649868407923.png)  

上图蓝色是x,y乘积为常数时候的曲线。当交易时候，付出delta（y),就会得到delta（x）。

由于订价只和公式有关，所以当外部USD和ALT的价格差别变动时候，会导致有人套利。 套利的结果是给流动性提供者带来“无常损失”。

蓝色曲线的斜率是在不同的x，y数量组合下，对应的兑换价格。 套利的最终结果会导致x，y组合移动到斜率和外部价格一致的点。 也就是x，y两种币的数量比值发生变化。 这样，当流动性提供者变现时候， 他得到的两种币的比值也变化了。而且由于套利者的作用，一定是价格上涨的哪一种币变少了。

> 流动性提供者注入流动性时候，按照当前价格对应的比例注入。 注入后，得到一个份额（自己的投入占整体池子的比例）。 退出的时候， 按照比例，分别提取当前池子里面的两种币。




## 参考资料

- [淺談自動做市商 (AMMs) 機制：從 Uniswap 理解 Balancer](https://medium.com/@cic.ethan/%E6%B7%BA%E8%AB%87%E8%87%AA%E5%8B%95%E5%81%9A%E5%B8%82%E5%95%86-amms-%E6%A9%9F%E5%88%B6-%E5%BE%9E-uniswap-%E7%90%86%E8%A7%A3-balancer-999b700c001)