import{d as p,t as _,a7 as g,o as m,b as f,F as h,g as j,e as C,y as l,af as n,ab as k,av as w,v as B,l as u,i as z,h as L}from"../modules/vue-C3U069DO.js";import{_ as x,a2 as O,a3 as T,a4 as $,a5 as G,y as N,a6 as P,A as R}from"../index-DCQqeErs.js";const V=p({__name:"SlideLoading",setup(s,{expose:o}){o();const t=_(!1);g(()=>{setTimeout(()=>{t.value=!0},200)});const e={timeout:t};return Object.defineProperty(e,"__isScriptSetup",{enumerable:!1,value:!0}),e}}),W={class:"h-full w-full flex items-center justify-center gap-2 slidev-slide-loading"},q=C("div",{class:"i-svg-spinners-90-ring-with-bg text-xl"},null,-1),A=C("div",null,"Loading slide...",-1);function F(s,o,t,e,r,d){return m(),f("div",W,[e.timeout?(m(),f(h,{key:0},[q,A],64)):j("v-if",!0)])}const M=x(V,[["render",F],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/SlideLoading.vue"]]),K={render:()=>[]},Q={render:()=>[]},U={render:()=>[]},E={render:()=>[]},I=p({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(s,{expose:o}){o();const t=s,e=l(()=>{var a,c;return((c=(a=t.route.meta)==null?void 0:a.slide)==null?void 0:c.frontmatter.zoom)??1});n(O,t.route),n(T,_(t.route.no)),n($,_(t.renderContext)),n(G,k(t,"clicksContext")),n(P,e);const r=l(()=>e.value===1?void 0:{width:`${100/e.value}%`,height:`${100/e.value}%`,transformOrigin:"top left",transform:`scale(${e.value})`}),d=l(()=>({...r.value,"user-select":N.selectable?void 0:"none"})),y=l(()=>t.route&&w({loader:async()=>{const a=await t.route.component();return p({setup(c,{attrs:b}){return g(()=>{var i,S;return(S=(i=t.clicksContext)==null?void 0:i.onMounted)==null?void 0:S.call(i)}),()=>B(a.default,b)}})},delay:300,loadingComponent:M})),v={props:t,zoom:e,zoomStyle:r,style:d,SlideComponent:y,get getSlideClass(){return R},get SlideBottom(){return E},get SlideTop(){return U}};return Object.defineProperty(v,"__isScriptSetup",{enumerable:!1,value:!0}),v}}),Z=["data-slidev-no"];function D(s,o,t,e,r,d){return m(),f("div",{"data-slidev-no":e.props.route.no,class:z(e.getSlideClass(t.route,["slide","presenter"].includes(e.props.renderContext)?"":"disable-view-transition")),style:L(e.style)},[u(e.SlideBottom),u(e.SlideComponent),u(e.SlideTop)],14,Z)}const X=x(I,[["render",D],["__scopeId","data-v-390f8bf4"],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/SlideWrapper.vue"]]);export{Q as G,X as S,K as a};