import{$ as w,a as S,b as x}from"./chunk-KF6YT6QE.Bf6JpEAF.js";import{s as k,g as T,o as z,d as C,a as d,c as u,b as n,F as E,r as y,e as m,n as g,f,h as v,i as F,w as j,t as P}from"./runtime-core.esm-bundler.m0Q55idR.js";import"./chunk-Q2WNSHVA.Csvbm9VB.js";function _(a){let o=k(),t=a.subscribe(e=>{o.value=e});return T()&&z(t),o}const $=(a,o)=>{const t=a.__vccOpts||a;for(const[e,r]of o)t[e]=r;return t},B=C({__name:"code-switcher",setup(a,{expose:o}){o();const t=["user","session","organization"],e=f(t[0]),r=_(w),c=_(S),s=_(x),l=v(()=>JSON.stringify({user:r.value,session:c.value,organization:s.value}[e.value],null,2)),b=v(()=>s.value?t:t.filter(i=>i!=="organization")),p=f("");F(()=>{j(l,i=>{i&&(p.value=window.Prism.highlight(i,window.Prism.languages.javascript,"javascript"))},{immediate:!0})});const h={TYPES:t,selectedType:e,user:r,session:c,organization:s,selectedCode:l,typesToShow:b,renderedCode:p};return Object.defineProperty(h,"__isScriptSetup",{enumerable:!1,value:!0}),h}}),L={class:"w-full bg-[#F7F7F8] rounded-md p-[0.1875rem] flex gap-1.5"},M=["onClick"],N={class:"relative h-[calc(100%-42px)]"},O={class:"mask h-full"},D={class:"language-javascript"},H=["innerHTML"],V=n("div",{class:"absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent"},null,-1),J=n("div",{class:"absolute bottom-0 left-0 right-0 h-px bg-[#EEEEF0]"},null,-1);function R(a,o,t,e,r,c){return d(),u("div",{class:g(e.organization?"h-[54.625rem]":"h-[41.625rem]")},[n("div",L,[(d(!0),u(E,null,y(e.typesToShow,s=>(d(),u("button",{key:s,class:g(["capitalize rounded h-7 text-[0.8125rem] flex-1 hover:text-black font-medium",e.selectedType===s?"bg-white shadow-sm text-black":"text-[#5E5F6E]"]),onClick:l=>e.selectedType=s},P(s),11,M))),128))]),n("div",N,[n("div",O,[n("pre",D,[m("           "),n("code",{class:"language-javascript",innerHTML:e.renderedCode},null,8,H),m(`
         `)])]),V,J])],2)}const G=$(B,[["render",R]]);export{G as default};
