import { d as defineComponent, o as openBlock, c as createElementBlock, F as Fragment, E as renderList, k as createBaseVNode, m as unref, f as withBase, t as toDisplayString, a as createTextVNode, n as normalizeClass, p as pushScopeId, q as popScopeId, _ as _export_sfc } from "./framework.XmXKRmb4.js";
const _withScopeId = (n) => (pushScopeId("data-v-abf88ab7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "post-separator" }, null, -1));
const _hoisted_2 = { class: "post-header" };
const _hoisted_3 = { class: "post-title" };
const _hoisted_4 = ["href"];
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = { class: "post-info" };
const _hoisted_7 = ["href"];
const _hoisted_8 = { class: "pagination" };
const _hoisted_9 = ["href"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Page",
  props: {
    posts: Array,
    pageCurrent: Number,
    pagesNum: Number
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        (openBlock(true), createElementBlock(Fragment, null, renderList(__props.posts, (article, index) => {
          return openBlock(), createElementBlock("div", {
            key: index,
            class: "post-list"
          }, [
            createBaseVNode("div", _hoisted_2, [
              createBaseVNode("div", _hoisted_3, [
                createBaseVNode("a", {
                  href: unref(withBase)(article.regularPath)
                }, toDisplayString(article.frontMatter.title), 9, _hoisted_4)
              ])
            ]),
            createBaseVNode("p", {
              class: "describe",
              innerHTML: article.frontMatter.description || article.firstPara
            }, null, 8, _hoisted_5),
            createBaseVNode("div", _hoisted_6, [
              createTextVNode(toDisplayString(article.frontMatter.date) + " ", 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(article.frontMatter.tags, (item) => {
                return openBlock(), createElementBlock("span", null, [
                  createBaseVNode("a", {
                    href: unref(withBase)(`/pages/tags.html?tag=${item}`)
                  }, toDisplayString(item), 9, _hoisted_7)
                ]);
              }), 256))
            ])
          ]);
        }), 128)),
        createBaseVNode("div", _hoisted_8, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(__props.pagesNum, (i) => {
            return openBlock(), createElementBlock("a", {
              class: normalizeClass(["link", { active: __props.pageCurrent === i }]),
              key: i,
              href: unref(withBase)(i === 1 ? "/index.html" : `/page_${i}.html`)
            }, toDisplayString(i), 11, _hoisted_9);
          }), 128))
        ])
      ], 64);
    };
  }
});
const Page = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abf88ab7"]]);
export {
  Page as P
};
