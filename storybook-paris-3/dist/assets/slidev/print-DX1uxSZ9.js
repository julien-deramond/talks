import{d,ah as u,z as f,b as i,e,x as a,F as h,a9 as g,o as n,a7 as v,l as x,g as b}from"../modules/vue-LRxAorHn.js";import{a as N,u as y,x as p,_ as k}from"../index-DWJ0UZ1z.js";import{N as S}from"./NoteDisplay-DhpwEJU6.js";import"../modules/shiki-RnNLOD1n.js";const w=d({__name:"print",setup(m,{expose:c}){c();const{slides:r,total:o}=N();u(`
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
`),y({title:`Notes - ${p.title}`});const _=f(()=>r.value.map(t=>{var s;return(s=t.meta)==null?void 0:s.slide}).filter(t=>t!==void 0&&t.noteHTML!=="")),l={slides:r,total:o,slidesWithNote:_,get configs(){return p},NoteDisplay:S};return Object.defineProperty(l,"__isScriptSetup",{enumerable:!1,value:!0}),l}}),z={id:"page-root"},D={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},H={class:"opacity-50"},W=e("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-main mb-8"};function C(m,c,r,o,_,l){return n(),i("div",z,[e("div",D,[e("div",L,[e("h1",T,a(o.configs.title),1),e("div",V,a(new Date().toLocaleString()),1)]),(n(!0),i(h,null,g(o.slidesWithNote,(t,s)=>(n(),i("div",{key:s,class:"flex flex-col gap-4 break-inside-avoid-page"},[e("div",null,[e("h2",j,[e("div",B,[e("div",H,a(t==null?void 0:t.no)+"/"+a(o.total),1),v(" "+a(t==null?void 0:t.title)+" ",1),W])]),x(o.NoteDisplay,{"note-html":t.noteHTML,class:"max-w-full"},null,8,["note-html"])]),s<o.slidesWithNote.length-1?(n(),i("hr",q)):b("v-if",!0)]))),128))])])}const O=k(w,[["render",C],["__file","/Users/ju/talks/storybook-paris-3/node_modules/.pnpm/@slidev+client@0.49.9_@nuxt+kit@3.11.2_rollup@4.22.4__@vue+compiler-sfc@3.4.27_postcss@8.4.47_4i3r2m7ezxrq7qpxifpbimmzgu/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{O as default};
