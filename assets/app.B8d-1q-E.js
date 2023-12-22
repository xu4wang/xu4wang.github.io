import{d as k,u as A,o as i,c as u,a as y,k as p,t as _,m as f,I as C,F as g,g as w,E as b,f as E,p as $,q as M,_ as S,h as T,j as x,P as L,y as R,a4 as j,v as P,a5 as N,a6 as B,a7 as O,a8 as V,a9 as q,aa as F,ab as G,ac as U,ad as Y,ae as z,Y as H,z as K,af as W,ag as J,ah as Q,ai as X}from"./chunks/framework.VHr1O9iJ.js";import{t as D}from"./chunks/theme._Z_7cmLB.js";import{P as Z}from"./chunks/Page.hJ8xcYqz.js";const tt={class:"site-footer"},et=["href"],at=p("br",null,null,-1),st=k({__name:"Copyright",setup(t){const{site:e,theme:s}=A(),n=s.value.website,o=e.value.title;return(r,a)=>(i(),u("div",tt,[y(" MIT Licensed | Copyright © 2021-2023 "),p("a",{class:"vitepress",href:f(n)},_(f(o)),9,et),at]))}}),nt={__name:"NewLayout",setup(t){const{Layout:e}=D;return(s,n)=>(i(),u(g,null,[C(f(e)),C(st)],64))}};function rt(t){const e={};for(let s=0;s<t.length;s++){const n=t[s],o=n.frontMatter.tags;o&&o.forEach(r=>{e[r]||(e[r]=[]),e[r].push(n)})}return e}function ot(t){const e=[];let s="0",n=-1;for(let o=0;o<t.length;o++){const r=t[o];if(r.frontMatter.date){const a=r.frontMatter.date.split("-")[0];a===s?e[n].push(r):(n++,e[n]=[],e[n].push(r),s=a)}}return e}const ct=t=>($("data-v-c2b6dde4"),t=t(),M(),t),lt={class:"year"},it=["href"],ut={class:"post-container"},pt=ct(()=>p("div",{class:"post-dot"},null,-1)),dt={class:"date"},ht=k({__name:"Archives",setup(t){const{theme:e}=A(),s=w(()=>ot(e.value.posts));return(n,o)=>(i(!0),u(g,null,b(s.value,r=>(i(),u("div",null,[p("div",lt,_(r[0].frontMatter.date.split("-")[0]),1),(i(!0),u(g,null,b(r,(a,m)=>(i(),u("a",{href:f(E)(a.regularPath),key:m,class:"posts"},[p("div",ut,[pt,y(" "+_(a.frontMatter.title),1)]),p("div",dt,_(a.frontMatter.date.slice(5)),1)],8,it))),128))]))),256))}}),_t=S(ht,[["__scopeId","data-v-c2b6dde4"]]),mt=t=>($("data-v-665323c0"),t=t(),M(),t),ft={class:"tags"},gt=["onClick"],vt={class:"tag-header"},kt=["href"],At={class:"post-container"},yt=mt(()=>p("div",{class:"post-dot"},null,-1)),bt={class:"date"},wt=k({__name:"Tags",setup(t){let e=location.href.split("?")[1],s=new URLSearchParams(e);const{theme:n}=A(),o=w(()=>rt(n.value.posts)),r=w(()=>{const d=Object.entries(o.value).map(([c,l])=>({key:c,articles:l}));d.sort((c,l)=>l.articles.length-c.articles.length);const h={};return d.forEach(c=>{h[c.key]=c.articles}),h});let a=T(s.get("tag")?s.get("tag"):"");const m=d=>{a.value=d};return(d,h)=>(i(),u(g,null,[p("div",ft,[(i(!0),u(g,null,b(r.value,(c,l)=>(i(),u("span",{onClick:Lt=>m(l),class:"tag"},[y(_(l)+" ",1),p("strong",null,_(r.value[l].length),1)],8,gt))),256))]),p("div",vt,_(f(a)),1),(i(!0),u(g,null,b(r.value[f(a)],(c,l)=>(i(),u("a",{href:f(E)(c.regularPath),key:l,class:"posts"},[p("div",At,[yt,y(" "+_(c.frontMatter.title),1)]),p("div",bt,_(c.frontMatter.date),1)],8,kt))),128))],64))}}),Pt=S(wt,[["__scopeId","data-v-665323c0"]]),Tt=k({__name:"Comment",setup(t){const e=T(),{theme:s,isDark:n}=A();return x(()=>{L(()=>{let{repo:o,issueTerm:r="pathname"}=s.value.comment;if(o){let a=document.createElement("script");a.async=!0,a.setAttribute("src","https://utteranc.es/client.js"),a.setAttribute("repo",o),a.setAttribute("issue-term",r),a.setAttribute("theme",n.value?"github-dark":"github-light"),a.setAttribute("crossorigin","anonymous"),e.value.appendChild(a)}R(n,(a,m)=>{a!==m&&location.replace(location.href)})})}),(o,r)=>(i(),u("div",{ref_key:"utterancesRef",ref:e},null,512))}}),xt=k({__name:"Artalk",setup(t){const e=T(null),s=j(),n=A().page;x(()=>{const a=document.createElement("script");a.src="https://c.timeslow.net/dist/Artalk.js",document.getElementsByTagName("head")[0].appendChild(a),a.onload=()=>{r(n.value)}}),R(()=>s.route.data.relativePath,a=>{L(()=>{Artalk.update(o(n.value)),Artalk.reload()})});function o(a){return{pageKey:"https://awis.me"+location.pathname,pageTitle:a.title,server:"https://c.timeslow.net",site:"awis"}}function r(a){Artalk.init({el:e.value,emoticons:"/assets/emoticons/default.json",gravatar:{mirror:"https://cravatar.cn/avatar/"},...o(a)}),Artalk.on("list-loaded",()=>{document.querySelectorAll(".atk-comment .atk-content").forEach(d=>{const h=d.querySelectorAll("img:not([atk-emoticon]):not([atk-lightbox])");h.forEach(c=>{c.setAttribute("atk-lightbox","");const l=document.createElement("a");l.setAttribute("class","atk-img-link"),l.setAttribute("href",c.src),l.setAttribute("data-src",c.src),l.append(c.cloneNode()),c.replaceWith(l)}),h.length&&lightGallery(d,{selector:".atk-img-link"})})});const m=document.querySelector("html").classList.contains("dark");Artalk.setDarkMode(m),new MutationObserver(d=>{d.forEach(h=>{if(h.attributeName!=="class")return;const c=h.target.classList.contains("dark");Artalk.setDarkMode(c)})}).observe(document.querySelector("html"),{attributes:!0})}return(a,m)=>(i(),u("div",{ref_key:"artalkEl",ref:e,style:{"margin-top":"20px"}},null,512))}}),Ct={...D,Layout:nt,enhanceApp({app:t}){t.component("Tags",Pt),t.component("Archives",_t),t.component("Page",Z),t.component("Comment",Tt),t.component("Artalk",xt)}};function I(t){if(t.extends){const e=I(t.extends);return{...e,...t,async enhanceApp(s){e.enhanceApp&&await e.enhanceApp(s),t.enhanceApp&&await t.enhanceApp(s)}}}return t}const v=I(Ct),Et=k({name:"VitePressApp",setup(){const{site:t}=A();return x(()=>{K(()=>{document.documentElement.lang=t.value.lang,document.documentElement.dir=t.value.dir})}),t.value.router.prefetchLinks&&W(),J(),Q(),v.setup&&v.setup(),()=>X(v.Layout)}});async function $t(){const t=St(),e=Mt();e.provide(B,t);const s=O(t.route);return e.provide(V,s),e.component("Content",q),e.component("ClientOnly",F),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return s.frontmatter.value}},$params:{get(){return s.page.value.params}}}),v.enhanceApp&&await v.enhanceApp({app:e,router:t,siteData:G}),{app:e,router:t,data:s}}function Mt(){return U(Et)}function St(){let t=P,e;return Y(s=>{let n=z(s),o=null;return n&&(t&&(e=n),(t||e===n)&&(n=n.replace(/\.js$/,".lean.js")),o=H(()=>import(n),__vite__mapDeps([]))),P&&(t=!1),o},v.NotFound)}P&&$t().then(({app:t,router:e,data:s})=>{e.go().then(()=>{N(e.route,s.site),t.mount("#app")})});export{$t as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}