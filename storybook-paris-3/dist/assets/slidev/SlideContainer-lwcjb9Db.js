import{t as h,A as n,C as c,O as P,d as b,aB as j,ak as z,aj as m,L as D,o as y,b as g,e as w,f as _,h as d,g as V,F as q}from"../modules/vue-Dff40p7A.js";import{V as N,a2 as o,a3 as A,a4 as F,a as L,B as $,P as M,v as k,q as B,E as H,a5 as O,_ as T}from"../index-D0EDGa3c.js";function U(a){var e;return{info:h(((e=N(a))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const v={};function ae(a){function e(t){return v[t]??(v[t]=U(t))}return{info:n({get(){return e(c(a)).info.value},set(t){e(c(a)).info.value=t}}),update:async(t,s)=>{const r=e(s??c(a)),l=await r.update(t);return l&&(r.info.value=l),l}}}const i=P({});let W=[],G=[];o(i,"$syncUp",!0);o(i,"$syncDown",!0);o(i,"$paused",!1);o(i,"$onSet",a=>W.push(a));o(i,"$onPatch",a=>G.push(a));A();o(i,"$patch",async()=>!1);const J=F(i,i,!0);class K{constructor(){this._capturePromises=new Map}getSnapshot(e){const t=J.state[e];if(!t)return;const s=N(e);if(s&&(t==null?void 0:t.revision)===(s==null?void 0:s.meta.slide.revision))return t.image}async captureSnapshot(e,t,s=1e3){}async _captureSnapshot(e,t,s){}}const E=new K,Q=["id"],R=["id"],X=["src"],Y=b({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1},no:{type:Number,required:!1},useSnapshot:{type:Boolean,default:!1}},setup(a){const e=a,{isPrintMode:t}=L(),s=h(null),r=j(s),l=h(null),x=n(()=>e.width??r.width.value),C=n(()=>e.width?e.width/$.value:r.height.value),u=n(()=>M.value&&!t.value?+M.value:Math.min(x.value/k.value,C.value/B.value)),I=n(()=>({height:`${B.value}px`,width:`${k.value}px`,transform:`translate(-50%, -50%) scale(${u.value})`,"--slidev-slide-scale":u.value})),p=n(()=>e.width?{width:`${e.width}px`,height:`${e.width/$.value}px`}:{});e.isMain&&z(n(()=>`:root { --slidev-slide-scale: ${u.value}; }`)),m(H,u),m(O,l);const f=n(()=>{if(!(!e.useSnapshot||e.no==null))return E.getSnapshot(e.no)});return D(()=>{s.value&&e.useSnapshot&&e.no!=null&&E.captureSnapshot(e.no,s.value)}),(S,Z)=>f.value?(y(),g(q,{key:1},[V(" Image preview "),w("img",{src:f.value,class:"w-full object-cover",style:d(p.value)},null,12,X)],2112)):(y(),g("div",{key:0,id:a.isMain?"slide-container":void 0,ref_key:"container",ref:s,class:"slidev-slide-container",style:d(p.value)},[w("div",{id:a.isMain?"slide-content":void 0,ref_key:"slideElement",ref:l,class:"slidev-slide-content",style:d(I.value)},[_(S.$slots,"default",{},void 0,!0)],12,R),_(S.$slots,"controls",{},void 0,!0)],12,Q))}}),se=T(Y,[["__scopeId","data-v-aca58ed3"]]);export{se as S,U as a,ae as u};