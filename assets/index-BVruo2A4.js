import{c as i,j as e,A as f,T as y,a as b,b as L,C as N,d as T,e as A,f as R,g as v,h as g,i as c,k as C,l as O,m as w,n as I,o as M,R as m,H as P,p as B,q as u,r as _}from"./vendor-DQYSlkGn.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();const E={root:"/",list:"/list"},h={...E},S=i({name:"vtxs8z",styles:"margin:1rem"}),z="/assets/logo-e_RUCctv.png",D=i({name:"ho1qnd",styles:"display:flex;flex-direction:row"}),U=i({name:"a88p1",styles:"width:3rem"}),q=()=>e.jsx(f,{position:"static",children:e.jsx(y,{variant:"dense",className:D,children:e.jsx("img",{className:U,src:z})})}),F=s=>{const{children:t}=s;return e.jsxs(e.Fragment,{children:[e.jsx(q,{}),e.jsx("main",{children:t({className:S})})]})};var H={BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const $={ORGANIZATION:H.PUBLIC_ORGANIZATION},G=async s=>{const{data:t}=await b.get(`https://api.github.com/orgs/${s}/members`);return t},V=(s,t)=>Array.isArray(s)?s.map(t):[],Z=s=>({id:s.id,name:s.login,imageUrl:s.avatar_url}),K=s=>V(s,Z),J=L({palette:{primary:{main:"#006A7B"}}}),p=J,Q=s=>{const{children:t}=s;return e.jsx(N,{value:T,children:e.jsxs(A,{theme:p,children:[e.jsx(R,{}),t]})})},d=i("padding:0.5rem;background-color:",p.palette.primary.main,";color:",p.palette.primary.contrastText,";",""),W=s=>e.jsx(v,{children:e.jsxs(g,{children:[e.jsx(c,{className:d,children:"ID"}),e.jsx(c,{className:d,children:"Name"}),e.jsx(c,{className:d,children:"Avatar"})]})}),X=i({name:"67t0gq",styles:"width:5rem"}),Y=s=>{const{member:t}=s;return e.jsxs(g,{children:[e.jsx(c,{children:t.id}),e.jsx(c,{children:t.name}),e.jsx(c,{children:e.jsx("img",{className:X,src:t.imageUrl})})]})},k=s=>{const{memberList:t,className:a}=s;return e.jsx(C,{className:a,children:e.jsxs(O,{children:[e.jsx(W,{}),e.jsx(w,{children:t.map(o=>e.jsx(Y,{member:o},o.id))})]})})},ee=i({name:"1d3xsmy",styles:"display:grid;grid-template-columns:1fr;grid-template-areas:'title' 'memberList';grid-column-gap:1rem;grid-row-gap:1rem"}),se=i({name:"16824ea",styles:"grid-area:title;justify-self:center;text-transform:capitalize"}),te=i({name:"16pc8yg",styles:"grid-area:memberList"}),re=s=>{const{organization:t,memberList:a,className:o}=s;return e.jsxs("div",{className:I(ee,o),children:[e.jsxs(M,{className:se,variant:"h2",children:["Organization: ",t]}),e.jsx(k,{className:te,memberList:a})]})},ne=s=>{const{className:t}=s,[a]=m.useState($.ORGANIZATION),[o,r]=m.useState([]),n=async()=>{const l=await G(a),j=K(l);r(j)};return m.useEffect(()=>{n()},[a]),e.jsx(re,{className:t,organization:a,memberList:o})},x=()=>e.jsx(F,{children:({className:s})=>e.jsx(ne,{className:s})}),ae=()=>e.jsx(P,{children:e.jsxs(B,{children:[e.jsx(u,{path:h.root,element:e.jsx(x,{})}),e.jsx(u,{path:h.list,element:e.jsx(x,{})})]})}),oe=()=>e.jsx(Q,{children:e.jsx(ae,{})});_.render(e.jsx(oe,{}),document.getElementById("root"));