import{o as _,f as k,g as e,v as y,w as P,x as h,d as B,i as z,a as H,y as $,z as v,s as N,h as s,A,B as I,c as b,b as R,C as D,D as L,E as j,G as E,H as F,p as u,t as U,n as x,j as C,I as V,_ as T,q as W,J as Z,K as q,l as O,L as G,M as w,N as J,O as K,F as Q,P as X,Q as Y,R as M,S as ee,T as se,U as te,V as oe,W as ne,X as ae,Y as le,Z as ce,$ as ie,a0 as re}from"./index.8cbb9549.js";import{_ as ue}from"./NoteViewer.vue_vue_type_script_setup_true_lang.08c4d5ad.js";import{_ as _e}from"./DrawingControls.vue_vue_type_script_setup_true_lang.8221e4df.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(n,l){return _(),k("svg",de,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(n,l){return _(),k("svg",fe,we)}const $e={name:"carbon-time",render:ye},ke="/slidev-intro/assets/logo-title-horizontal.96c3c915.png";function Se(){const n=y(Date.now()),l=P({interval:1e3}),d=h(()=>{const t=(l.value-n.value)/1e3,a=Math.floor(t%60).toString().padStart(2,"0");return`${Math.floor(t/60).toString().padStart(2,"0")}:${a}`});function m(){n.value=l.value}return{timer:d,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:null},setup(n){const l=n;z(H);const d=h(()=>{var t,a,o;return(o=(a=(t=$.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.note}),m=h(()=>{var t,a,o;return(o=(a=(t=$.value)==null?void 0:t.meta)==null?void 0:a.slide)==null?void 0:o.notesHTML});return(t,a)=>(_(),v(ue,{class:N(l.class),note:s(d),"note-html":s(m)},null,8,["class","note","note-html"]))}}),f=n=>(X("data-v-a70c4689"),n=n(),Y(),n),Ce={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ne=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Ae={class:"grid-section bottom"},Ie={class:"progress-bar"},Re=B({__name:"Presenter",setup(n){z(H);const l=y();A(),I(l);const d=b.titleTemplate.replace("%s",b.title||"Slidev");R({title:`Presenter - ${d}`});const{timer:m,resetTimer:t}=Se(),a=y([]),o=h(()=>M.value<ee.value?{route:$.value,clicks:M.value+1}:se.value?{route:te.value,clicks:0}:null);return D(()=>{const S=l.value.querySelector("#slide-content"),i=L(j()),g=E();F(()=>{if(!g.value||ne.value||!ae.value)return;const r=S.getBoundingClientRect(),c=(i.x-r.left)/r.width*100,p=(i.y-r.top)/r.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},r=>{oe.cursor=r})}),(S,i)=>{const g=$e,r=he;return _(),k(Q,null,[e("div",Ce,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...c)=>s(t)&&s(t)(...c))},[u(g,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",ze,U(s(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(s(C))},[u(T,{key:"main",class:"h-full w-full"},{default:V(()=>[u(le,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(s(C))},[s(o)?(_(),v(T,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[u(s(ie),{is:(c=s(o).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":i[1]||(i[1]=p=>a.value=p),clicks:s(o).clicks,"clicks-disabled":!1,class:N(s(ce)(s(o).route)),route:s(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):W("v-if",!0),Ne],4),e("div",Pe,[(_(),v(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Ae,[u(Z,{persist:!0})]),(_(),v(_e,{key:0}))]),e("div",Ie,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(s(q)-1)/(s(O)-1)*100}%`})},null,4)])]),u(G),u(K,{modelValue:s(w),"onUpdate:modelValue":i[2]||(i[2]=c=>J(w)?w.value=c:null)},null,8,["modelValue"])],64)}}});const Ee=re(Re,[["__scopeId","data-v-a70c4689"]]);export{Ee as default};
