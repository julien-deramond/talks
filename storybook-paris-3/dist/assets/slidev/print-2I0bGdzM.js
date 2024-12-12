import{d as _,ak as u,A as h,o as n,b as l,e as t,x as s,C as c,F as f,ag as g,aa as v,l as x,g as b}from"../modules/vue-BOoaS5mz.js";import{a as k,u as y,x as m}from"../index-D_oFWAs5.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-C5DR0Xg1.js";import"../modules/shiki-CqyJGmhe.js";const w={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},H={class:"font-bold flex gap-2"},S={class:"opacity-50"},A={key:0,class:"border-main mb-8"},z=_({__name:"print",setup(D){const{slides:d,total:p}=k();u(`
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
`),y({title:`Notes - ${m.title}`});const i=h(()=>d.value.map(o=>{var a;return(a=o.meta)==null?void 0:a.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,a)=>(n(),l("div",w,[t("div",L,[t("div",T,[t("h1",V,s(c(m).title),1),t("div",B,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(e,r)=>(n(),l("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",H,[t("div",S,s(e==null?void 0:e.no)+"/"+s(c(p)),1),v(" "+s(e==null?void 0:e.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(n(),l("hr",A)):b("v-if",!0)]))),128))])]))}});export{z as default};
