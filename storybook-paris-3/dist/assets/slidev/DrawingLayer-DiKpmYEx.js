import{d as u,t as l,L as m,G as c,H as i,o as p,b as f,i as d,C as t}from"../modules/vue-BOoaS5mz.js";import{u as _}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-DrX9quD9.js";import{u as v}from"./context-B6g-l5Df.js";import"../index-DLg1NgIw.js";import"../modules/shiki-CqyJGmhe.js";const B=u({__name:"DrawingLayer",setup(g){const{drauu:e,drawingEnabled:o,loadCanvas:s}=_(),r=v().$scale,n=l();return m(()=>{e.mount(n.value,n.value.parentElement),c(r,a=>e.options.coordinateScale=1/a,{immediate:!0}),s()}),i(()=>{e.unmount()}),(a,w)=>(p(),f("svg",{ref_key:"svg",ref:n,class:d(["w-full h-full absolute top-0",{"pointer-events-none":!t(o),"touch-none":t(o)}])},null,2))}});export{B as default};