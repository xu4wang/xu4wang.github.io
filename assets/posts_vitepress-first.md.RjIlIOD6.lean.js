import { _ as _export_sfc, D as resolveComponent, o as openBlock, c as createElementBlock, b as createBlock, w as withCtx, a7 as Suspense, V as createStaticVNode, k as createBaseVNode, I as createVNode, a as createTextVNode } from "./chunks/framework.XmXKRmb4.js";
const __pageData = JSON.parse('{"title":"更新blog使用vitepress","description":"把之前jekyll的blog移植到vitepress了，记录下vitepress下写blog的工作流。","frontmatter":{"date":"2023-12-20T00:00:00.000Z","title":"更新blog使用vitepress","tags":["vitepress","markdown"],"description":"把之前jekyll的blog移植到vitepress了，记录下vitepress下写blog的工作流。"},"headers":[],"relativePath":"posts/vitepress-first.md","filePath":"posts/vitepress-first.md"}');
const _sfc_main = { name: "posts/vitepress-first.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode("", 16);
const _hoisted_17 = /* @__PURE__ */ createBaseVNode("blockquote", null, [
  /* @__PURE__ */ createBaseVNode("p", null, "PS. 上述订制版本西红柿鸡蛋mermaid配色致敬Rational Rose 🌹")
], -1);
const _hoisted_18 = /* @__PURE__ */ createStaticVNode("", 10);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Mermaid = resolveComponent("Mermaid");
  return openBlock(), createElementBlock("div", null, [
    _hoisted_1,
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-185",
          class: "mermaid",
          graph: "%25%25%7Binit%3A%20%7B'theme'%3A%20'base'%2C%20'themeVariables'%3A%20%7B%20'labelBoxBkgColor'%3A%20'lightyellow'%2C%20'labelBoxBorderColor'%3A%20'black'%2C%20'actorBorder'%3A'tomato'%2C%20'actorBkg'%3A'lightyellow'%7D%7D%7D%25%25%0A%0AsequenceDiagram%0A%20%20autonumber%0A%20%20participant%20Alice%0A%20%20participant%20Bob%0A%20%20Alice-%3E%3EJohn%3A%20Hello%20John%2C%20how%20are%20you%3F%0A%20%20loop%20Healthcheck%0A%20%20%20%20%20%20John-%3E%3EJohn%3A%20Fight%20against%20hypochondria%0A%20%20end%0A%20%20Note%20right%20of%20John%3A%20Rational%20thoughts%20%3Cbr%2F%3Eprevail!%0A%20%20John--%3E%3EAlice%3A%20Great!%0A%20%20John-%3E%3EBob%3A%20How%20about%20you%3F%0A%20%20Bob--%3E%3EJohn%3A%20Jolly%20good!%0A"
        })
      ]),
      fallback: withCtx(() => [
        createTextVNode(" Loading... ")
      ]),
      _: 1
    })),
    _hoisted_17,
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-191",
          class: "mermaid",
          graph: "mindmap%0A%20%20root((mindmap))%0A%20%20%20%20Origins%0A%20%20%20%20%20%20Long%20history%0A%20%20%20%20%20%20%3A%3Aicon(fa%20fa-book)%0A%20%20%20%20%20%20Popularisation%0A%20%20%20%20%20%20%20%20British%20popular%20psychology%20author%20Tony%20Buzan%0A%20%20%20%20Research%0A%20%20%20%20%20%20On%20effectiveness%3Cbr%2F%3Eand%20features%0A%20%20%20%20%20%20On%20Automatic%20creation%0A%20%20%20%20%20%20%20%20Uses%0A%20%20%20%20%20%20%20%20%20%20%20%20Creative%20techniques%0A%20%20%20%20%20%20%20%20%20%20%20%20Strategic%20planning%0A%20%20%20%20%20%20%20%20%20%20%20%20Argument%20mapping%0A%20%20%20%20Tools%0A%20%20%20%20%20%20Pen%20and%20paper%0A%20%20%20%20%20%20Mermaid%0A"
        })
      ]),
      fallback: withCtx(() => [
        createTextVNode(" Loading... ")
      ]),
      _: 1
    })),
    (openBlock(), createBlock(Suspense, null, {
      default: withCtx(() => [
        createVNode(_component_Mermaid, {
          id: "mermaid-192",
          class: "mermaid",
          graph: "quadrantChart%0A%20%20%20%20title%20Reach%20and%20engagement%20of%20campaigns%0A%20%20%20%20x-axis%20Low%20Reach%20--%3E%20High%20Reach%0A%20%20%20%20y-axis%20Low%20Engagement%20--%3E%20High%20Engagement%0A%20%20%20%20quadrant-1%20We%20should%20expand%0A%20%20%20%20quadrant-2%20Need%20to%20promote%0A%20%20%20%20quadrant-3%20Re-evaluate%0A%20%20%20%20quadrant-4%20May%20be%20improved%0A%20%20%20%20Campaign%20A%3A%20%5B0.3%2C%200.6%5D%0A%20%20%20%20Campaign%20B%3A%20%5B0.45%2C%200.23%5D%0A%20%20%20%20Campaign%20C%3A%20%5B0.57%2C%200.69%5D%0A%20%20%20%20Campaign%20D%3A%20%5B0.78%2C%200.34%5D%0A%20%20%20%20Campaign%20E%3A%20%5B0.40%2C%200.34%5D%0A%20%20%20%20Campaign%20F%3A%20%5B0.35%2C%200.78%5D%0A"
        })
      ]),
      fallback: withCtx(() => [
        createTextVNode(" Loading... ")
      ]),
      _: 1
    })),
    _hoisted_18
  ]);
}
const vitepressFirst = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  vitepressFirst as default
};
