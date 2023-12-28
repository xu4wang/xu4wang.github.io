import { _ as _export_sfc, o as openBlock, c as createElementBlock, V as createStaticVNode } from "./chunks/framework.XmXKRmb4.js";
const _imports_0 = "/assets/1650784288155.r9fce6iY.jpg";
const __pageData = JSON.parse(`{"title":"外汇报价中的 pip 是什么","description":"","frontmatter":{"title":"外汇报价中的 pip 是什么","subtitle":"What's pip in forex","date":"2022-04-23T00:00:00.000Z","author":"awis.me","header-img":"img/spring.jpg","tags":["Finance"]},"headers":[],"relativePath":"posts/2022-04-23-pip.md","filePath":"posts/2022-04-23-pip.md"}`);
const _sfc_main = { name: "posts/2022-04-23-pip.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="pip是什么" tabindex="-1">pip是什么？ <a class="header-anchor" href="#pip是什么" aria-label="Permalink to &quot;pip是什么？&quot;">​</a></h2><p>pip是汇率变化的报价单位。 一般是小数点后第4位。 0.0001 是一个pip。 日元是个例外，对于日元 0.01 为一个pip。 因为日元太小了。</p><blockquote><p>A pip is a unit of measurement for price movements of currencies in foreign exchange (FX) markets. Pip stands for “percentage in point” or “price interest point.” It represents the smallest price variation that a particular exchange rate experiences based on typical FX market convention.</p></blockquote><h2 id="pip表示绝对数字-不能表示收益率" tabindex="-1">pip表示绝对数字，不能表示收益率 <a class="header-anchor" href="#pip表示绝对数字-不能表示收益率" aria-label="Permalink to &quot;pip表示绝对数字，不能表示收益率&quot;">​</a></h2><p>假如你有10000美金， USDCNY报价是6.5， 那么可以换汇得到65000人民币。 假设汇率增加了100个pips（0.0001 x 100 = 0.01）， 变成 6.51， 那么可以换汇得到65100人民币。 100个pips的汇率变化导致你多收入100人民币。</p><blockquote><p>知道了交易的总金额，以及汇率的变化，就可以知道收益的变化。 但是不知道收益率（收益变化的比例）。</p></blockquote><p><img src="' + _imports_0 + '" alt="picture 2"></p><p>上图中，x轴为换汇的原始货币（例如美金），y轴是目标货币。</p><ol><li>第一条曲线是泰铢（1美金对30泰铢）</li><li>第二条是人民币（1美金对6.5人民币）</li><li>第四条是某一个汇率为2的货币（假设货币名称是银币，1美金对应2银币）</li><li>第三条是银币在汇率增加1000pips后的曲线</li><li>第六条是某一个汇率为1的货币（假设货币名称是金币，1美金对应1金币）</li><li>第五条是金币在汇率增加1000pips后的曲线</li><li>第七条是pips为1000时候带来的目标货币变化</li></ol><p>因为人民币和泰铢曲线太陡峭，不好观察。我们看金币和银币在pips作用下的收益变化。 在50000美金时候，pips变化1000，这时候金币和银币都会增加5000。 但是，我们知道5000金币和5000银币的价值是不一样的。 也即同样是50000美金的投入，获得的收益率是不一样的。</p><p>对于金币来说1000pips是一个比较大的波动， 对于银币来说，相对比较小。</p><blockquote><p>曲线越陡，日常的波动（pips）绝对数值应该越大。100 pips对于泰铢来说是一个很小的波动，对于人民币就比较大了。 100 pips = 0.01</p><ol><li>对于泰铢而言， 波动0.01 只是 （ 30.01 - 30 ）/ 30 = 0.03%</li><li>对于人民币而言， 波动0.01 是 （ 6.51 - 6.5 ）/ 6.5 = 0.15%</li></ol></blockquote><p>从上图也可以看出，使用pip来表示汇率变化，不适合曲线太平缓的汇率。 例如，USD/THB = 30， 则THB/USD = 0.033333（1泰铢换3美分）， 如果对THBUSD使用pips：</p><ul><li>对于100 pips的变化， 会导致 (0.043333 - 0.033333 ) / 0.033333 = 30% 的汇率变化。</li></ul><p>所以这种场景下 pip的粒度太大了。</p><blockquote><p>目前汇率有三种报价方法：</p><ol><li>直接标价法： 单位外币等价于多少本币</li><li>间接标价法： 单位本币等价于多少外币</li><li>美金标价法： 单位美金等价于多少外币（少数几个货币，例如GBP是例外）</li></ol></blockquote>', 16);
const _hoisted_17 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_17);
}
const _20220423Pip = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20220423Pip as default
};
