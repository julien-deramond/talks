const __vite__fileDeps=["assets/slidev/DrawingControls-ChcdR7MX.js","assets/modules/unplugin-icons-BPrKtC3t.js","assets/modules/vue-C3U069DO.js","assets/modules/shiki-DzaYbSXO.js","assets/modules/shiki-DeiVkiDa.css","assets/slidev/DrawingPreview-hk3vMlD1.js","assets/index-LWhIeU6I.js","assets/index-BmBPTZgR.css","assets/slidev/ContextMenu-BbLh3EVP.js","assets/slidev/IconButton-CSbukdLv.js","assets/slidev/SlideContainer-ChiMxrEP.js","assets/SlideContainer-DdXMLMP-.css","assets/slidev/SlideWrapper-d40L5LgM.js","assets/SlideWrapper-B46MMT8E.css","assets/slidev/context-DSPI3CTJ.js","assets/ContextMenu-BeW5hUDX.css","assets/DrawingControls-C5T1oZL5.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{d as m,aa as C,o as r,c as u,b as f,e as l,f as E,i as b,g as d,ah as I,y as V,k,a6 as j,M as v,l as _,F as D,h as N,t as O}from"../modules/vue-C3U069DO.js";import{_ as p,y as g,a as M,x as R,G as z,H as U,d as B,I as W,n as y,J as G,F as H}from"../index-LWhIeU6I.js";import{Q as T,G as A,C as F,u as L,r as Q,N as J,S as K,o as X}from"./ContextMenu-BbLh3EVP.js";import{S as Y}from"./SlideContainer-ChiMxrEP.js";import{P as q}from"./PrintStyle-DKvIVc5A.js";import{u as Z}from"./DrawingPreview-hk3vMlD1.js";import{o as $}from"../modules/unplugin-icons-BPrKtC3t.js";import"../modules/shiki-DzaYbSXO.js";import"./IconButton-CSbukdLv.js";import"./SlideWrapper-d40L5LgM.js";import"./context-DSPI3CTJ.js";const ee=m({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["update:modelValue"],setup(a,{expose:o,emit:t}){o();const e=a,s=t,i=C(e,"modelValue",s);function n(){i.value=!1}const c={props:e,emit:s,value:i,onClick:n};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),oe={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"};function te(a,o,t,e,s,i){return r(),u(I,null,[e.value?(r(),f("div",oe,[l("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:o[0]||(o[0]=n=>e.onClick())}),l("div",{class:b(["m-auto rounded-md bg-main shadow",e.props.class]),"dark:border":"~ main"},[E(a.$slots,"default")],2)])):d("v-if",!0)],1024)}const ne=p(ee,[["render",te],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/Modal.vue"]]),se=m({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["update:modelValue"],setup(a,{expose:o,emit:t}){o();const e=a,s=t,i=C(e,"modelValue",s),n=V(()=>typeof g.info=="string"),c={props:e,emit:s,value:i,hasInfo:n,get configs(){return g},Modal:ne};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}}),re="/assets/logo-BYkHSa_O.png",ie={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},ae=["innerHTML"],le=l("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[l("div",{class:"flex gap-1 children:my-auto"},[l("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),l("img",{class:"w-5 h-5",src:re,alt:"Slidev logo"}),l("div",{style:{color:"#2082A6"}},[l("b",null,"Sli"),j("dev ")])])],-1);function de(a,o,t,e,s,i){return r(),u(e.Modal,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n),class:"px-6 py-4"},{default:k(()=>[l("div",ie,[e.hasInfo?(r(),f("div",{key:0,class:"mb-4",innerHTML:e.configs.info},null,8,ae)):d("v-if",!0),le])]),_:1},8,["modelValue"])}const ce=p(se,[["render",de],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/InfoDialog.vue"]]),ue=m({__name:"Controls",setup(a,{expose:o}){o();const{isEmbedded:t}=M(),e=!g.drawings.presenterOnly&&!t.value,s=v();e&&R(()=>import("./DrawingControls-ChcdR7MX.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])).then(w=>s.value=w.default);const i=v(),n=v(),c={isEmbedded:t,drawingEnabled:e,DrawingControls:s,WebCamera:i,RecordingDialog:n,get showInfoDialog(){return z},get showRecordingDialog(){return U},get configs(){return g},QuickOverview:T,InfoDialog:ce,Goto:A,ContextMenu:F};return Object.defineProperty(c,"__isScriptSetup",{enumerable:!1,value:!0}),c}});function _e(a,o,t,e,s,i){return r(),f(D,null,[e.drawingEnabled&&e.DrawingControls?(r(),u(e.DrawingControls,{key:0})):d("v-if",!0),_(e.QuickOverview),_(e.Goto),e.WebCamera?(r(),u(e.WebCamera,{key:1})):d("v-if",!0),e.RecordingDialog?(r(),u(e.RecordingDialog,{key:2,modelValue:e.showRecordingDialog,"onUpdate:modelValue":o[0]||(o[0]=n=>e.showRecordingDialog=n)},null,8,["modelValue"])):d("v-if",!0),e.configs.info?(r(),u(e.InfoDialog,{key:3,modelValue:e.showInfoDialog,"onUpdate:modelValue":o[1]||(o[1]=n=>e.showInfoDialog=n)},null,8,["modelValue"])):d("v-if",!0),_(e.ContextMenu)],64)}const fe=p(ue,[["render",_e],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/Controls.vue"]]),me=m({__name:"PresenterMouse",setup(a,{expose:o}){o();const t={get sharedState(){return B}};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}}),pe={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"};function ve(a,o,t,e,s,i){const n=$;return e.sharedState.cursor?(r(),f("div",pe,[_(n,{class:"absolute stroke-white dark:stroke-black",style:N({left:`${e.sharedState.cursor.x}%`,top:`${e.sharedState.cursor.y}%`,strokeWidth:16})},null,8,["style"])])):d("v-if",!0)}const ge=p(me,[["render",ve],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),we=m({__name:"play",setup(a,{expose:o}){o();const{next:t,prev:e,isPrintMode:s}=M(),{isDrawing:i}=Z(),n=O();function c(h){var x;y.value||h.button===0&&((x=h.target)==null?void 0:x.id)==="slide-container"&&(h.pageX/window.innerWidth>.5?t():e())}L(n),Q();const w=V(()=>W.value||y.value),P=v(),S={next:t,prev:e,isPrintMode:s,isDrawing:i,root:n,onClick:c,persistNav:w,SideEditor:P,get isEditorVertical(){return G},get showEditor(){return y},get windowSize(){return H},Controls:fe,SlideContainer:Y,NavControls:J,SlidesShow:K,PrintStyle:q,get onContextMenu(){return X},PresenterMouse:ge};return Object.defineProperty(S,"__isScriptSetup",{enumerable:!1,value:!0}),S}}),he=l("div",{id:"twoslash-container"},null,-1);function ye(a,o,t,e,s,i){return r(),f(D,null,[e.isPrintMode?(r(),u(e.PrintStyle,{key:0})):d("v-if",!0),l("div",{id:"page-root",ref:"root",class:b(["grid",e.isEditorVertical?"grid-rows-[1fr_max-content]":"grid-cols-[1fr_max-content]"])},[_(e.SlideContainer,{style:{background:"var(--slidev-slide-container-background, black)"},width:e.isPrintMode?e.windowSize.width.value:void 0,"is-main":"",onPointerdown:e.onClick,onContextmenu:e.onContextMenu},{default:k(()=>[_(e.SlidesShow,{"render-context":"slide"}),_(e.PresenterMouse)]),controls:k(()=>[e.isPrintMode?d("v-if",!0):(r(),f("div",{key:0,class:b(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[e.persistNav?"!opacity-100 right-0":"opacity-0 p-2",e.isDrawing?"pointer-events-none":""]])},[_(e.NavControls,{persist:e.persistNav},null,8,["persist"])],2))]),_:1},8,["width","onContextmenu"]),e.SideEditor&&e.showEditor?(r(),u(e.SideEditor,{key:0,resize:!0})):d("v-if",!0)],2),e.isPrintMode?d("v-if",!0):(r(),u(e.Controls,{key:1})),he],64)}const je=p(we,[["render",ye],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/pages/play.vue"]]);export{je as default};
