import u from"./Index.0d2b71d5.js";import{_ as d,D as m,j as e,o as v,q as f,w as p,b as l,s as g,h as o,a as b,aa as _}from"./app.64bc8066.js";import"./hamburger-2.8adf8044.js";import"./Radio.b0afbf05.js";import"./Checkbox.41f7d20e.js";import"./Select.44e22992.js";import"./Highlighter.7b0936e0.js";import"./prism-line-numbers.dc22a1e8.js";const C={class:"row g-4"},h={__name:"DemoNavigationCard",setup(k){const i=[{label:"Variation",id:"variation",type:"select",options:[{label:"Stacked",value:""},{label:"Inline",value:"inline"}]},{label:"Background",id:"background",type:"radio",options:[{label:"Default",value:"",checked:!0},{label:"Office Chief",value:"bg-office-chief-economist text-white"},{label:"Industry Sci",value:"bg-industry-innovation-science text-white"},{label:"National",value:"bg-national-measurement-institute text-white"}]},{label:"Container",id:"container",type:"select",options:[{label:"2 small",value:"col-md-4 col-lg-4"},{label:"3 small",value:"col-md-4 col-lg-4"},{label:"2 medium",value:"col-md-6 col-lg-6"},{label:"1 large",value:"col-md-12 col-lg-12"}]}],a=m({}),n=e(()=>{if(typeof a.value.variation!="undefined")return a.value.variation}),r=e(()=>{if(typeof a.value.background!="undefined")return a.value.background}),s=e(()=>{if(typeof a.value.container!="undefined")return a.value.container}),c=t=>{a.value=t};return(t,y)=>(v(),f(u,{formConfig:i,onFormDataChanged:c},{default:p(D=>[l("div",C,[l("div",{class:g(o(s))},[b(_,{variant:o(n),classes:o(r)},null,8,["variant","classes"])],2)])]),_:1}))}};var j=d(h,[["__file","DemoNavigationCard.vue"]]);export{j as default};
