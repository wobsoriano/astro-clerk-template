import{r as m}from"./index.DhYZZe0J.js";import{$ as h,a as j,b as g}from"./chunk-KF6YT6QE.Bf6JpEAF.js";import"./chunk-Q2WNSHVA.Csvbm9VB.js";function p(s,t,i){let r=new Set([...t,void 0]);return s.listen((n,d,o)=>{r.has(o)&&i(n,d,o)})}var b={exports:{}},c={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=m,y=Symbol.for("react.element"),F=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,S=N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function f(s,t,i){var r,n={},d=null,o=null;i!==void 0&&(d=""+i),t.key!==void 0&&(d=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)E.call(t,r)&&!_.hasOwnProperty(r)&&(n[r]=t[r]);if(s&&s.defaultProps)for(r in t=s.defaultProps,t)n[r]===void 0&&(n[r]=t[r]);return{$$typeof:y,type:s,key:d,ref:o,props:n,_owner:S.current}}c.Fragment=F;c.jsx=f;c.jsxs=f;b.exports=c;var e=b.exports;function x(s,t={}){let i=m.useCallback(n=>t.keys?p(s,t.keys,n):s.listen(n),[t.keys,s]),r=s.get.bind(s);return m.useSyncExternalStore(i,r,r)}function a({desc:s,value:t,children:i}){return e.jsxs("div",{className:"h-[2.125rem] grid grid-cols-2 items-center relative",children:[e.jsx("span",{className:"text-xs font-semibold block flex-shrink-0",children:s}),e.jsxs("span",{className:"text-xs text-[#7D7D7E] font-mono block relative",children:[e.jsx("span",{className:"block truncate w-full",children:t}),i]})]})}function l({label:s}){return e.jsxs("div",{className:"absolute w-fit flex items-center gap-5 top-1/2 -translate-y-1/2 left-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-px bg-[#BFBFC4] w-[6.5rem]"}),e.jsx("div",{className:"size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2"})]}),e.jsx("div",{className:"font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white",children:s})]})}function u(s){return s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}function v(s){return s.toLocaleString("en-US",{month:"numeric",day:"numeric",year:"numeric",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:!0})}function B(){const s=x(h),t=x(j),i=x(g);return!s||!t?null:e.jsx("div",{className:"p-16 rounded-lg border border-[#EDEDED] bg-[#F1F1F2] background relative",children:e.jsxs("div",{className:"p-8 rounded-xl bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08),0_15px_35px_-5px_rgba(25,28,33,0.2)] ring-1 ring-gray-950/5 max-w-[25rem]",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2 mb-6",children:[e.jsxs("div",{className:"w-full relative flex justify-center",children:[e.jsx("img",{src:s.imageUrl,className:"size-20 rounded-full"}),e.jsxs("div",{className:"absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-px bg-[#BFBFC4] w-[6.5rem]"}),e.jsx("div",{className:"size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2"})]}),e.jsx("div",{className:"font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white",children:"user.imageUrl"})]})]}),s.firstName&&s.lastName?e.jsxs("h1",{className:"text-[1.0625rem] font-semibold relative w-full text-center",children:[s.firstName," ",s.lastName,e.jsxs("div",{className:"absolute w-fit flex items-center gap-5 top-1/2 -translate-x-2.5 -translate-y-1/2 left-full",children:[e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"h-px bg-[#BFBFC4] w-[6.5rem]"}),e.jsx("div",{className:"size-1 bg-[#BFBFC4] rotate-45 absolute right-0 top-1/2 -translate-y-1/2"})]}),e.jsx("div",{className:"font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white",children:"user.firstName"}),e.jsx("div",{className:"font-mono text-xs bg-black px-1.5 py-1 rounded-md text-white -translate-x-3",children:"user.lastName"})]})]}):e.jsx("div",{className:"h-4"})]}),e.jsxs("div",{className:"px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]",children:[e.jsx(a,{desc:"Email",value:s.emailAddresses[0].emailAddress,children:e.jsx(l,{label:"user.emailAddresses[0].emailAddress"})}),e.jsx(a,{desc:"Last signed in",value:u(s.lastSignInAt),children:e.jsx(l,{label:"user.lastSignInAt"})}),e.jsx(a,{desc:"Joined on",value:u(s.createdAt),children:e.jsx(l,{label:"user.createdAt"})}),e.jsx(a,{desc:"User ID",value:s.id,children:e.jsx(l,{label:"user.user.id"})})]}),e.jsx("h2",{className:"mt-6 mb-4 text-[0.9375rem] font-semibold",children:"Session details"}),e.jsxs("div",{className:"px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]",children:[e.jsx(a,{desc:"Session ID",value:t.id,children:e.jsx(l,{label:"session.id"})}),e.jsx(a,{desc:"Status",value:t.status,children:e.jsx(l,{label:"session.status"})}),e.jsx(a,{desc:"Last active",value:v(t.lastActiveAt),children:e.jsx(l,{label:"session.lastActiveAt"})}),e.jsx(a,{desc:"Session expiration",value:v(t.expireAt),children:e.jsx(l,{label:"session.expireAt"})})]}),i?e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"mt-6 mb-4 text-[0.9375rem] font-semibold",children:"Organization detail"}),e.jsxs("div",{className:"px-2.5 bg-[#FAFAFB] rounded-lg divide-y divide-[#EEEEF0]",children:[e.jsx(a,{desc:"Organization ID",value:i.id,children:e.jsx(l,{label:"organization.id"})}),e.jsx(a,{desc:"Name",value:i.name,children:e.jsx(l,{label:"organization.name"})}),e.jsx(a,{desc:"Members",value:String(i.membersCount),children:e.jsx(l,{label:"organization.membersCount"})}),e.jsx(a,{desc:"Pending invitations",value:String(i.pendingInvitationsCount),children:e.jsx(l,{label:"organization.pendingInvitationsCount"})})]})]}):null]})})}export{B as UserDetails};