const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/slidev/DrawingPreview-Cy9QiVIV.js","assets/slidev/DrawingPreview.vue_vue_type_script_setup_true_lang-DrX9quD9.js","assets/modules/vue-BOoaS5mz.js","assets/index-DLg1NgIw.js","assets/modules/shiki-CqyJGmhe.js","assets/modules/shiki-Bxv373Z5.css","assets/index-M74-sjgp.css"])))=>i.map(i=>d[i]);
import{d as m,A as r,P as F,aj as N,O as R,o as n,b as o,l as u,C as e,i as L,c as _,g as p,h as z,F as d,ag as A,e as f,f as M,E as V,L as j}from"../modules/vue-BOoaS5mz.js";import{t as q}from"../modules/shiki-CqyJGmhe.js";import{q as D,v as g,w as G,x as k,y as W,z as I,a as S,c as b,C as O,A as $,B as h,D as T,E as H,F as K}from"../index-DLg1NgIw.js";import{G as X,S as J,a as Q}from"./SlideWrapper-CWJ70uFh.js";import{_ as U}from"./PrintStyle.vue_vue_type_script_setup_true_lang-DT3F77RG.js";const Y=["id"],P=m({__name:"PrintSlideClick",props:{nav:{}},setup(i){const t=r(()=>i.nav.currentSlideRoute.value),s=r(()=>({height:`${D.value}px`,width:`${g.value}px`})),a=F();G(()=>import("./DrawingPreview-Cy9QiVIV.js"),__vite__mapDeps([0,1,2,3,4,5,6])).then(l=>a.value=l.default);const c=r(()=>`${t.value.no.toString().padStart(3,"0")}-${(i.nav.clicks.value+1).toString().padStart(2,"0")}`);return N(W,R({nav:i.nav,configs:k,themeConfigs:r(()=>k.themeConfig)})),(l,w)=>(n(),o("div",{id:c.value,class:"print-slide-container",style:z(s.value)},[u(e(X)),u(J,{"clicks-context":l.nav.clicksContext.value,class:L(e(I)(t.value)),route:t.value},null,8,["clicks-context","class","route"]),a.value?(n(),_(e(a),{key:0,page:t.value.no},null,8,["page"])):p("v-if",!0),u(e(Q))],12,Y))}}),Z=m({__name:"PrintSlide",props:{route:{}},setup(i){const{isPrintWithClicks:t}=S(),s=b(i.route,t.value?0:O);return(a,c)=>(n(),o(d,null,[u(P,{"clicks-context":e(s),nav:e($)(a.route,e(s))},null,8,["clicks-context","nav"]),e(t)?(n(),o(d,{key:0},[p(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(n(!0),o(d,null,A(Math.max(0,e(s).total-e(s).clicksStart),l=>(n(),_(P,{key:l,nav:e($)(a.route,e(b)(a.route,l+e(s).clicksStart))},null,8,["nav"]))),128))],64)):p("v-if",!0)],64))}}),ee={id:"print-content"},te=m({__name:"PrintContainer",props:{width:{}},setup(i){const t=i,{slides:s,currentRoute:a}=S(),c=r(()=>t.width),l=r(()=>t.width/h.value),w=r(()=>c.value/l.value),B=r(()=>w.value<h.value?c.value/g.value:l.value*h.value/g.value);let v=s.value;a.value.query.range&&(v=T(v.length,a.value.query.range).map(y=>v[y-1]));const E=r(()=>({"select-none":!k.selectable}));return N(H,B),(C,y)=>(n(),o("div",{id:"print-container",class:L(E.value)},[f("div",ee,[(n(!0),o(d,null,A(e(v),x=>(n(),_(Z,{key:x.no,route:x},null,8,["route"]))),128))]),M(C.$slots,"controls")],2))}}),ae={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},oe=m({__name:"print",setup(i){const{isPrintMode:t}=S();return V(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),j(()=>{q()}),(s,a)=>(n(),o(d,null,[e(t)?(n(),_(U,{key:0})):p("v-if",!0),f("div",ae,[u(te,{class:"w-full h-full",style:{background:"var(--slidev-slide-container-background, black)"},width:e(K).width.value},null,8,["width"]),a[0]||(a[0]=f("div",{id:"twoslash-container"},null,-1))])],64))}});export{oe as default};