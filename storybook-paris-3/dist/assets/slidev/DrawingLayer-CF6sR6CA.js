import{d as u,t as c,a8 as p,E as _,G as m,o as d,b as f,i as v}from"../modules/vue-LRxAorHn.js";import{u as g}from"./context-DLOTfryc.js";import{u as b}from"./DrawingPreview-D7LxV_5s.js";import{_ as w}from"../index-DWJ0UZ1z.js";import"../modules/shiki-RnNLOD1n.js";const x=u({__name:"DrawingLayer",setup(l,{expose:r}){r();const{drauu:e,drawingEnabled:n,loadCanvas:o}=b(),s=g().$scale,a=c();p(()=>{e.mount(a.value,a.value.parentElement),_(s,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),m(()=>{e.unmount()});const t={drauu:e,drawingEnabled:n,loadCanvas:o,scale:s,svg:a};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function E(l,r,e,n,o,s){return d(),f("svg",{ref:"svg",class:v(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const S=w(x,[["render",E],["__file","/Users/ju/talks/storybook-paris-3/node_modules/.pnpm/@slidev+client@0.49.9_@nuxt+kit@3.11.2_rollup@4.22.4__@vue+compiler-sfc@3.4.27_postcss@8.4.47_4i3r2m7ezxrq7qpxifpbimmzgu/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{S as default};
