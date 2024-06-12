import{d as T,t as y,a7 as $,C as B,ax as V,v as b,as as j,o as R,c as M,k as v,l as E,g as F,q as J,s as K,e as t,a6 as C}from"../modules/vue-C3U069DO.js";import{t as D}from"../modules/shiki-DzaYbSXO.js";import{u as L,p as I,f as G}from"./context-BUqMB05F.js";import{ai as H,C as q,aj as z,ak as U,al as Y,am as X,an as Q,a0 as O,_ as W,ao as P}from"../index-DCQqeErs.js";import{I as Z}from"./default-DWqR18Su.js";const tt=T({props:{at:{type:[Number,String],default:"+1"},unmount:{type:Boolean,default:!1},transition:{type:[Object,String,Boolean],default:!1},tag:{type:String,default:"div"},childTag:{type:String,default:"div"}},setup({at:_,unmount:p,transition:u,tag:o,childTag:m},{slots:h}){const c=Object.entries(h).sort((e,n)=>-e[0].split("-")[0]+ +n[0].split("-")[0]),s=[];let d;for(const[e,n]of c){const r=y();if(Number.isFinite(+e))s.push([+e,d??+e+1,n,r]),d=+e;else{const[a,i]=e.split("-").map(Number);if(!Number.isFinite(a)||!Number.isFinite(i))throw new Error(`Invalid range for v-switch: ${e}`);s.push([a,i,n,r]),d=a}}const f=Math.max(...s.map(e=>e[1]))-1,S=H(),l=y(0),{$clicksContext:g,$nav:w}=L();$(()=>{const e=g.calculateSince(_,f);if(!e){l.value=q;return}g.register(S,e),B(()=>{l.value=e.currentOffset.value+1})}),V(()=>{g.unregister(S)});function N(){O.value=!0,D()}const k=u&&{...z(u,w.value.navDirection<0),tag:o,onAfterLeave:N};return()=>{const e=[];for(let n=s.length-1;n>=0;n--){const[r,a,i,A]=s[n],x=r<=l.value&&l.value<a;p&&!x||e.push(b(m,{key:n,ref:A,class:[U,l.value===r&&Y,l.value>=a&&X,!x&&Q].filter(Boolean),"data-slidev-clicks-start":r,"data-slidev-clicks-end":a},i==null?void 0:i()))}return k?b(j,O.value?{}:k,()=>e):b(o,e)}}}),et={__name:"12",setup(_,{expose:p}){p(),I(P);const{$slidev:u,$nav:o,$clicksContext:m,$clicks:h,$page:c,$renderContext:s,$frontmatter:d}=L(),f={$slidev:u,$nav:o,$clicksContext:m,$clicks:h,$page:c,$renderContext:s,$frontmatter:d,InjectedLayout:Z,get frontmatter(){return P},get useSlideContext(){return L},get _provideFrontmatter(){return I},get _frontmatterToProps(){return G}};return Object.defineProperty(f,"__isScriptSetup",{enumerable:!1,value:!0}),f}},nt=t("h1",null,"Contributions Linked to Orange",-1),ot=t("p",null,[t("em",null,"Data manually gathered the 7th of June 2024, it may contain errors")],-1),st=t("table",null,[t("thead",null,[t("tr",null,[t("th",null,"Contribution type"),t("th",null,"Linked to Orange"),t("th",null,"Bootstrap"),t("th",null,"Percentage linked to Orange")])]),t("tbody",null,[t("tr",null,[t("td",null,"Issues (created)"),t("td",null,"100"),t("td",null,"22,396"),t("td",null,"0.4%")]),t("tr",null,[t("td",null,"Pull requests (created)"),t("td",null,"840"),t("td",null,"15,199"),t("td",null,"5.5%")]),t("tr",null,[t("td",null,"Commits"),t("td",null,"920"),t("td",null,"22,813"),t("td",null,"4%")])])],-1),at=t("br",null,null,-1),lt=t("ul",null,[t("li",null,"10 developers linked to Orange have contributed to Bootstrap along the years"),t("li",null,[C("4 developers linked to Orange are in the Bootstrap’s core team "),t("span",{class:"text-xs opacity-50"},"(not all of them are still active)")]),t("li",null,[C("2 developers linked to Orange are in the top 8 contributors of all time "),t("span",{class:"text-xs opacity-50"},"(4 in the top 20)")])],-1),rt=t("ul",null,[t("li",null,[t("span",{class:"underline underline-offset-4 underline-orange decoration-4 font-semibold"},'"Linked to Orange"'),C(" because: "),t("ul",null,[t("li",null,"some are not Orange employees anymore,"),t("li",null,"some are still working at Orange,"),t("li",null,"and some contribute on their spare time")])])],-1);function it(_,p,u,o,m,h){const c=tt;return R(),M(o.InjectedLayout,J(K(o._frontmatterToProps(o.frontmatter,11))),{default:v(()=>[nt,ot,st,at,E(c,null,{1:v(()=>[lt]),2:v(()=>[rt]),_:1}),F(`
Sources:
- Commits: https://github.com/twbs/bootstrap/graphs/contributors
- PRs: https://github.com/twbs/bootstrap/pulls
- Issues: https://github.com/twbs/bootstrap/issues

People linked to Orange:
- Vincent Aniort | [@Aniort](https://github.com/Aniort)
- Isabelle Chanclou | [@isabellechanclou](https://github.com/isabellechanclou)
- Julien Déramond | [@julien-deramond](https://github.com/julien-deramond)
- Yves Gatesoupe | [@ygatesoupe](https://github.com/ygatesoupe)
- Hannah Issermann | [@hannahiss](https://github.com/hannahiss)
- Loïc Laussel | [@Lausselloic](https://github.com/Lausselloic)
- Mewen Le Hô | [@MewenLeHo](https://github.com/MewenLeHo)
- Louis-Maxime Piton | [@louismaximepiton](https://github.com/louismaximepiton)
- Gaël Poupard | [@ffoodd](https://github.com/ffoodd)
- Johann Servoire | [@Johann-S](https://github.com/Johann-S)
`)]),_:1},16)}const ht=W(et,[["render",it],["__file","/@slidev/slides/12.md"]]);export{ht as default};
