import{P as Dt,S as st,aC as Nt,t as U,y as rt,J as kt,aD as It,n as Ct,D as At,d as Ft,o as Tt,b as Kt,g as $t}from"../modules/vue-C3U069DO.js";import{a as Ot,y as ct,aA as nt,aB as dt,aC as Rt,T as Ut,_ as zt}from"../index-DCQqeErs.js";var jt=Object.defineProperty,ft=Object.getOwnPropertySymbols,Vt=Object.prototype.hasOwnProperty,Ht=Object.prototype.propertyIsEnumerable,pt=(t,e,s)=>e in t?jt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,it=(t,e)=>{for(var s in e||(e={}))Vt.call(e,s)&&pt(t,s,e[s]);if(ft)for(var s of ft(e))Ht.call(e,s)&&pt(t,s,e[s]);return t},qt=()=>({emit(t,...e){for(let s=0,r=this.events[t]||[],i=r.length;s<i;s++)r[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(i=>e!==i)}}});function gt(t,e,s,r=i=>i){return t*r(.5-e*(.5-s))}function Bt(t){return[-t[0],-t[1]]}function M(t,e){return[t[0]+e[0],t[1]+e[1]]}function S(t,e){return[t[0]-e[0],t[1]-e[1]]}function E(t,e){return[t[0]*e,t[1]*e]}function Gt(t,e){return[t[0]/e,t[1]/e]}function z(t){return[t[1],-t[0]]}function mt(t,e){return t[0]*e[0]+t[1]*e[1]}function Xt(t,e){return t[0]===e[0]&&t[1]===e[1]}function Yt(t){return Math.hypot(t[0],t[1])}function Zt(t){return t[0]*t[0]+t[1]*t[1]}function vt(t,e){return Zt(S(t,e))}function wt(t){return Gt(t,Yt(t))}function Jt(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function j(t,e,s){let r=Math.sin(s),i=Math.cos(s),n=t[0]-e[0],a=t[1]-e[1],o=n*i-a*r,l=n*r+a*i;return[o+e[0],l+e[1]]}function ot(t,e,s){return M(t,E(S(e,t),s))}function yt(t,e,s){return M(t,E(e,s))}var{min:K,PI:Qt}=Math,_t=.275,V=Qt+1e-4;function Wt(t,e={}){let{size:s=16,smoothing:r=.5,thinning:i=.5,simulatePressure:n=!0,easing:a=u=>u,start:o={},end:l={},last:g=!1}=e,{cap:v=!0,easing:y=u=>u*(2-u)}=o,{cap:P=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=o.taper===!1?0:o.taper===!0?Math.max(s,d):o.taper,b=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,T=Math.pow(s*r,2),D=[],h=[],_=t.slice(0,10).reduce((u,w)=>{let p=w.pressure;if(n){let m=K(1,w.distance/s),W=K(1,1-m);p=K(1,u+(W-u)*(m*_t))}return(u+p)/2},t[0].pressure),x=gt(s,i,t[t.length-1].pressure,a),Y,Z=t[0].vector,O=t[0].point,H=O,C=O,A=H,J=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:p,vector:m,distance:W,runningLength:R}=t[u];if(u<t.length-1&&d-R<3)continue;if(i){if(n){let I=K(1,W/s),et=K(1,1-I);w=K(1,_+(et-_)*(I*_t))}x=gt(s,i,w,a)}else x=s/2;Y===void 0&&(Y=x);let Et=R<c?y(R/c):1,Mt=d-R<b?f((d-R)/b):1;x=Math.max(.01,x*Math.min(Et,Mt));let ht=(u<t.length-1?t[u+1]:t[u]).vector,tt=u<t.length-1?mt(m,ht):1,Lt=mt(m,Z)<0&&!J,lt=tt!==null&&tt<0;if(Lt||lt){let I=E(z(Z),x);for(let et=1/13,B=0;B<=1;B+=et)C=j(S(p,I),p,V*B),D.push(C),A=j(M(p,I),p,V*-B),h.push(A);O=C,H=A,lt&&(J=!0);continue}if(J=!1,u===t.length-1){let I=E(z(m),x);D.push(S(p,I)),h.push(M(p,I));continue}let ut=E(z(ot(ht,m,tt)),x);C=S(p,ut),(u<=1||vt(O,C)>T)&&(D.push(C),O=C),A=M(p,ut),(u<=1||vt(H,A)>T)&&(h.push(A),H=A),_=w,Z=m}let N=t[0].point.slice(0,2),k=t.length>1?t[t.length-1].point.slice(0,2):M(t[0].point,[1,1]),Q=[],q=[];if(t.length===1){if(!(c||b)||g){let u=yt(N,wt(z(S(N,k))),-(Y||x)),w=[];for(let p=1/13,m=p;m<=1;m+=p)w.push(j(u,N,V*2*m));return w}}else{if(!(c||b&&t.length===1))if(v)for(let w=1/13,p=w;p<=1;p+=w){let m=j(h[0],N,V*p);Q.push(m)}else{let w=S(D[0],h[0]),p=E(w,.5),m=E(w,.51);Q.push(S(N,p),S(N,m),M(N,m),M(N,p))}let u=z(Bt(t[t.length-1].vector));if(b||c&&t.length===1)q.push(k);else if(P){let w=yt(k,u,x);for(let p=1/29,m=p;m<1;m+=p)q.push(j(w,k,V*3*m))}else q.push(M(k,E(u,x)),M(k,E(u,x*.99)),S(k,E(u,x*.99)),S(k,E(u,x)))}return D.concat(q,h.reverse(),Q)}function te(t,e={}){var s;let{streamline:r=.5,size:i=16,last:n=!1}=e;if(t.length===0)return[];let a=.15+(1-r)*.85,o=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(o.length===2){let f=o[1];o=o.slice(0,-1);for(let d=1;d<5;d++)o.push(ot(o[0],f,d/4))}o.length===1&&(o=[...o,[...M(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],g=!1,v=0,y=l[0],P=o.length-1;for(let f=1;f<o.length;f++){let d=n&&f===P?o[f].slice(0,2):ot(y.point,o[f],a);if(Xt(y.point,d))continue;let c=Jt(d,y.point);if(v+=c,f<P&&!g){if(v<i)continue;g=!0}y={point:d,pressure:o[f][2]>=0?o[f][2]:.5,vector:wt(S(y.point,d)),distance:c,runningLength:v},l.push(y)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function ee(t,e={}){return Wt(te(t,e),e)}function G(t,e){return t-e}function se(t){return t<0?-1:1}function X(t){return[Math.abs(t),se(t)]}function Pt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var re=2,L=re,$=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,r;const i=this.drauu.el,n=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*n,y:(t.pageY-o.top+a.y)*n,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((r=i.getScreenCTM())==null?void 0:r.inverse());return{x:l.x*n,y:l.y*n,pressure:t.pressure}}}createElement(t,e){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?it(it({},this.brush),e):this.brush;return r.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),r.setAttribute("stroke",i.color),r.setAttribute("stroke-width",i.size.toString()),r.setAttribute("stroke-linecap","round"),i.dasharray&&r.setAttribute("stroke-dasharray",i.dasharray),r}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(L))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},ne=class St extends ${constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return St.getSvgData(e,this.brush)}static getSvgData(e,s){const r=ee(e,it({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!r.length)return"";const i=r.reduce((n,[a,o],l,g)=>{const[v,y]=g[(l+1)%g.length];return n.push(a,o,(a+v)/2,(o+y)/2),n},["M",...r[0],"Q"]);return i.push("Z"),i.map(n=>typeof n=="number"?n.toFixed(2):n).join(" ")}},ie=class extends ${onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=X(t.x-this.start.x),[r,i]=X(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",r);else{const[n,a]=[this.start.x,this.start.x+e*s].sort(G),[o,l]=[this.start.y,this.start.y+r*i].sort(G);this.attr("cx",(n+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-n)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function bt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),r.setAttribute("id",t),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(i),s.appendChild(r),s}var oe=class extends ${onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Pt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(bt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const r=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let n=r/i;n=Math.round(n),Math.abs(n)<=1?(e=this.start.x+i*n,s=this.start.y+i):(e=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},ae=class extends ${onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=X(t.x-this.start.x),[r,i]=X(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-r),this.attr("width",e*2),this.attr("height",r*2);else{const[n,a]=[this.start.x,this.start.x+e*s].sort(G),[o,l]=[this.start.y,this.start.y+r*i].sort(G);this.attr("x",n),this.attr("y",o),this.attr("width",a-n),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function he(t,e){const s=t.x-e.x,r=t.y-e.y;return s*s+r*r}function le(t,e,s){let r=e.x,i=e.y,n=s.x-r,a=s.y-i;if(n!==0||a!==0){const o=((t.x-r)*n+(t.y-i)*a)/(n*n+a*a);o>1?(r=s.x,i=s.y):o>0&&(r+=n*o,i+=a*o)}return n=t.x-r,a=t.y-i,n*n+a*a}function ue(t,e){let s=t[0];const r=[s];let i;for(let n=1,a=t.length;n<a;n++)i=t[n],he(i,s)>e&&(r.push(i),s=i);return s!==i&&i&&r.push(i),r}function at(t,e,s,r,i){let n=r,a=0;for(let o=e+1;o<s;o++){const l=le(t[o],t[e],t[s]);l>n&&(a=o,n=l)}n>r&&(a-e>1&&at(t,e,a,r,i),i.push(t[a]),s-a>1&&at(t,a,s,r,i))}function ce(t,e){const s=t.length-1,r=[t[0]];return at(t,0,s,e,r),r.push(t[s]),r}function xt(t,e,s=!1){if(t.length<=2)return t;const r=e*e;return t=s?t:ue(t,r),t=ce(t,r),t}var de=class F extends ${constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Pt();const s=bt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=xt(this.points,1,!0),this.count=0),this.attr("d",F.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",F.toSvgData(xt(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const r=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(r**2+i**2),angle:Math.atan2(i,r)}}static controlPoint(e,s,r,i){const n=s||e,a=r||e,o=.2,l=F.line(n,a),g=l.angle+(i?Math.PI:0),v=l.length*o,y=e.x+Math.cos(g)*v,P=e.y+Math.sin(g)*v;return{x:y,y:P}}static bezierCommand(e,s,r){const i=F.controlPoint(r[s-1],r[s-2],e),n=F.controlPoint(e,r[s-1],r[s+1],!0);return`C ${i.x.toFixed(L)},${i.y.toFixed(L)} ${n.x.toFixed(L)},${n.y.toFixed(L)} ${e.x.toFixed(L)},${e.y.toFixed(L)}`}static toSvgData(e){return e.reduce((s,r,i,n)=>i===0?`M ${r.x.toFixed(L)},${r.y.toFixed(L)}`:`${s} ${F.bezierCommand(r,i,n)}`,"")}},fe=class extends ${constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,r)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const n=s[i];if(n.getTotalLength){const a=n.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=n.getPointAtLength(a*o/this.pathSubFactor),g=n.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:g.x,y1:l.y,y2:g.y,segment:o,element:r||n})}}else n.children&&e(n.children,n)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,r=t.x2,i=e.x1,n=e.x2,a=t.y1,o=t.y2,l=e.y1,g=e.y2,v=(s-r)*(l-g)-(a-o)*(i-n),y=(s*o-a*r)*(i-n)-(s-r)*(i*g-l*n),P=(s*o-a*r)*(l-g)-(a-o)*(i*g-l*n),f=(d,c,b)=>d>=c&&d<=b?!0:d>=b&&d<=c;if(v===0)return!1;{const d={x:y/v,y:P/v};return f(d.x,s,r)&&f(d.y,a,o)&&f(d.x,i,n)&&f(d.y,l,g)}}};function pe(t){return{draw:new de(t),stylus:new ne(t),line:new oe(t),rectangle:new ae(t),ellipse:new ie(t),eraseLine:new fe(t)}}var ge=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=qt(),this._originalPointerId=null,this._models=pe(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const r=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),n=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);r.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",n,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{r.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",n),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const r=this._elements[s];if(r){r.after(t);return}}this.el.prepend(t)}};function me(t){return new ge(t)}const ve=Dt(()=>{const{currentSlideNo:t,isPresenter:e}=Ot(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],r=st("slidev-drawing-enabled",!1),i=st("slidev-drawing-pinned",!1),n=Nt(st("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=U(!1),o=U(!1),l=U(!1),g=U(!1),v=U("stylus"),y=rt(()=>ct.drawings.syncAll||e.value);let P=!1;const f=rt({get(){return v.value},set(h){v.value=h,h==="arrow"?(c.mode="line",n.arrowEnd=!0):(c.mode=h,n.arrowEnd=!1)}}),d=kt({brush:n,acceptsInputTypes:rt(()=>r.value&&(!ct.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=It(me(d));function b(){c.clear(),y.value&&dt(t.value,"")}function T(){var h;l.value=c.canRedo(),o.value=c.canUndo(),g.value=!!((h=c.el)!=null&&h.children.length)}function D(h){P=!0;const _=nt[h||t.value];_!=null?c.load(_):c.clear(),T(),P=!1}return c.on("changed",()=>{if(T(),!P){const h=c.dump(),_=t.value;(nt[_]||"")!==h&&y.value&&dt(_,c.dump())}}),Rt(h=>{P=!0,h[t.value]!=null&&c.load(h[t.value]||""),P=!1,T()}),Ct(()=>{At(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>a.value=!0),c.on("end",()=>a.value=!1),window.addEventListener("keydown",h=>{if(!r.value||Ut.value)return;const _=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let x=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?r.value=!1:h.code==="KeyL"&&_?f.value="line":h.code==="KeyA"&&_?f.value="arrow":h.code==="KeyS"&&_?f.value="stylus":h.code==="KeyR"&&_?f.value="rectangle":h.code==="KeyE"&&_?f.value="ellipse":h.code==="KeyC"&&_?b():h.code.startsWith("Digit")&&_&&+h.code[5]<=s.length?n.color=s[+h.code[5]-1]:x=!1,x&&(h.preventDefault(),h.stopPropagation())},!1),{brush:n,brushColors:s,canClear:g,canRedo:l,canUndo:o,clear:b,drauu:c,drauuOptions:d,drawingEnabled:r,drawingMode:f,drawingPinned:i,drawingState:nt,isDrawing:a,loadCanvas:D}}),ye=Ft({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(t,{expose:e}){e();const{drawingState:s}=ve(),r={drawingState:s};return Object.defineProperty(r,"__isScriptSetup",{enumerable:!1,value:!0}),r}}),_e=["innerHTML"];function xe(t,e,s,r,i,n){return r.drawingState[s.page]?(Tt(),Kt("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:r.drawingState[s.page]},null,8,_e)):$t("v-if",!0)}const we=zt(ye,[["render",xe],["__file","/Users/ju/talks/ow2con24/node_modules/.pnpm/@slidev+client@0.49.9_postcss@8.4.38_vite@5.2.12/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),be=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));export{we as D,be as a,ve as u};