import{_,D as f,j as l,X as v,V as m,a3 as k,o as r,q as h,w as b,b as s,s as y,h as i,a4 as L,E as x,c as D,m as C,d as a}from"./app.22222ee8.js";import g from"./Index.741b8ebe.js";import"./hamburger-2.8adf8044.js";import"./Radio.c86f7684.js";import"./Checkbox.6a511f87.js";import"./Select.00f15c84.js";import"./Highlighter.94bba7df.js";import"./prism-line-numbers.dc22a1e8.js";const w=a(`
`),T=a(`
  `),E=s("span",null,"Link Text",-1),V=a(`
  `),B=["innerHTML"],j=a(`
`),M=a(`

`),N={__name:"DemoLinks",setup(P){const c=[{label:"Variation",id:"variation",type:"select",options:[{label:"Primary",value:"link-icon"},{label:"Secondary",value:"link-icon link-secondary"}]},{label:"Link Type",id:"type",type:"radio",options:[{label:"Internal",value:"",checked:!0},{label:"External",value:"link-external"}]},{label:"Disabled",id:"disabledLink",type:"checkbox",options:[{label:"Disabled",value:"disabled"}]}],e=f({}),d=l(()=>{const n=[];return typeof e.value.variation!="undefined"&&n.push(e.value.variation),typeof e.value.type!="undefined"&&n.push(e.value.type),typeof e.value.disabledLink!="undefined"&&Object.keys(e.value.disabledLink).forEach(t=>{n.push(e.value.disabledLink[t])}),n.join(" ")}),o=l(()=>{switch(e.value.type){case"":return m;case"link-external":return v;default:return null}}),u=n=>{e.value=n};return(n,t)=>{const p=k("inline-svg");return r(),h(g,{formConfig:c,onFormDataChanged:u},{default:b(H=>[s("pre",null,[w,s("a",{href:"#",class:y(i(d)),onClick:t[0]||(t[0]=L(()=>{},["prevent"]))},[T,E,V,i(o)!==null?x((r(),D("svg",{key:0,innerHTML:i(o)},null,8,B)),[[p]]):C("",!0),j],2),M])]),_:1})}}};var X=_(N,[["__file","DemoLinks.vue"]]);export{X as default};
