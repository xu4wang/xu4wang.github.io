import { _ as _export_sfc, o as openBlock, c as createElementBlock, V as createStaticVNode } from "./chunks/framework.XmXKRmb4.js";
const _imports_0 = "/assets/1648889277551.JGVw8Hjk.jpg";
const _imports_1 = "/assets/1648799605062.rvBflX5C.png";
const _imports_2 = "/assets/1648635224101.MGbce2_a.jpg";
const _imports_3 = "/assets/1648577718493.gDuLI4g5.png";
const _imports_4 = "/assets/1648885706468.4aFxcNSh.jpg";
const __pageData = JSON.parse('{"title":"比特币和区块链","description":"","frontmatter":{"title":"比特币和区块链","subtitle":"bitcoin and blockchain","date":"2022-04-03T00:00:00.000Z","author":"awis.me","header-img":"img/earth.jpg","tags":["blockchain","bitcoin"]},"headers":[],"relativePath":"posts/2022-04-03-blockchain.md","filePath":"posts/2022-04-03-blockchain.md"}');
const _sfc_main = { name: "posts/2022-04-03-blockchain.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<p>《比特币白皮书》是一篇很短的论文， 只有12小段。 Satoshi Nakamoto发表于2008年10月31日。其中蕴含的思想在后来发展出了区块链。 白皮书很值得一看，是这个领域经典中的经典。这篇笔记从比特币白皮书中的视角开始展开，加入了一些对比特币网络相关实现细节的理解。</p><p><img src="' + _imports_0 + '" alt="picture 24"></p><h2 id="_1-比特币和区块链原理" tabindex="-1">1. 比特币和区块链原理 <a class="header-anchor" href="#_1-比特币和区块链原理" aria-label="Permalink to &quot;1. 比特币和区块链原理&quot;">​</a></h2><p>比特币方案的目标是要实现点对点的电子现金，允许在线支付直接从一方发送到另一方，无需通过金融机构作为中介。</p><p>它要在一个点对点网络，去中心化的环境中解决如下几个问题：</p><ol><li>如何确定电子现金是谁的？你只能花自己的钱，不能花别人的。</li><li>如何防止双花（就是上面邮件中的Double Spending）？你的一笔钱只能被花一次，不能趁记账还没完成，同时发起两笔交易，把一笔钱花两次。</li><li>如何发行货币，如何驱动网络自发运转。</li></ol><p>这些问题在有金融机构做中介时候是很容易解决的，例如：</p><ol><li>银行给客户开通账户，记录这个客户有多少钱，并给客户配置支付密码。 客户通过自己的密码在银行做认证，证明是本人后，支付全部或部分金额。</li><li>花钱的时候，银行会实时变更客户的账户余额。这样越花越少，不存在一笔钱花了两次的可能。</li><li>货币发行和整个系统运转都是通过金融机构。</li></ol><p>在比特币系统中：</p><ol><li>针对第一个问题，使用传统的非对称加密机制解决。比特币系统中每一个账户都关联一个公钥，用户使用私钥签名自己的交易。系统通过验证交易的数字签名来确定交易的合法性。</li><li>针对第二个问题，比特币系统提出了一种新方法。把交易打包进区块，进行哈希摘要，按照摘要把区块链接成一个分布式的不断增长的链状结构，链状结构能让大家对账本里面的交易的先后顺序有共识（形成Single Source of Truth），如果前面有交易已经花过一笔钱了，后面的交易想要再花这同一笔钱就无法被大家认可，不能上链形成共识。这种机制在比特币白皮书中第一次被提出来，后来被称作区块链。区块打包上链的工作是所有参与者分布式竞争完成的，在比特币中，采用POW（工作量证明）做共识算法。关于POW，下文挖矿环节有详述。</li><li>针对第三个问题， 货币发行和整个交易系统的运行都是通过矿工的挖矿行为来驱动。</li></ol><blockquote><p>比特币使用公私钥系统来解决用户认证的问题。 这个方案具有很强的隐私保护能力。 举个极端的例子，一个人可以在小黑屋里，在完全离线的环境下，用笔和纸生成一对公私钥，然后用公钥导出一个比特币地址。 只要把这个地址（例如：1J7mdg5rbQyUHENYdx39AWISME7fsLpEoXZy）发布出去，他就可以接受汇款了。 入账后， 只有小黑屋里的这个人可以操作区块链上的那笔钱（因为只有他有该比特币账户对应的私钥）。如果刻意隐瞒，比特币网络上的钱很难追踪到对应的人。当然，隐私在比特币和法币的转换过程中有可能泄漏。</p></blockquote><p><img src="' + _imports_1 + '" alt="picture 22"></p><p>上图示意比特币的区块链。图中Block2的Header里面，保存着Block 1 的Header的哈希值。 哈希值起到了指向链表中父节点指针的作用。 根据上链的先后顺序，Block2中的交易比Block1中的交易晚， Block3中的交易比Block2中的交易晚。 每一个区块（Block）中记录的交易放在区块体中， 对区块体中所有交易也做一次哈希，得到的值放到区块头里面（在Merkle Root域）。</p><p>通过区块链，保证了交易的先后顺序，也保证了区块链中形成共识的交易不可篡改（因为交易的哈希也存在区块头中，改变交易的内容会导致区块头里面的Merkel Root哈希值对不上， 如果把Merkle Root的值也改了，又会导致区块头的哈希值变化，区块头哈希值变化就会让区块本身从链表里面移除）。</p><blockquote><p>The network timestamps transactions by hashing them into an ongoing chain of hash-based proof-of-work, forming a record that cannot be changed without redoing the proof-of-work. The longest chain not only serves as proof of the sequence of events witnessed, but proof that it came from the largest pool of CPU power. As long as a majority of CPU power is controlled by nodes that are not cooperating to attack the network, they&#39;ll generate the longest chain and outpace attackers. --- 比特币白皮书</p></blockquote><p>以上是理论。 下面是实现细节。</p><h2 id="_2-比特币网络是如何运行的" tabindex="-1">2. 比特币网络是如何运行的？ <a class="header-anchor" href="#_2-比特币网络是如何运行的" aria-label="Permalink to &quot;2. 比特币网络是如何运行的？&quot;">​</a></h2><blockquote><p>The steps to run the network are as follows:</p><ol><li>New transactions are broadcast to all nodes.</li><li>Each node collects new transactions into a block.</li><li>Each node works on finding a difficult proof-of-work for its block.</li><li>When a node finds a proof-of-work, it broadcasts the block to all nodes.</li><li>Nodes accept the block only if all transactions in it are valid and not already spent.</li><li>Nodes express their acceptance of the block by working on creating the next block in the chain, using the hash of the accepted block as the previous hash. ---- 比特币白皮书</li></ol></blockquote><h3 id="_2-1-用户发起交易" tabindex="-1">2.1. 用户发起交易 <a class="header-anchor" href="#_2-1-用户发起交易" aria-label="Permalink to &quot;2.1. 用户发起交易&quot;">​</a></h3><p>当用户发起一笔转账交易时候，会把自己的公钥，目的账户地址，金额等信息打包，并进行签名。 得到一个打包好的交易。然后这个交易被广播到一个mempool里面。</p><p><img src="' + _imports_2 + '" alt="picture 18"></p><p>上图是全网mempool中实时待处理的交易个数变化。</p><blockquote><p>在参考资料2，可以实时查看比特币网络当前的mempool情况。 也可以查看当前所有链上区块的详情，以及所有待上链的交易详情。</p></blockquote><h3 id="_2-2-矿工对交易进行记账" tabindex="-1">2.2. 矿工对交易进行记账 <a class="header-anchor" href="#_2-2-矿工对交易进行记账" aria-label="Permalink to &quot;2.2. 矿工对交易进行记账&quot;">​</a></h3><p>在mempool里面的交易，每一个比特币矿工都可以自由选择，去放到一个区块里面打包。 在选择的时候，需要验证交易的合法性（转出方币是不是够，签名对不对等）。矿工也会根据交易中的交易费来选择交易（给小费高的顾客会先得到服务员响应）。 矿工填满自己的区块后，就开始挖矿（计算哈希）。 挖矿是用穷举法，不断尝试调整区块头中的Nonce，然后对区块头做哈希运算，检查得到的区块头哈希值是否符合要求。</p><p>系统对区块头的哈希值有要求（例如要求前面有连续若干个0）。大家竞争，谁先找到符合要求的哈希值，谁的区块就被加入链尾。</p><p>通过调节难度来概率上控制全网能够在多长时间挖出一个区块，所谓难度，正比于找到符合要求哈希值的尝试次数的期望值。 比特币系统设置每10分钟产生一个区块，如果发现出的太快了，就增加难度，反之亦然。</p><p>所有矿工都基于mempool里面的交易进行选择，打包，哈希穷举尝试， 当一个矿工成功找到Nonce值（使得当前尝试的区块头的哈希值满足要求），他会立刻向全网广播该区块。其他矿工在收到新区块后，会对新区块进行验证（检查这个区块里面的交易是不是都有效，有没有双花，也会检查区块的Merkle Root等数据），如果有效，就把它添加到区块链的尾部。同时会抛弃自己当前正在计算还没有算完的区块，转而开始计算下一个区块，进行下一轮工作量证明的竞争。</p><blockquote><ol><li>矿工会在自己挖到的区块里面加一笔交易。 是挖矿收入（coinbase）。 每一个区块的奖励最初是50比特币，每4年减半。 目前是6.25比特币。比特币区块链的交易里面， 只有挖矿收入是没有地址来源的，挖矿收入交易每个区块里面有且仅有一笔。 本质上所有比特币最原始出处都是挖矿收入。挖矿就是货币发行。</li><li>由于区块中有coinbase交易，矿工找到符合要求的Nonce后，可以放心的把区块广播出去。其它矿工无法剽窃。</li></ol></blockquote><h2 id="_3-主要数据结构" tabindex="-1">3. 主要数据结构 <a class="header-anchor" href="#_3-主要数据结构" aria-label="Permalink to &quot;3. 主要数据结构&quot;">​</a></h2><p><img src="' + _imports_3 + '" alt="picture 17"></p><p>比特币系统的数据结构较简单，各个节点之间传递的数据就是区块。每一个区块的结构示意图如上。区块包括Header和Body，Header里面有：</p><ul><li>Prev Block：前一个区块的哈希值，用来链接不同的区块。</li><li>Merkle Root：该区块所有交易的哈希值。用来保证区块体的内容不被修改。</li><li>Time：unix 时间戳。</li><li>Bits： 难度系数，用来控制得到目标哈希值所需要的尝试次数的期望.</li><li>Nonce：随机数，挖矿时候用来调整，以得到不同的哈希值。</li></ul><p>Body（区块体）里面放的是一笔一笔的交易。上图中每一个黑色或绿色的横条都代表一笔交易。绿色那笔是挖矿收入交易。</p><blockquote><p>注意系统用Merkle Tree来对区块体中的所有交易做哈希。和普通的哈希算法，例如MD5，SHA256等不同， Merkle树可以在不知道所有区块体信息的情况下，查看一个交易是否在这个区块里面。</p></blockquote><p>比特币区块链是一个分布式数据库，其数据就是这些区块组成的一个单向链表。每一个节点都可以保存所有这些区块数据来获得整个比特币区块链的所有状态。 比特币网络的当前状态，就是每一个地址对应的余额。</p><blockquote><p>区块链中记录的交易，类似于Redis的AOF文件， 或者数据库的binlog文件。 其记录的是一条一条的交易。没有记录状态。 状态通过播放交易得到。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>┌─────────────┐     ┌─────────────┐     ┌─────────────┐     ┌─────────────┐</span></span>\n<span class="line"><span>│Block #1     │     │Block #2     │     │Block #3     │     │Block #4     │</span></span>\n<span class="line"><span>│┌──┬────┬───┐│     │┌──┬────┬───┐│     │┌──┬────┬───┐│     │┌──┬────┬───┐│</span></span>\n<span class="line"><span>││CB│50.0│OUT├┼──┐  ││CB│50.0│OUT├┼──┐  ││CB│50.0│OUT├┼──┐  ││CB│50.0│OUT││</span></span>\n<span class="line"><span>│└──┴────┴───┘│  │  │└──┴────┴───┘│  │  │└──┴────┴───┘│  │  │└──┴────┴───┘│</span></span>\n<span class="line"><span>│             │  │  │┌──┬────┬───┐│  │  │┌──┬────┬───┐│  │  │┌──┬────┬───┐│</span></span>\n<span class="line"><span>│             │  │  ││  │8.70│OUT├┼──┼──&gt;│IN│    │   ││  └──&gt;│IN│25.0│OUT││</span></span>\n<span class="line"><span>│             │  └──&gt;│IN├────┼───┤│  │  │├──┤58.7│OUT││     │├──┼────┼───┤│</span></span>\n<span class="line"><span>│             │     ││  │41.3│OUT├┼─┐└──&gt;│IN│    │   ││  ┌──&gt;│IN│66.3│OUT││</span></span>\n<span class="line"><span>│             │     │└──┴────┴───┘│ │   │└──┴────┴───┘│  │  │└──┴────┴───┘│</span></span>\n<span class="line"><span>└─────────────┘     └─────────────┘ │   └─────────────┘  │  └─────────────┘</span></span>\n<span class="line"><span>                                    └────────────────────┘</span></span></code></pre></div><p>比特币的所有交易，在逻辑上也可以通过账号地址跨区块串联起来。 根节点是矿工奖励的交易。叶子结点，也叫UTXO（Unspent Transaction Output，没有被花费的交易输出）。 中间非根非叶子的账户表示这笔钱曾经被他们拥有过。可以依据交易单实现对资金的全程追溯。这也是比特币的典型特征之一。</p><p>计算一个钱包里面有多少比特币，看这个钱包的比特币地址里面，有哪些是UTXO地址，这些地址里面的比特币之和是多少。</p><h2 id="_4-其它" tabindex="-1">4. 其它 <a class="header-anchor" href="#_4-其它" aria-label="Permalink to &quot;4. 其它&quot;">​</a></h2><h3 id="_4-1-pow-算力和-51-攻击" tabindex="-1">4.1. POW 算力和 51% 攻击 <a class="header-anchor" href="#_4-1-pow-算力和-51-攻击" aria-label="Permalink to &quot;4.1. POW 算力和 51% 攻击&quot;">​</a></h3><p>比特币网络出现恶意攻击者时会发生什么？因为比特币的密码学基础是非常安全的，所以攻击者会选择攻击没有被密码学直接保护的部分：交易顺序。攻击者的策略非常简单：</p><ol><li>向卖家发送100BTC购买商品（尤其是无需邮寄的电子商品）。</li><li>等待直至商品发出。</li><li>创建另一笔交易，将相同的100BTC发送给自己的账户。</li><li>使比特币网络相信发送给自己账户的交易是最先发出的。</li></ol><p>一旦（1）发生，几分钟后矿工将把这笔交易打包到区块，假设是第270000个区块。大约一个小时以后，在此区块后面将会有五个区块，每个区块间接地指向这笔交易，从而确认这笔交易。这时卖家收到货款，并向买家发货。因为我们假设这是数字商品，攻击者可以即时收到货。现在，攻击者创建另一笔交易，将相同的100BTC发送到自己的账户。如果攻击者只是向全网广播这一消息，这一笔交易不会被处理。矿工会运行状态转换函数APPLY(S,TX)，发现这笔交易将花费已经不在状态中的UTXO。所以，攻击者会对区块链进行分叉，将第269999个区块作为父区块重新生成第270000个区块，在此区块中用新的交易取代旧的交易。因为区块数据是不同的，这要求重新进行工作量证明。另外，因为攻击者生成的新的第270000个区块有不同的哈希，所以原来的第270001到第270005的区块不指向它，因此原有的区块链和攻击者的新区块是完全分离的。在发生区块链分叉时，区块链长的分支被认为是诚实的区块链，合法的的矿工将会沿着原有的第270005区块后挖矿，只有攻击者一人在新的第270000区块后挖矿。攻击者为了使得他的区块链最长，他需要拥有比除了他以外的全网更多的算力来追赶（即51%攻击）。</p><h3 id="_4-2-拜占庭将军问题" tabindex="-1">4.2. 拜占庭将军问题 <a class="header-anchor" href="#_4-2-拜占庭将军问题" aria-label="Permalink to &quot;4.2. 拜占庭将军问题&quot;">​</a></h3><p>这个故事是说有一群将军围攻拜占庭（伊斯坦布尔），拜占庭很强大，只有全部出动才能攻陷，否则攻城的部队会被歼灭。将军们商定少数服从多数，一起进攻或者撤退。但是将军们分散在四周围城，通信不便。将军之中还有叛将，会向不同的其它将军发出各种假消息导致大家行动不一致。</p><p>现代分布式系统也有类似问题，全网多台服务器节点进行协同合作，最终要共同维护一套数据。无法保证节点诚实（一个不诚实的节点会向其它节点发出不同的信息），也无法保证系统内部信息统一，节点无从判断信息真伪。</p><p>用比特币系统基于POW的方式，对这个问题的解决办法是：把将军们看成一个个矿工。假设每一支队伍算力相同，则所有将军在每10分钟之内，有一个人会产生一次说话的机会（告诉其它将军自己是进攻还是撤退）。 这样若干个10分钟之后，所有将军的消息就组成了一个区块链。 区块链机制可以保障每个将军能且仅能表达一次（否则双花）。将军们可以通过这种机制达成共识。</p><h3 id="_4-3-全节点-轻节点-spv节点" tabindex="-1">4.3. 全节点，轻节点，SPV节点 <a class="header-anchor" href="#_4-3-全节点-轻节点-spv节点" aria-label="Permalink to &quot;4.3. 全节点，轻节点，SPV节点&quot;">​</a></h3><p>比特币网络最初，所有节点都处理所有区块，存储所有数据。后来由于网络规模不断扩展，对节点的处理和存储能力也不断提出新的要求。 出现了轻节点和SPV节点。</p><ul><li>全节点是指维持包含全部交易信息的完整区块链的节点。全节点可以验证交易是否合法。</li><li>轻节点指的是：节点本地只保存与其自身相关的交易数据（尤其是可支配交易数据）。轻节点也需要处理所有区块，但不用保存所有区块链信息。</li><li>SPV节点是只能验证某个支付是否真实存在，并得到了多少个确认的节点。</li></ul><p>SPV节点本地不需要保存区块链数据，也可以验证交易是否成功，验证方法如下：</p><ol><li>计算待验证支付的交易哈希值；</li><li>节点从区块链网络上获取并存储最长链的所有区块头至本地；</li><li>节点从区块链获取待验证支付对应的默克尔树哈希认证路径；（这里找到了该交易对应的哈希值）</li><li>根据哈希认证路径，计算默克尔树的根哈希值，将计算结果与本地区块头中的默克尔树的根哈希值进行比较，定位到包含待验证支付的区块；（找到这个哈希值属于哪个区块）</li><li>根据该区块头所处的位置，验证该区块的区块头是否已经包含在已知最长链中，确定该支付已经得到的确认数量，如果包含则证明支付真实有效。（证明本交易得到了6次确认）</li></ol><blockquote><p>以上第三步和第四步，用到了Merkle Tree的特性， 不需要知道完整区块体，也可以验证一笔交易是否在区块里面。</p></blockquote><p>一般手机钱包等计算资源比较弱的设备可以做SPV节点。当别人给你转钱时候，你只需要知道这笔交易上链了没有，后面有没有足够长的区块确保交易成功。</p><h3 id="_4-4-比特币网络的处理能力" tabindex="-1">4.4. 比特币网络的处理能力 <a class="header-anchor" href="#_4-4-比特币网络的处理能力" aria-label="Permalink to &quot;4.4. 比特币网络的处理能力&quot;">​</a></h3><p>比特币网络的TPS（每秒钟可以处理的交易个数）大约是5， 这个值可以通过三个参数算出来。</p><ol><li>每10分钟产生一个区块；</li><li>每个区块的大小；</li><li>每个交易的平均大小。</li></ol><p>5 TPS是一个比较小的数（可以对比VISA网络，每秒处理数千笔交易）。 提高吞吐量的方法有缩短区块产生的时间，增加区块大小等。 也有一些尝试用侧链或者链下交易（例如：Lightning）解决吞吐量的方案。</p><h3 id="_4-5-软分叉和硬分叉" tabindex="-1">4.5. 软分叉和硬分叉 <a class="header-anchor" href="#_4-5-软分叉和硬分叉" aria-label="Permalink to &quot;4.5. 软分叉和硬分叉&quot;">​</a></h3><p>分叉是因为共识规则变化导致的。 新的共识规则可能是原有规则的超级，交集或者子集。</p><ol><li>硬分叉的定义是扩宽共识规则，允许做之前禁止的事情（超级或者交集情况），以前无效的交易/区块在硬分叉后会变成有效的；</li><li>软分叉是收紧共识规则，禁止之前允许做的事情（子集情况），以前有效的交易在软分叉后可能无效了。</li></ol><p>分叉之后，网络中有一部分节点会升级支持新规则。</p><ol><li>在软分叉场景下， 新规则产生的区块也会被之前的老节点（没有升级的节点）承认。</li><li>在硬分叉场景下，新规则产生的区块有可能被老节点认为非法。会分叉产生两条不再有交集的链，完全按各自的道路发展。</li></ol><p><img src="' + _imports_4 + '" alt="picture 23"></p><p>如果在分叉前持有代币，硬分叉之后，代币会变成两份，新老区块链分别可以消费。产生这种现象的原因是硬分叉之后，变成了两个网络，在一个网络里面的交易只会导致该网络的状态变化（网络的当前状态，也就是比特币网络里面的余额，由区块链的最后一个区块定义）。</p><blockquote><p>无论是软分叉还是硬分叉，新版本软件必定需要能够正确处理老版本软件产生的老区块数据。</p></blockquote><h2 id="_5-参考资料" tabindex="-1">5. 参考资料 <a class="header-anchor" href="#_5-参考资料" aria-label="Permalink to &quot;5. 参考资料&quot;">​</a></h2><ol><li><a href="https://nakamotoinstitute.org/bitcoin/" target="_blank" rel="noreferrer">Bitcoin: A Peer-to-Peer Electronic Cash System</a></li><li><a href="https://www.blockchain.com/explorer" target="_blank" rel="noreferrer">Blockchian explorer</a></li><li><a href="https://www.liaoxuefeng.com/wiki/1207298049439968" target="_blank" rel="noreferrer">区块链教程</a></li><li><a href="https://github.com/ethereum/wiki/wiki/%5B%E4%B8%AD%E6%96%87%5D-%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%99%BD%E7%9A%AE%E4%B9%A6#%E5%8C%BA%E5%9D%97%E9%93%BE%E5%92%8C%E6%8C%96%E7%9F%BF" target="_blank" rel="noreferrer">以太坊白皮书</a></li><li><a href="https://lightning.network/" target="_blank" rel="noreferrer">Lightning Network</a></li></ol>', 70);
const _hoisted_71 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_71);
}
const _20220403Blockchain = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20220403Blockchain as default
};
