import{_ as Z,a as ee}from"../modules/unplugin-icons-BbiQRfe9.js";import{d as J,ab as te,ac as le,t as N,ad as oe,G as U,E as ne,a4 as ie,n as Q,C as c,o as i,c as k,i as $,h as W,ae,af as se,b as x,j as ce,O as re,A as L,P as ue,L as de,e as s,F as j,ag as q,k as M,x as w,g as B,l as H}from"../modules/vue-Dff40p7A.js";import{u as me,a as pe,i as fe,b as I,t as ve,s as he,c as ge,C as G,g as X,p as ke}from"../index-ChaMkb2s.js";import{C as be}from"./ClicksSlider-DoWfEgS0.js";import{_ as _e}from"./DrawingPreview.vue_vue_type_script_setup_true_lang-B5la-xIR.js";import{_ as V}from"./IconButton.vue_vue_type_script_setup_true_lang-CF6kpNON.js";import{u as xe,S as ye}from"./SlideContainer-KirVmL7e.js";import{_ as we}from"./NoteDisplay.vue_vue_type_style_index_0_lang-CjGGL6SA.js";import{S as Ce}from"./SlideWrapper-Xm8ek-p9.js";import"../modules/shiki-CVFM2M5h.js";const De=["placeholder"],$e=J({__name:"NoteEditable",props:{no:{type:Number,required:!0},class:{default:""},editing:{default:!1},style:{default:()=>({})},placeholder:{default:"No notes for this slide"},clicksContext:{type:Object},highlight:{default:!0},autoHeight:{default:!1}},emits:["update:editing","markerDblclick","markerClick"],setup(C,{emit:O}){const n=C,y=O,r=te(n,"editing",y,{passive:!0}),{info:h,update:D}=xe(le(n,"no")),p=N("");let F;const{ignoreUpdates:b}=oe(p,a=>{if(!r.value)return;const m=n.no;clearTimeout(F),F=setTimeout(()=>{D({note:a},m)},500)});U(()=>{var a;return(a=h.value)==null?void 0:a.note},(a="")=>{r.value||(clearTimeout(F),b(()=>{p.value=a}))},{immediate:!0,flush:"sync"});const d=N(),_=N();ne(()=>{var a;r.value&&((a=d.value)==null||a.focus())}),ie(d,()=>{r.value=!1});function T(){!n.autoHeight||!d.value||!r.value||d.value.scrollHeight>d.value.clientHeight&&(d.value.style.height=`${d.value.scrollHeight}px`)}function K(a){r.value&&a.metaKey&&a.key==="s"&&(a.preventDefault(),D({note:p.value},n.no))}return U([p,r],()=>{Q(()=>{T()})},{flush:"post",immediate:!0}),(a,m)=>{var S;return c(r)?ae((i(),x("textarea",{key:1,ref_key:"inputEl",ref:d,"onUpdate:modelValue":m[2]||(m[2]=g=>p.value=g),class:$(["prose resize-none overflow-auto outline-none bg-transparent block border-primary border-2",n.class]),style:W([{"line-height":"1.75"},[n.style,_.value!=null?{height:`${_.value}px`}:{}]]),placeholder:C.placeholder,onKeydown:[m[3]||(m[3]=ce(g=>r.value=!1,["esc"])),K]},null,46,De)),[[se,p.value]]):(i(),k(we,{key:0,class:$(["border-transparent border-2",[n.class,p.value?"":"opacity-25 italic select-none"]]),style:W(n.style),note:p.value||C.placeholder,"note-html":(S=c(h))==null?void 0:S.noteHTML,"clicks-context":C.clicksContext,"auto-scroll":!C.autoHeight,highlight:n.highlight,onMarkerClick:m[0]||(m[0]=(g,E)=>y("markerClick",g,E)),onMarkerDblclick:m[1]||(m[1]=(g,E)=>y("markerDblclick",g,E))},null,8,["class","style","note","note-html","clicks-context","auto-scroll","highlight"]))}}}),Fe={class:"h-screen w-screen of-hidden flex"},Se={class:"grid grid-rows-[auto_max-content] border-r border-main select-none max-h-full h-full"},Ee={class:"relative"},Me={class:"absolute left-0 top-0 bottom-0 w-200 flex flex-col flex-auto items-end group p2 gap-1 max-h-full of-x-visible of-y-auto",style:{direction:"rtl"}},He=["onClick"],Ne={p2:"",border:"t main"},Te={class:"select-none w-13 text-right my4 flex flex-col gap-1 items-end"},Ae={class:"text-3xl op20 mb2"},Be=s("div",{class:"i-carbon:presentation-file"},null,-1),Ie=["onDblclick"],Ve={class:"py3 mt-0.5 mr--8 ml--4 op0 transition group-hover:op100"},We=s("div",{class:"i-carbon:pen"},null,-1),Ke={key:0,class:"select-none absolute bottom-0 right-0 bg-main rounded-tl p2 op35 text-xs"},Le={class:"absolute top-0 right-0 px3 py1.5 border-b border-l rounded-lb bg-main border-main select-none"},ze={class:"text-xs op50"},z=450,Ze=J({__name:"overview",setup(C){me({title:`Overview - ${he}`});const{openInEditor:O,slides:n}=pe(),y=re(new Map),r=N([]),h=N(null),D=L(()=>n.value.map(t=>{var e,o;return a(((o=(e=t.meta)==null?void 0:e.slide)==null?void 0:o.note)||"")})),p=L(()=>D.value.reduce((t,e)=>t+e,0)),F=L(()=>n.value.map(t=>T(t)).reduce((t,e)=>t+e,0)),b=ue(),d=new WeakMap;function _(t){return d.has(t)||d.set(t,ge(t,G)),d.get(t)}function T(t){var e,o;return((e=t.meta)==null?void 0:e.clicks)||((o=_(t))==null?void 0:o.total)}function K(t){b.value===t?b.value=void 0:b.value=t}function a(t){const e=/[\w`'\-\u0392-\u03C9\u00C0-\u00FF\u0600-\u06FF\u0400-\u04FF]+|[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF\u3040-\u309F\uAC00-\uD7AF]+/g,o=t.match(e);let f=0;if(!o)return 0;for(let l=0;l<o.length;l++)o[l].charCodeAt(0)>=19968?f+=o[l].length:f+=1;return f}function m(t){const e=t.getBoundingClientRect(),o=20;return e.top>=0-o&&e.left>=0-o&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)+o&&e.right<=(window.innerWidth||document.documentElement.clientWidth)+o}function S(){const t=[];Array.from(y.entries()).forEach(([e,o])=>{m(o)&&t.push(e)}),r.value=t}function g(t){const e=document.createElement("a");e.target="_blank",e.href=ke+t.slice(1),e.click()}function E(t){const e=y.get(t);e&&e.scrollIntoView({behavior:"smooth",block:"start"})}function Y(t,e,o){const f=_(o);f.current===e?f.current=G:f.current=e,t.preventDefault()}return de(()=>{Q(()=>{S()})}),(t,e)=>{const o=Z,f=ee;return i(),x("div",Fe,[s("nav",Se,[s("div",Ee,[s("div",Me,[(i(!0),x(j,null,q(c(n),(l,v)=>{var u,A,P,R;return i(),x("div",{key:l.no,class:"relative",style:{direction:"ltr"}},[s("button",{class:$(["relative transition duration-300 w-8 h-8 rounded hover:bg-active hover:op100",r.value.includes(v)?"op100 text-primary bg-gray:5":"op20"]),onClick:Oe=>E(v)},[s("div",null,w(v+1),1)],10,He),(A=(u=l.meta)==null?void 0:u.slide)!=null&&A.title?(i(),x("div",{key:0,class:$(["pointer-events-none select-none absolute left-110% backdrop-blur-8 top-50% translate-y--50% ws-nowrap z-10 px2 shadow-xl rounded border border-main transition duration-400 op0 group-hover:op100",r.value.includes(v)?"text-primary":"text-main important-text-op-50"])},w((R=(P=l.meta)==null?void 0:P.slide)==null?void 0:R.title),3)):B("",!0)])}),128))])]),s("div",Ne,[c(fe)?(i(),k(V,{key:1,title:c(I)?"Dark mode":"Light mode","pointer-events-none":"",op50:""},{default:M(()=>[c(I)?(i(),k(o,{key:0})):(i(),k(f,{key:1}))]),_:1},8,["title"])):(i(),k(V,{key:0,title:c(I)?"Switch to light mode theme":"Switch to dark mode theme",onClick:e[0]||(e[0]=l=>c(ve)())},{default:M(()=>[c(I)?(i(),k(o,{key:0})):(i(),k(f,{key:1}))]),_:1},8,["title"]))])]),s("main",{class:"flex-1 h-full of-auto",style:W(`grid-template-columns: repeat(auto-fit,minmax(${z}px,1fr))`),onScroll:S},[(i(!0),x(j,null,q(c(n),(l,v)=>(i(),x("div",{key:l.no,ref_for:!0,ref:u=>y.set(v,u),class:$(["relative border-t border-main of-hidden flex gap-4 min-h-50 group",v===0?"pt5":""])},[s("div",Te,[s("div",Ae,w(v+1),1),H(V,{class:"mr--3 op0 group-hover:op80",title:"Play in new tab",onClick:u=>g(c(X)(l,!1))},{default:M(()=>[Be]),_:2},1032,["onClick"]),B("",!0)]),s("div",{class:"flex flex-col gap-2 my5",style:W({width:`${z}px`})},[s("div",{class:"border rounded border-main overflow-hidden bg-main select-none h-max",onDblclick:u=>g(c(X)(l,!1))},[(i(),k(ye,{key:l.no,width:z,class:"pointer-events-none important:[&_*]:select-none"},{default:M(()=>[H(Ce,{"clicks-context":_(l),route:l,"render-context":"overview"},null,8,["clicks-context","route"]),H(_e,{page:l.no},null,8,["page"])]),_:2},1024))],40,Ie),T(l)?(i(),k(be,{key:0,active:b.value===l,"clicks-context":_(l),class:"w-full mt-2",onDblclick:u=>K(l),onClick:u=>b.value=l},null,8,["active","clicks-context","onDblclick","onClick"])):B("",!0)],4),s("div",Ve,[H(V,{title:"Edit Note",class:$(["rounded-full w-9 h-9 text-sm",h.value===l.no?"important:op0":""]),onClick:u=>h.value=l.no},{default:M(()=>[We]),_:2},1032,["class","onClick"])]),H($e,{no:l.no,class:"max-w-250 w-250 text-lg rounded p3","auto-height":!0,highlight:b.value===l,editing:h.value===l.no,"clicks-context":_(l),onDblclick:u=>h.value!==l.no?h.value=l.no:null,"onUpdate:editing":e[1]||(e[1]=u=>h.value=null),onMarkerClick:(u,A)=>Y(u,A,l)},null,8,["no","highlight","editing","clicks-context","onDblclick","onMarkerClick"]),D.value[v]>0?(i(),x("div",Ke,w(D.value[v])+" words ",1)):B("",!0)],2))),128))],36),s("div",Le,[s("div",ze,w(c(n).length)+" slides · "+w(F.value+c(n).length-1)+" clicks · "+w(p.value)+" words ",1)])])}}});export{Ze as default};
