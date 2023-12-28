import { _ as _export_sfc, o as openBlock, c as createElementBlock, V as createStaticVNode } from "./chunks/framework.XmXKRmb4.js";
const __pageData = JSON.parse('{"title":"两人合租，房租分摊算法","description":"如果两个人合租房子，如何合理的分摊房租？","frontmatter":{"date":"2023-12-23T00:00:00.000Z","title":"两人合租，房租分摊算法","tags":["算法"],"description":"如果两个人合租房子，如何合理的分摊房租？"},"headers":[],"relativePath":"posts/rent-share.md","filePath":"posts/rent-share.md"}');
const _sfc_main = { name: "posts/rent-share.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>网上看到一个有趣的算法，用来解决两个人合租时候，如何合理分担房租的问题。算法能保证每个人都以低于自己预期的价格得到自己认可的卧室。</p><h2 id="算法描述" tabindex="-1">算法描述 <a class="header-anchor" href="#算法描述" aria-label="Permalink to &quot;算法描述&quot;">​</a></h2><p>两个人A，B合租一个两居的房子，比如每个月是1500元，因为主卧和次卧设施大小等都有差异，两人分担的房租也应该不同。如何确定住主卧和住次卧各自应分担多少房租？</p><ol><li>两个人分别写两个价格，也就是对主卧和次卧的心理价格。可以很极端，比如1400：100，但总额必须是1500，因为这是合租必须接受的前提条件。</li><li>公开价格，除掉开价完全相同的情况，两间卧室必然各有一个出价高的人，价高者入住。</li><li>每个卧室的月租是A，B对这个卧室开价的均值。例如A出价是900：600，B出价是1000：500，那么A住次卧，价格为550，B住主卧，价格为950。</li></ol><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ol><li>两个人都得到了自己认可的卧室，而价格还低于自己的预期。</li><li>方案还有一个优势，双方都无法通过恶意的叫价来损害对方，获得利益。</li></ol><p>这个思想在现实生活中，其它类似场景也能用到。</p>', 8);
const _hoisted_9 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_9);
}
const rentShare = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  rentShare as default
};
