import { _ as _export_sfc, o as openBlock, c as createElementBlock, V as createStaticVNode } from "./chunks/framework.XmXKRmb4.js";
const __pageData = JSON.parse('{"title":"一个简单的API Proxy","description":"","frontmatter":{"title":"一个简单的API Proxy","subtitle":"A simple API Proxy","date":"2022-03-05T00:00:00.000Z","author":"awis.me","header-img":"img/diy.jpg","tags":["Open Source","Typescript","钉钉","OAuth","Directus"]},"headers":[],"relativePath":"posts/2022-03-05-api-proxy.md","filePath":"posts/2022-03-05-api-proxy.md"}');
const _sfc_main = { name: "posts/2022-03-05-api-proxy.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_1-起因" tabindex="-1">1. 起因 <a class="header-anchor" href="#_1-起因" aria-label="Permalink to &quot;1. 起因&quot;">​</a></h2><p>在配置Directus使用钉钉扫码登录时候，发现钉钉的免密登录（OAuth 2）和RFC规范不一致。 需要做协议转换后才能和Directus正常通信。 需求比较小众，没有现成的软件，只好自己动手了。</p><h2 id="_2-主要功能" tabindex="-1">2. 主要功能 <a class="header-anchor" href="#_2-主要功能" aria-label="Permalink to &quot;2. 主要功能&quot;">​</a></h2><ol><li>能作为API通信的中间人， 转发客户端和API服务器之间的通信， 记录LOG，方便分析协议；</li><li>作为中间人，能修改请求的内容， 修改响应的内容；可以做协议适配，转换。</li></ol><blockquote><p>APIPROXY is a RESTFUL API proxy, monitor and adaptor.</p></blockquote><blockquote><p>Forward RESTFUL API to another host. It&#39;s man in the middle who can monitor and modify the header and body of the API Request &amp; Response. Good for protocol study and adaptation.</p></blockquote><p>Features</p><ul><li>API proxy: forward any incoming API to remote sever and return the response back to client.</li><li>API monitor: you can get detailed log of the API req and res in the log file.</li><li>API adpator: modify the request and response on the fly while forwarding, including parameters, body, http headers etc.</li><li>API mock server: you can add your own API for testing purpose easily.</li></ul><h2 id="_3-目前状态" tabindex="-1">3. 目前状态 <a class="header-anchor" href="#_3-目前状态" aria-label="Permalink to &quot;3. 目前状态&quot;">​</a></h2><p>初步实现了对钉钉OAuth2协议的RFC6749兼容封装。 目前Directus已经可以通过它的翻译支持钉钉免密登录。</p><h2 id="_4-参考" tabindex="-1">4. 参考 <a class="header-anchor" href="#_4-参考" aria-label="Permalink to &quot;4. 参考&quot;">​</a></h2><ul><li><a href="https://github.com/xu4wang/apiproxy" target="_blank" rel="noreferrer">APIPROXY</a></li></ul>', 12);
const _hoisted_13 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_13);
}
const _20220305ApiProxy = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20220305ApiProxy as default
};
