import{_ as f,X as g,o as s,c as o,b as e,F as h,l as v,m as d,Z as p,d as i,ah as C,a8 as w,t as _}from"./app.64bc8066.js";import{E as y,H as k}from"./hamburger-2.8adf8044.js";const T={props:{image:{type:String,required:!0},contents:{type:Array}},data(){return{ChevronDown:g,Expand:y,Hamburger:k,localContents:null,viewCode:!1}},created(){this.contents&&this.$watch("contents",()=>{this.localContents=this.contents.map(l=>(l.active=!1,l))},{immediate:!0})},methods:{scrollTo(l,a){const n=this.$refs[l+"-"+a];window.scrollTo(0,n[0].offsetTop-105),this.localContents[a].active=!0}}},H={class:"c-image-map"},D={class:"preview-container"},L=e("div",{class:"top-container"},null,-1),M=i(),x={class:"middle-container"},S={class:"image-container"},V={class:"image-wrap"},b=["src"],B=i(),E={key:0},N=["onClick"],F={href:"#"},I=i(),P={class:"bottom-container"},q=i("View Code "),z=["innerHTML"],A=i(),X={key:0,class:"code-container"},Z=i(),j={key:0,class:"description-wrap"},G=["onClick"],J={class:"circle-point"},K=i(),O={class:"h5"},Q=i(),R=["innerHTML"],U=i(),W={key:0,class:"text"};function Y(l,a,n,$,c,u){return s(),o("div",H,[e("div",D,[L,M,e("div",x,[e("div",S,[e("div",V,[e("img",{src:n.image,alt:""},null,8,b)]),B,n.contents?(s(),o("div",E,[(s(!0),o(h,null,v(c.localContents,(t,r)=>(s(),o(h,null,[t.x!==void 0&&t.y!==void 0?(s(),o("div",{key:0,class:"circle-point image-point",style:C({top:t.y+"%",left:t.x+"%"}),onClick:w(m=>u.scrollTo(n.image,r),["prevent"])},[e("a",F,_(r+1),1)],12,N)):d("",!0)],64))),256))])):d("",!0)])]),I,e("div",P,[e("div",{onClick:a[0]||(a[0]=t=>c.viewCode=!c.viewCode),class:"toggle"},[q,e("span",{innerHTML:c.ChevronDown,class:"icon"},null,8,z)])]),A,c.viewCode?(s(),o("div",X,[p(l.$slots,"code")])):d("",!0)]),Z,n.contents?(s(),o("div",j,[e("ul",null,[(s(!0),o(h,null,v(c.localContents,(t,r)=>(s(),o("li",{key:r,ref_for:!0,ref:n.image+"-"+r},[e("div",{class:"title",onClick:m=>t.active=!t.active},[e("div",J,[e("span",null,_(r+1),1)]),K,e("div",O,_(t.title),1),Q,e("div",{class:"toggle",innerHTML:c.ChevronDown},null,8,R)],8,G),U,t.active?(s(),o("div",W,_(t.text),1)):d("",!0)]))),128))])])):d("",!0)])}var se=f(T,[["render",Y],["__file","PreviewImage.vue"]]);export{se as default};
