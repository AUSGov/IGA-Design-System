import{_ as r,R as _,U as d,r as h,o as n,c as s,b as e,m as i,t as o,F as k,q as u,w as m,s as g,d as a}from"./app.aae1f5f9.js";const f={props:{image:{type:String},title:{type:String},htmlLink:{type:String,default:null},linkUrl:{type:String},linkText:{type:String,default:"Link"},compact:{type:Boolean,default:!1},text:{type:String},external:{type:Boolean,default:!1}},data(){return{arrowRight:_,linkExternal:d}}},x={key:0,class:"card-img-top img-wrap"},y=["src","alt"],L=a(),T={class:"card-body"},w={class:"h4"},H=a(),M={key:0,class:"text"},R=a(),v=["href"],S=e("span",null,"Raw HTML",-1),B=a(),C=["innerHTML"],U=a(),b=["innerHTML"],p=a(),E=["href"],N=e("span",null,"Raw HTML",-1),V=a(),F=["innerHTML"];function q(z,D,t,j,l,A){const c=h("RouterLink");return n(),s("div",{class:g(["card c-card",{"c-card--compact":t.compact}])},[!t.compact&&t.image?(n(),s("div",x,[e("img",{src:t.image,alt:t.title},null,8,y)])):i("",!0),L,e("div",T,[e("p",w,o(t.title),1),H,t.text?(n(),s("div",M,o(t.text),1)):i("",!0),R,t.linkUrl?(n(),s(k,{key:1},[t.external?(n(),s("a",{key:0,href:t.linkUrl,target:"_blank",class:"link-icon link-external"},[S,B,e("span",{class:"icon",innerHTML:l.linkExternal},null,8,C)],8,v)):(n(),u(c,{key:1,to:t.linkUrl,class:"link-icon link-internal"},{default:m(()=>[e("span",null,o(t.linkText),1),U,e("span",{class:"icon",innerHTML:l.arrowRight},null,8,b)]),_:1},8,["to"]))],64)):i("",!0),p,t.htmlLink?(n(),s("a",{key:2,href:t.htmlLink,target:"_blank",class:"link-icon link-external"},[N,V,e("span",{class:"icon",innerHTML:l.linkExternal},null,8,F)],8,E)):i("",!0)])],2)}var I=r(f,[["render",q],["__file","Card.vue"]]);export{I as default};