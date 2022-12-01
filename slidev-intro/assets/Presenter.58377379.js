import{o as _,f as k,g as e,v as y,w as P,x as h,d as B,i as z,a as H,y as $,z as v,s as N,h as t,A as R,B as A,c as b,b as I,C as L,D,E as U,G as j,H as E,p as u,t as F,n as x,j as C,I as V,_ as T,q as W,J as Z,K as q,l as O,L as G,M as w,N as J,O as K,F as Q,P as X,Q as Y,R as M,S as ee,T as te,U as se,V as oe,W as ne,X as ae,Y as le,Z as ce,$ as ie,a0 as re}from"./index.07cf733b.js";import{_ as ue}from"./NoteViewer.vue_vue_type_script_setup_true_lang.9008ddfd.js";import{_ as _e}from"./DrawingControls.vue_vue_type_script_setup_true_lang.e832e1d8.js";const de={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(n,l){return _(),k("svg",de,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(n,l){return _(),k("svg",fe,we)}const $e={name:"carbon-time",render:ye},ke=""+new URL("logo-title-horizontal.96c3c915.png",import.meta.url).href;function Se(){const n=y(Date.now()),l=P({interval:1e3}),d=h(()=>{const s=(l.value-n.value)/1e3,a=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${a}`});function m(){n.value=l.value}return{timer:d,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:null},setup(n){const l=n;z(H);const d=h(()=>{var s,a,o;return(o=(a=(s=$.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.note}),m=h(()=>{var s,a,o;return(o=(a=(s=$.value)==null?void 0:s.meta)==null?void 0:a.slide)==null?void 0:o.notesHTML});return(s,a)=>(_(),v(ue,{class:N(l.class),note:t(d),"note-html":t(m)},null,8,["class","note","note-html"]))}}),f=n=>(X("data-v-a70c4689"),n=n(),Y(),n),Ce={class:"bg-main h-full slidev-presenter"},Ve={class:"grid-container"},Te={class:"grid-section top flex"},Me=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Be=f(()=>e("div",{class:"flex-auto"},null,-1)),ze={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},He=f(()=>e("div",{class:"context"}," current ",-1)),Ne=f(()=>e("div",{class:"context"}," next ",-1)),Pe={class:"grid-section note overflow-auto"},Re={class:"grid-section bottom"},Ae={class:"progress-bar"},Ie=B({__name:"Presenter",setup(n){z(H);const l=y();R(),A(l);const d=b.titleTemplate.replace("%s",b.title||"Slidev");I({title:`Presenter - ${d}`});const{timer:m,resetTimer:s}=Se(),a=y([]),o=h(()=>M.value<ee.value?{route:$.value,clicks:M.value+1}:te.value?{route:se.value,clicks:0}:null);return L(()=>{const S=l.value.querySelector("#slide-content"),i=D(U()),g=j();E(()=>{if(!g.value||ne.value||!ae.value)return;const r=S.getBoundingClientRect(),c=(i.x-r.left)/r.width*100,p=(i.y-r.top)/r.height*100;if(!(c<0||c>100||p<0||p>100))return{x:c,y:p}},r=>{oe.cursor=r})}),(S,i)=>{const g=$e,r=he;return _(),k(Q,null,[e("div",Ce,[e("div",Ve,[e("div",Te,[Me,Be,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:i[0]||(i[0]=(...c)=>t(s)&&t(s)(...c))},[u(g,{class:"absolute"}),u(r,{class:"absolute opacity-0"})]),e("div",ze,F(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(C))},[u(T,{key:"main",class:"h-full w-full"},{default:V(()=>[u(le,{context:"presenter"})]),_:1}),He],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(C))},[t(o)?(_(),v(T,{key:"next",class:"h-full w-full"},{default:V(()=>{var c;return[u(t(ie),{is:(c=t(o).route)==null?void 0:c.component,"clicks-elements":a.value,"onUpdate:clicks-elements":i[1]||(i[1]=p=>a.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:N(t(ce)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):W("v-if",!0),Ne],4),e("div",Pe,[(_(),v(be,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",Re,[u(Z,{persist:!0})]),(_(),v(_e,{key:0}))]),e("div",Ae,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(q)-1)/(t(O)-1)*100}%`})},null,4)])]),u(G),u(K,{modelValue:t(w),"onUpdate:modelValue":i[2]||(i[2]=c=>J(w)?w.value=c:null)},null,8,["modelValue"])],64)}}});const je=re(Ie,[["__scopeId","data-v-a70c4689"]]);export{je as default};
