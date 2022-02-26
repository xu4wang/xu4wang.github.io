---
layout:     post
title:      "Leo editor在python下的开发即将结束"
subtitle:   "Leo's python development is nearing its end"
date:       2022-02-19
author:     "awis.me"
header-img: "img/leo.jpg"
tags:
    - 知识管理
    - Python
    - JavaScript
    - VS Code
    - Open Source
---

## Leo 要停止开发了

早上在邮件列表里面读到EKR的一封信：

> Leo 6.6 may be the last substantial release in Leo's history. At present, the 6.6 to-do list contains five items. There are no items at present on the 6.7 to-do list. Many open items remain, but I have little desire to do any of them.  Expect 6.6 final in a month or so.
> 
> The leojs project now seems like the future of Leo. Indeed, it melds Leo with vs code, an unbeatable combination imo.

作为Leo Editor的老用户， 在这里缅怀下。 EKR在邮件中还给leojs做了一个广告。 让人不禁想起了：

> Anything that can be Written in JavaScript, will Eventually be Written in JavaScript

## Leo 回忆 

我曾经有一段时间使用Leo做知识管理。 记录大大小小的项目信息，写文档，写会议记录，记笔记。 

![picture 5](/img/1645335424986.png)  

还对它做过一些扩展：
- 增加了Git Add， Commit 和 GitHub Push的快捷键， 一键将Leo的文件自动提交本地git库，并Push到GitHub上的一个私有仓库做备份, 上面图片中的save-push按钮就是做这个的。
- 读取手机发来的[xmpp](https://xmpp.org/)消息，并在特定Leo节点下生成图片文件和文字信息。
- 对某一个节点的信息进行加解密。
- 增加了和[simpletask](https://f-droid.org/packages/nl.mpcjanssen.simpletask/) [todo.txt](https://github.com/todotxt/todo.txt)文件进行[双向同步的功能](https://github.com/leo-editor/leo-editor/issues/1499)。 可以在手机和电脑上同时管理一个todo清单。

![picture 4](/img/1645334159273.png)  

后来转到VS Code的Foam之后， Leo逐渐就用的越来越少了。 Leo本身是一个Outliner， 可以把知识按照树状结构展示。每一个节点有topic，有内容。 节点有各种不同的类型，对应不同的展示方式。

在社区里有人用它写代码，Leo是一个比较大的Python工程，它本身的开发就是在Leo下进行的。 也有很多非软件专业人员用它来写文档，记事。

## 克隆操作，Leo的灵魂

Leo有一个特性让人印象深刻。 它可以给知识做视图（View）。 例如你在里面保存了很多小的知识片段。每个小段落都是一个Node。 当你有一个新的项目的时候， 可以建立一个节点，然后把系统中其他的节点克隆到这个项目下面。 

> 这里的克隆是Leo 社区的叫法，实际叫引用更贴切一些。因为信息并没有被复制，而是在视图内被引用了。

如果把每一个子树看作一个项目视图，系统中同一个段落可以出现在不同的视图里面。 改一个地方，其它地方也会改变。 删除一个视图，不会影响其它地方。 只有当这个段落自身以及它所有的克隆都删除了，段落承载的信息才真正从系统删除。

这样随时可以按照场景， 按照项目，来给知识建立多种展现方式。

对于一段时间内需要集中处理的工作，可以很方便的建一个试图，把需要关注的节点都克隆进去。 工作结束后把视图节点删除就可以了。 工作成果已经反映在系统中其它节点里面了。

Leo内部是使用有向无环图(directed acyclic graph)的数据结构来存储节点，支持克隆操作。

![picture 3](/img/1645294282707.png)  

上图中，在节点A和C下，都能看到节点D。之所以用无环图，是因为Leo有很多针对节点的命令都需要遍历所有子节点。例如，把一个节点生成PDF格式文件，所有子节点都是章节。无环图可以很好的支持这种场景。

## 未来

Leo功能强大，扩展性很好，开发社区也很友好。 问题是它作为编辑器，生态环境不够好，社区还是太小。 

相信拥抱VS Code是正确的选择。用leojs把Leo的精髓作为插件带到VS Code里面去，和其它的插件来协同，给用户带来更丰富的功能。




