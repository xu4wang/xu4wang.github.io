import { _ as _export_sfc, o as openBlock, c as createElementBlock, V as createStaticVNode } from "./chunks/framework.XmXKRmb4.js";
const _imports_0 = "/assets/1646395927979.Z0UHnKRy.png";
const __pageData = JSON.parse('{"title":"单元测试，测试驱动开发","description":"","frontmatter":{"title":"单元测试，测试驱动开发","subtitle":"unittest, Test Driven Development","date":"2022-03-06T00:00:00.000Z","author":"awis.me","header-img":"img/star3.jpg","tags":["Unittest","Python","Typescript"]},"headers":[],"relativePath":"posts/2022-03-06-unittest.md","filePath":"posts/2022-03-06-unittest.md"}');
const _sfc_main = { name: "posts/2022-03-06-unittest.md" };
const _hoisted_1 = /* @__PURE__ */ createStaticVNode('<h2 id="_1-简介" tabindex="-1">1. 简介 <a class="header-anchor" href="#_1-简介" aria-label="Permalink to &quot;1. 简介&quot;">​</a></h2><p>下图出自 <a href="https://github.com/Dobiasd/articles/blob/master/programming_language_learning_curves.md" target="_blank" rel="noreferrer">Learning Curves (for different programming languages)</a> 虽然文章调侃为主， 但也看出来作者对单元测试的态度。</p><p><img src="' + _imports_0 + '" alt="picture 7"></p><p>对Python程序员来讲，随着经验的增长， 在掌握了单元测试之后， 个人的生产力得到一个突变（至于掌握装饰器，会自我感觉膨胀，但效率提升不明显）。</p><p>很多年前刚走出校门，还是C++年代。 有个前北电的Java大牛布道，给开发团队推荐cpp-unit，说单元测试 “可以显著提高单兵作战能力”。斗转星移，南征北战，北电的Eddie已失去联系，但他的布道显然成功了。我在不同的项目中实践过单元测试：</p><ul><li>cpp unit</li><li>junit</li><li>luaunit</li><li>python unittest</li><li>jest</li></ul><p>虽然语言不同，但unittest思想都一样，都有setup，teardown，testcase，assert/expect，mock这些概念。</p><p>对单元测试“提高单兵作战能力”的说法，我“不能认同更多”。</p><h2 id="_2-单元测试的好处" tabindex="-1">2. 单元测试的好处 <a class="header-anchor" href="#_2-单元测试的好处" aria-label="Permalink to &quot;2. 单元测试的好处&quot;">​</a></h2><p>unittest的好处主要在两个方面。</p><h3 id="_2-1-鼓励先设计接口" tabindex="-1">2.1. 鼓励先设计接口 <a class="header-anchor" href="#_2-1-鼓励先设计接口" aria-label="Permalink to &quot;2.1. 鼓励先设计接口&quot;">​</a></h3><p>要测试驱动，就要先想怎么测，从而促进在很早期就从接口定义的角度考虑问题。也促进了模块的低耦合高内聚。 另外，还带来一个额外的好处，TDD也会沉淀出类似文档的测试用例。若干年后回顾一个软件时候，看看用例，基本也了解当时的思路了。</p><h3 id="_2-2-跑一遍测试的成本低" tabindex="-1">2.2. 跑一遍测试的成本低 <a class="header-anchor" href="#_2-2-跑一遍测试的成本低" aria-label="Permalink to &quot;2.2. 跑一遍测试的成本低&quot;">​</a></h3><p>测试用例的写法规范，测试框架支持方便的执行和反馈结果，这样跑一遍测试没有时间和精力的负担，随时跑。 经常跑测试，持续的集成，有问题也能早暴露。 接口稳定后，有测试用例做质量保障，做重构也方便。</p><h2 id="_3-举个例子" tabindex="-1">3. 举个例子 <a class="header-anchor" href="#_3-举个例子" aria-label="Permalink to &quot;3. 举个例子&quot;">​</a></h2><p>假如在开发一个API服务器。 做单元测试从粗到细可以有几个不同的粒度：</p><ol><li>从API层面，用http client模拟请求，然后assert返回的结果是否符合预期</li><li>从Handler层面，模拟http请求的header，params，body等，然后喂给Handler，看返回的结构是否符合预期</li><li>模块层面，如果Handler之下还有其它业务逻辑模块，可以针对模块接口做单元测试</li></ol><p>以上 1， 已经可以看作系统测试（端到端测试）了。</p><p>2相对于1有一些额外的好处：一般情况下，对应一个请求的处理，除了Hanlder之外，还有一些中间件来做预处理。 对于1来说，必须把中间件的功能和Handler本身作为一个整体测试。 不够灵活。</p><p>2相对于1又有一些缺点，需要Mock。 根据所用framework不同，需要mock输入输出的数据结构。 好在一般情况下，mock都比较简单，有很多framework也有第三方做好的mock库。 例如，下面对JS express 的Handler测试：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { posthandler } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;../src/handlers/post&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { getMockReq, getMockRes } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@jest-mock/express&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// generate a mocked response and next function, with provided values</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">res</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">next</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getMockRes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;check post handler returns token in JSON body&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // generate a mock request with params</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> req</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getMockReq</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ params: { id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;abc-def&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, headers:{authorization:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;this is my token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} })</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // provide the mock req, res, and next to assert</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    await</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> posthandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(req, res)</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    expect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res.json).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toHaveBeenCalledWith</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      expect.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">objectContaining</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        authorization: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;this is my token&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }),</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    )</span></span>\n<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  })</span></span></code></pre></div><p>引入的第三方jest-mock/express，可以帮助来生成输入数据，检查输出数据。see？ easy.</p><h2 id="_4-结论" tabindex="-1">4. 结论 <a class="header-anchor" href="#_4-结论" aria-label="Permalink to &quot;4. 结论&quot;">​</a></h2><p>大多数规模的项目，只要引入简单的几个概念，开发人员一两个小时就可以入门。 把对不同模块的assert组织到测试用例里，能方便的运行测试用例就很OK了。 投入小，产出高。初级程序员进阶必备。</p><h2 id="_5-参考资料" tabindex="-1">5. 参考资料 <a class="header-anchor" href="#_5-参考资料" aria-label="Permalink to &quot;5. 参考资料&quot;">​</a></h2><ul><li><a href="https://github.com/Dobiasd/articles/blob/master/programming_language_learning_curves.md" target="_blank" rel="noreferrer">Learning Curves (for different programming languages)</a></li></ul>', 26);
const _hoisted_27 = [
  _hoisted_1
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, _hoisted_27);
}
const _20220306Unittest = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  __pageData,
  _20220306Unittest as default
};
