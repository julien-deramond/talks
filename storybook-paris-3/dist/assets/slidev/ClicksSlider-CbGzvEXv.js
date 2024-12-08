import{d as w,ab as I,ac as j,t as b,ad as T,E as C,D as q,a1 as V,n as K,o as p,c as L,i as f,h as g,ae as N,af as H,b as v,j as U,z as _,e as c,l as B,F as S,x as h,g as O,a9 as A,p as F,a as R}from"../modules/vue-LRxAorHn.js";import{a as X}from"./SlideContainer-CRbPGxFP.js";import{N as P}from"./NoteDisplay-DhpwEJU6.js";import{_ as M,o as G,r as J,C as Q}from"../index-DWJ0UZ1z.js";import{n as W}from"../modules/unplugin-icons-BGOR5PKN.js";const Y=w({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(i,{expose:o,emit:n}){o();const e=i,d=n,s=I(e,"editing",d,{passive:!0}),{info:r,update:t}=X(j(e,"no")),l=b("");let u;const{ignoreUpdates:k}=T(l,a=>{if(!s.value)return;const E=e.no;clearTimeout(u),u=setTimeout(()=>{t({note:a},E)},500)});C(()=>{var a;return(a=r.value)==null?void 0:a.note},(a="")=>{s.value||(clearTimeout(u),k(()=>{l.value=a}))},{immediate:!0,flush:"sync"});const m=b(),D=b();q(()=>{var a;s.value&&((a=m.value)==null||a.focus())}),V(m,()=>{s.value=!1});function x(){!e.autoHeight||!m.value||!s.value||m.value.scrollHeight>m.value.clientHeight&&(m.value.style.height=`${m.value.scrollHeight}px`)}C([l,s],()=>{K(()=>{x()})},{flush:"post",immediate:!0});const y={props:e,emit:d,editing:s,info:r,update:t,note:l,get timer(){return u},set timer(a){u=a},ignoreUpdates:k,inputEl:m,inputHeight:D,calculateEditorHeight:x,NoteDisplay:P};return Object.defineProperty(y,"__isScriptSetup",{enumerable:!1,value:!0}),y}}),Z=["placeholder"];function $(i,o,n,e,d,s){var r;return e.editing?N((p(),v("textarea",{key:1,ref:"inputEl","onUpdate:modelValue":o[2]||(o[2]=t=>e.note=t),class:f(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",e.props.class]),style:g([{"line-height":"1.75"},[e.props.style,e.inputHeight!=null?{height:`${e.inputHeight}px`}:{}]]),placeholder:n.placeholder,onKeydown:o[3]||(o[3]=U(t=>e.editing=!1,["esc"]))},null,46,Z)),[[H,e.note]]):(p(),L(e.NoteDisplay,{key:0,class:f(["border-transparent border-2",[e.props.class,e.note?"":"opacity-25 italic select-none"]]),style:g(e.props.style),note:e.note||n.placeholder,"note-html":(r=e.info)==null?void 0:r.noteHTML,"clicks-context":n.clicksContext,"auto-scroll":!n.autoHeight,onMarkerClick:o[0]||(o[0]=(t,l)=>e.emit("markerClick",t,l)),onMarkerDblclick:o[1]||(o[1]=(t,l)=>e.emit("markerDblclick",t,l))},null,8,["class","style","note","note-html","clicks-context","auto-scroll"]))}const fe=M(Y,[["render",$],["__file","/Users/ju/talks/storybook-paris-3/node_modules/.pnpm/@slidev+client@0.49.9_@nuxt+kit@3.11.2_rollup@4.22.4__@vue+compiler-sfc@3.4.27_postcss@8.4.47_4i3r2m7ezxrq7qpxifpbimmzgu/node_modules/@slidev/client/internals/NoteEditable.vue"]]),ee=w({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(i,{expose:o}){o();const n=i,e=_(()=>n.clicksContext.total),d=_(()=>G(0,n.clicksContext.clicksStart,e.value)),s=_(()=>e.value-d.value+1),r=_({get(){return n.clicksContext.current>e.value?-1:n.clicksContext.current},set(k){n.clicksContext.current=k}}),t=_(()=>J(d.value,e.value+1));function l(){(r.value<0||r.value>e.value)&&(r.value=0)}const u={props:n,total:e,start:d,length:s,current:r,clicksRange:t,onMousedown:l,get CLICKS_MAX(){return Q}};return Object.defineProperty(u,"__isScriptSetup",{enumerable:!1,value:!0}),u}}),z=i=>(F("data-v-bc67d9b0"),i=i(),R(),i),te=["title"],oe={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},ne=z(()=>c("div",{"flex-auto":""},null,-1)),le={"text-primary":""},re=z(()=>c("span",{op25:""},"/",-1)),se={op50:""},ae=["min","max"];function ie(i,o,n,e,d,s){const r=W;return p(),v("div",{class:f(["flex gap-1 items-center select-none",e.length?"":"op50"]),title:`Clicks in this slide: ${e.length}`},[c("div",oe,[B(r,{"text-sm":"",op50:""}),ne,e.current>=0&&e.current!==e.CLICKS_MAX?(p(),v(S,{key:0},[c("span",le,h(e.current),1),re],64)):O("v-if",!0),c("span",se,h(e.total),1)]),c("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:o[2]||(o[2]=t=>e.current=n.clicksContext.total)},[(p(!0),v(S,null,A(e.clicksRange,t=>(p(),v("div",{key:t,border:"y main","of-hidden":"",relative:"",class:f([t===0?"rounded-l border-l":"",t===e.total?"rounded-r border-r":""]),style:g({width:e.length>0?`${1/e.length*100}%`:"100%"})},[c("div",{absolute:"","inset-0":"",class:f(t<=e.current?"bg-primary op15":"")},null,2),c("div",{class:f([+t==+e.current?"text-primary font-bold op100 border-primary":"op30 border-main",t===0?"rounded-l":"",t===e.total?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},h(t),3)],6))),128)),N(c("input",{"onUpdate:modelValue":o[0]||(o[0]=t=>e.current=t),class:"range",absolute:"","inset-0":"",type:"range",min:e.start,max:e.total,step:1,"z-10":"",op0:"",style:g({"--thumb-width":`${1/(e.length+1)*100}%`}),onMousedown:e.onMousedown,onFocus:o[1]||(o[1]=t=>{var l;return(l=t.currentTarget)==null?void 0:l.blur()})},null,44,ae),[[H,e.current]])],32)],10,te)}const _e=M(ee,[["render",ie],["__scopeId","data-v-bc67d9b0"],["__file","/Users/ju/talks/storybook-paris-3/node_modules/.pnpm/@slidev+client@0.49.9_@nuxt+kit@3.11.2_rollup@4.22.4__@vue+compiler-sfc@3.4.27_postcss@8.4.47_4i3r2m7ezxrq7qpxifpbimmzgu/node_modules/@slidev/client/internals/ClicksSlider.vue"]]);export{_e as C,fe as N};
