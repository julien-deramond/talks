import{t as O}from"../modules/shiki-CqyJGmhe.js";import{d as N,t as w,L as R,E as V,N as z,v as A,av as K,o as L,b as U,e as s,f as D,i as b,c as j,k as e,aa as t,l as d,m as u,q as M,s as G,C as _}from"../modules/vue-BOoaS5mz.js";import{ac as W,C as Y,ad as q,ae as X,af as H,ag as J,ah as Q,Y as x,_ as Z}from"../index-CYtqDCZH.js";import{u as P,f as ss}from"./context-TNGltEDt.js";import{_ as is}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-DRkRHeI6.js";import{_ as ts}from"../btn-blue-DRcLB8eW.js";import"../modules/unplugin-icons-C3OUGGon.js";const as=N({props:{at:{type:[Number,String],default:"+1"},unmount:{type:Boolean,default:!1},transition:{type:[Object,String,Boolean],default:!1},tag:{type:String,default:"div"},childTag:{type:String,default:"div"}},setup({at:y,unmount:p,transition:r,tag:f,childTag:B},{slots:C}){const E=Object.entries(C).sort((a,n)=>-a[0].split("-")[0]+ +n[0].split("-")[0]),h=[];let v;for(const[a,n]of E){const g=w();if(Number.isFinite(+a))h.push([+a,v??+a+1,n,g]),v=+a;else{const[o,c]=a.split("-").map(Number);if(!Number.isFinite(o)||!Number.isFinite(c))throw new Error(`Invalid range for v-switch: ${a}`);h.push([o,c,n,g]),v=o}}const i=Math.max(...h.map(a=>a[1]))-1,l=W(),k=w(0),{$clicksContext:m,$nav:I}=P();R(()=>{const a=m.calculateSince(y,i);if(!a){k.value=Y;return}m.register(l,a),V(()=>{k.value=a.currentOffset.value+1})}),z(()=>{m.unregister(l)});function F(){x.value=!0,O()}const $=r&&{...q(r,I.value.navDirection<0),tag:f,onAfterLeave:F};return()=>{const a=[];for(let n=h.length-1;n>=0;n--){const[g,o,c,T]=h[n],S=g<=k.value&&k.value<o;p&&!S||a.push(A(B,{key:n,ref:T,class:[X,k.value===g&&H,k.value>=o&&J,!S&&Q].filter(Boolean),"data-slidev-clicks-start":g,"data-slidev-clicks-end":o},c==null?void 0:c()))}return $?A(K,x.value?{}:$,()=>a):A(f,a)}}}),es="/storybook-paris-3/dist/assets/btn-red-DtaK9dBT.png",ls="/storybook-paris-3/dist/assets/btn-default-T5rdWzP2.png",ns={class:"col-header"},rs=N({__name:"two-cols-header",props:{class:{type:String},layoutClass:{type:String}},setup(y){const p=y;return(r,f)=>(L(),U("div",{class:b(["slidev-layout two-cols-header w-full h-full",y.layoutClass])},[s("div",ns,[D(r.$slots,"default",{},void 0,!0)]),s("div",{class:b(["col-left",p.class])},[D(r.$slots,"left",{},void 0,!0)],2),s("div",{class:b(["col-right",p.class])},[D(r.$slots,"right",{},void 0,!0)],2),s("div",{class:b(["col-bottom",p.class])},[D(r.$slots,"bottom",{},void 0,!0)],2)],2))}}),ks=Z(rs,[["__scopeId","data-v-6fd83e76"]]),ys={__name:"slides.md__slidev_7",setup(y){const{$slidev:p,$nav:r,$clicksContext:f,$clicks:B,$page:C,$renderContext:E,$frontmatter:h}=P();return f.setup(),(v,i)=>{const l=is,k=as;return L(),j(ks,M(G(_(ss)(_(h),6))),{left:e(m=>[i[1]||(i[1]=s("h2",null,"Framework Code",-1)),i[2]||(i[2]=s("p",null,[s("strong",null,"Not a real change"),t(" but let’s say we need to add and use a "),s("code",null,"change-opacity"),t(" function for whatever reason.")],-1)),d(l,u({},{ranges:[]}),{default:e(()=>i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-diff"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ @function change-opacity($color, $opacity: 1) {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+  @return rgba($color, $opacity);")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ }")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"$primary: blue;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"- $btn-bg-primary: $primary;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#85E89D","--shiki-light":"#22863A"}},"+ $btn-bg-primary: change-opacity($primary);")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},".btn-primary {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"  background-color: $btn-bg-primary;")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"}")])])],-1)])),_:1},16)]),right:e(m=>[d(k,null,{1:e(()=>[i[4]||(i[4]=s("h2",null,"User Code",-1)),i[5]||(i[5]=s("p",null,"Basic user with the CDN version of Bootstrap.",-1)),d(l,u({},{ranges:[]}),{default:e(()=>i[3]||(i[3]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-html"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"btn-primary"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Primary button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1)])),_:1},16),i[6]||(i[6]=s("img",{src:ts,class:"w-50 mt-5 rounded-[5px]"},null,-1))]),2:e(()=>[i[9]||(i[9]=s("h2",null,"User Code",-1)),i[10]||(i[10]=s("p",null,"Basic Sass user customizing a color to red.",-1)),d(l,u({},{ranges:[]}),{default:e(()=>i[7]||(i[7]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-scss"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Overriding the semantic token")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"$primary"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," red"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")])])],-1)])),_:1},16),d(l,u({},{ranges:[]}),{default:e(()=>i[8]||(i[8]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-html"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"btn-primary"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Primary button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1)])),_:1},16),i[11]||(i[11]=s("img",{src:es,class:"w-50 mt-5 rounded-[5px]"},null,-1))]),3:e(()=>[i[14]||(i[14]=s("h2",null,"User Code",-1)),i[15]||(i[15]=s("p",null,"Advanced Sass user customizing a color to red with custom properties.",-1)),d(l,u({},{ranges:[]}),{default:e(()=>i[12]||(i[12]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-scss"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Defining a custom property for the primary color")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"root"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  --ds-primary"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#C99076","--shiki-light":"#A65E2B"}}," red"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"}")]),t(`
`),s("span",{class:"line"}),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// Overriding the semantic token")]),t(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"$primary"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},":"),s("span",{style:{"--shiki-dark":"#B8A965","--shiki-light":"#998418"}}," var"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"--ds-primary"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},");")])])],-1)])),_:1},16),d(l,u({},{ranges:[]}),{default:e(()=>i[13]||(i[13]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-html"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," class"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"btn-primary"),s("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">"),s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Primary button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"</"),s("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"button"),s("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1)])),_:1},16),i[16]||(i[16]=s("div",{class:"grid grid-cols-2 justify-between items-center mt-5"},[s("img",{src:ls,class:"w-50 rounded-[5px]"}),s("span",{class:"text-rose text-4xl font-bold font-hand"},"Breaking!")],-1))]),_:1})]),default:e(()=>[i[17]||(i[17]=s("h1",null,[s("span",{class:"text-yellow font-hand text-5xl"},"New release")],-1))]),_:1},16)}}};export{ys as default};
