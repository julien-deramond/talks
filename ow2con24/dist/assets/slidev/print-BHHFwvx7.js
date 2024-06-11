import{d as m,ag as u,y as h,b as n,e,x as a,F as f,a8 as g,o as i,a6 as v,l as x,g as b}from"../modules/vue-C3U069DO.js";import{a as y,u as N,y as d,_ as k}from"../index-LWhIeU6I.js";import{N as w}from"./NoteDisplay-COP4F9T-.js";import"../modules/shiki-DzaYbSXO.js";const S=m({__name:"print",setup(p,{expose:c}){c();const{slides:l,total:o}=y();u(`
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
`),N({title:`Notes - ${d.title}`});const _=h(()=>l.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),r={slides:l,total:o,slidesWithNote:_,get configs(){return d},NoteDisplay:w};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),D={id:"page-root"},L={class:"m-4"},T={class:"mb-10"},V={class:"text-4xl font-bold mt-2"},j={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},W={class:"opacity-50"},C=e("div",{class:"flex-auto"},null,-1),F={key:0,class:"border-main mb-8"};function M(p,c,l,o,_,r){return i(),n("div",D,[e("div",L,[e("div",T,[e("h1",V,a(o.configs.title),1),e("div",j,a(new Date().toLocaleString()),1)]),(i(!0),n(f,null,g(o.slidesWithNote,(t,s)=>(i(),n("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",B,[e("div",H,[e("div",W,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),C])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(i(),n("hr",F)):b("v-if",!0)]))),128))])])}const P=k(S,[["render",M],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{P as default};
