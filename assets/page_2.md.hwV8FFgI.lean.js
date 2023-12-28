import { P as Page } from "./chunks/Page.wbKkhMJQ.js";
import { u as useData, o as openBlock, c as createElementBlock, I as createVNode, m as unref } from "./chunks/framework.XmXKRmb4.js";
const __pageData = JSON.parse('{"title":"第 2 页","description":"","frontmatter":{"page":true,"title":"第 2 页","comments":false},"headers":[],"relativePath":"page_2.md","filePath":"page_2.md"}');
const __default__ = { name: "page_2.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const { theme } = useData();
    const posts = theme.value.posts.slice(10, 20);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Page, {
          posts: unref(posts),
          pageCurrent: 2,
          pagesNum: 3
        }, null, 8, ["posts"])
      ]);
    };
  }
});
export {
  __pageData,
  _sfc_main as default
};
