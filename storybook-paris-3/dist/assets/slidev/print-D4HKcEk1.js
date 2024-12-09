import{d as p,ak as u,A as h,o as s,b as n,e as t,x as a,C as r,F as f,ag as g,aa as v,l as x,g as b}from"../modules/vue-Dff40p7A.js";import{a as k,u as y,x as m}from"../index-ChaMkb2s.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-CjGGL6SA.js";import"../modules/shiki-CVFM2M5h.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),D={key:0,class:"border-main mb-8"},E=p({__name:"print",setup(F){const{slides:_,total:d}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const c=h(()=>_.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",w,[t("div",L,[t("div",T,[t("h1",V,a(r(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(c.value,(e,i)=>(s(),n("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",S,a(e==null?void 0:e.no)+"/"+a(r(d)),1),v(" "+a(e==null?void 0:e.title)+" ",1),A])]),x(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<c.value.length-1?(s(),n("hr",D)):b("",!0)]))),128))])]))}});export{E as default};
