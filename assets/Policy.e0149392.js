import{_,a as r}from"./Footer.1cd22f24.js";import{r as d,d as u,a as p,m,f as o,t as g,u as a,q as t,A as l,F as f,l as h,Q as y,C as v}from"./index.8734b5f5.js";const M=["content"],x={class:"page"},T={class:"policy pt pb"},B={class:"policy__container"},H={class:"policy__title title"},b=["innerHTML"],N={__name:"Policy",setup(k){const e=d(""),i=v(),n=u(()=>i.getters.settings),c=()=>{axios.get("/policy").then(s=>{e.value=s.data})};return p(()=>{c()}),(s,C)=>(h(),m(f,null,[o(a(y),null,{default:g(()=>[t("title",null,l(e.value.title+" \u2014 "+a(n).site_name),1),t("meta",{name:"description",content:e.value.title+" \u2014 "+a(n).site_description},null,8,M)]),_:1}),o(_,{onToggleModal:s.toggleModal},null,8,["onToggleModal"]),t("main",x,[t("section",T,[t("div",B,[t("h1",H,l(e.value.title),1),t("div",{innerHTML:e.value.text,class:"policy__body"},null,8,b)])])]),o(r)],64))}};export{N as default};
