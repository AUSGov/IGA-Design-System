import{_ as p,D as _,J as d,o as s,c as a,b as o,t as r,F as m,l as f,d as v}from"./app.22222ee8.js";const g={class:"form-group p-2"},b=v(),h=["value"],k={__name:"Select",props:{label:{},id:{},type:{},options:{}},emits:["input"],setup(c){const t=c,l=_(null);return d(()=>{l.value.dispatchEvent(new Event("change"))}),(u,n)=>(s(),a("div",g,[o("label",null,r(t.label),1),b,o("select",{ref_key:"input",ref:l,class:"form-select form-select-sm",onChange:n[0]||(n[0]=e=>u.$emit("input",{value:e.target.value}))},[(s(!0),a(m,null,f(t.options,(e,i)=>(s(),a("option",{key:t.id+"-"+i,value:e.value},r(e.label),9,h))),128))],544)]))}};var S=p(k,[["__file","Select.vue"]]);export{S as default};
