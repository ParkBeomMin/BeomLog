import{u as k}from"./asyncData.ef858076.js";import{h as $,V as S,K as L,o as a,c as r,F as m,D as b,a as l,s as h,t as c,W as D,X as M,l as B,I as F,M as N,b as V,w as I,e as K}from"./entry.17c5dcfe.js";const P={class:"flex mb-8 flex-wrap"},A=["onClick"],G=$({__name:"CategoryFilter",async setup(_){let i,g;const{data:x}=([i,g]=S(async()=>k("category",async()=>await M("/posts/").find())),i=await i,g(),i),y=x.value.flatMap(o=>{var t,n;return(n=(t=o.categories)==null?void 0:t.split)==null?void 0:n.call(t," ")}).filter(o=>o),p=[...new Set(y)],{postState:u,setCategory:e,getPostList:d}=L(),s=o=>u.value.categories.findIndex(t=>t===o)>-1;return(o,t)=>(a(),r("ul",P,[(a(),r(m,null,b(p,(n,f)=>l("li",{key:`category-${f}`,class:D(["mr-3 p-1 px-2 rounded-3xl transition duration-500 hover:scale-125 hover:bg-blue-400 hover:text-white",{"bg-blue-400 text-white":s(n)}])},[l("a",{href:"javascript:void(0)",onClick:C=>(h(e)({category:n}),h(d)())}," #"+c(n),9,A)],2)),64))]))}}),j={class:"font-bold md:text-3xl text-xl"},q={key:0},z={class:"my-8"},E={class:"font-bold md:text-xl"},W={class:"text-sm"},H=$({__name:"List",props:{title:{type:String,default:""},searchKeyword:{type:String,default:""},limit:{type:Number,default:0},isShowCnt:{type:Boolean,default:!0}},setup(_){const{title:i,searchKeyword:g,limit:x}=_,w=u=>{if(!u)return"";const e=new Date(u),d=e.getMonth()+1<10?`0${e.getMonth()+1}`:e.getMonth()+1,s=e.getDate()<10?`0${e.getDate()}`:e.getDate();return`${e.getFullYear()}-${d}-${s}`},{postState:y,getPostList:v}=L(),p=B(()=>y.value.postList);return F(async()=>{await v({limit:x})}),(u,e)=>{const d=K;return a(),r(m,null,[l("h2",j,c(_.title),1),_.isShowCnt?(a(),r("span",q,c(h(p).length)+" 개의 포스트가 있어요.",1)):N("",!0),l("ul",z,[(a(!0),r(m,null,b(h(p),(s,o)=>(a(),r("li",{key:o,class:"mb-4 pb-4 border-b-4 border-grey-900 transition duration-500 hover:text-blue-500 hover:translate-x-1"},[V(d,{to:s._path},{default:I(()=>{var t,n;return[(a(!0),r(m,null,b((n=(t=s.categories)==null?void 0:t.split)==null?void 0:n.call(t," "),(f,C)=>(a(),r("span",{class:"mr-2 text-gray-500 text-sm md:text-md",key:`post-category-${C}`},"#"+c(f),1))),128)),l("h3",E,c(s.title),1),l("p",null,c(s.description),1),l("span",W,c(w(s.date)),1)]}),_:2},1032,["to"])]))),128))])],64)}}});export{G as _,H as a};
