"use strict";(self["webpackChunktitan2"]=self["webpackChunktitan2"]||[]).push([[73],{3073:function(t,e,a){a.r(e),a.d(e,{default:function(){return b}});var s=a(6252),i=a(3577);const r={class:"stock inner"},h={class:"box"},n={class:"head"},o={class:"head"},c=["onClick"];function d(t,e,a,d,u,l){const p=(0,s.up)("router-view");return(0,s.wg)(),(0,s.iD)("div",r,[(0,s._)("div",h,[(0,s._)("div",n,[(0,s._)("div",o,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(u.headTab,((t,e)=>((0,s.wg)(),(0,s.iD)("span",{onClick:t=>l.tabClick(e),class:(0,i.C_)(u.activeTabIndex==e?"active":""),key:t.title},(0,i.zw)(t.title),11,c)))),128))]),(0,s.Wm)(p)])])])}var u={name:"stock",data(){return{headTab:[],activeTabIndex:0}},mounted(){let t=setInterval((()=>{this.$store.state.power.loading||(this.$store.state.power.myMaterials&&this.headTab.push({title:"我的农资",path:"/erp/my/product"}),this.$store.state.power.myWorkHours&&this.headTab.push({title:"我的工时",path:"/erp/my/work"}),"erpMy"==this.$route.name&&this.$router.push(this.headTab[0].path),"erpMy"==this.$route.name||"erpMyProduct"==this.$route.name?this.activeTabIndex=0:this.activeTabIndex=1,this.headTab.length>0&&this.$router.push(this.headTab[0].path),clearInterval(t))}),200)},methods:{tabClick(t){this.activeTabIndex=t,this.$router.push(this.headTab[t].path)}}},l=a(8118);const p=(0,l.Z)(u,[["render",d],["__scopeId","data-v-9a0a5a6a"]]);var b=p}}]);
//# sourceMappingURL=73.28793cf9.js.map