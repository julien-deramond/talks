import{d as u,t as c,a7 as d,D as p,E as _,o as m,b as f,i as v}from"../modules/vue-C3U069DO.js";import{u as g}from"./context-BUqMB05F.js";import{u as w}from"./DrawingPreview-DIT1P1Mn.js";import{_ as b}from"../index-DCQqeErs.js";import"../modules/shiki-DzaYbSXO.js";const E=u({__name:"DrawingLayer",setup(l,{expose:t}){t();const{drauu:e,drawingEnabled:n,loadCanvas:o}=w(),a=g().$scale,s=c();d(()=>{e.mount(s.value,s.value.parentElement),p(a,i=>e.options.coordinateScale=1/i,{immediate:!0}),o()}),_(()=>{e.unmount()});const r={drauu:e,drawingEnabled:n,loadCanvas:o,scale:a,svg:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}});function x(l,t,e,n,o,a){return m(),f("svg",{ref:"svg",class:v(["w-full h-full absolute top-0",{"pointer-events-none":!n.drawingEnabled,"touch-none":n.drawingEnabled}])},null,2)}const k=b(E,[["render",x],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/DrawingLayer.vue"]]);export{k as default};