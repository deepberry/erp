(function(){"use strict";var e={5106:function(e,t,n){var r=n(9963),o=n(6252);function a(e,t){const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}var i={name:"App"},s=n(8118);const c=(0,s.Z)(i,[["render",a]]);var p=c,u=n(2201);const d={class:"index"},l={class:"main"};function h(e,t){const n=(0,o.up)("IndexHeader"),r=(0,o.up)("IndexMenu"),a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)("div",d,[(0,o.Wm)(n),(0,o.Wm)(r),(0,o._)("div",l,[(0,o.Wm)(a)])])}var m=n(3577),f=n.p+"img/img-logo.1dc35e30.png";const g=e=>((0,o.dD)("data-v-64cec829"),e=e(),(0,o.Cn)(),e),b={class:"IndexHeader"},v=g((()=>(0,o._)("div",{class:"logo"},[(0,o._)("img",{src:f,alt:""})],-1))),w={class:"userInfo"},k={class:"un"};function _(e,t,n,r,a,i){return(0,o.wg)(),(0,o.iD)("div",b,[v,(0,o._)("div",w,[(0,o._)("p",k,[(0,o._)("a",null,(0,m.zw)(e.user.name)+" 你好，"+(0,m.zw)(e.user.organization.name),1)])])])}var y={name:"IndexHeader",data:function(){return{user:{organization:{},orgzs:[]}}},mounted(){let e=localStorage.getItem("erp_user");e?this.user=JSON.parse(e):this.ajax.post("/api/v1/adam/member/user-info").then((e=>{0==e.data.orgzs.length&&(e.data.orgzs=[{name:"苏州xxx化肥厂"}]),this.user=e.data,localStorage.setItem("erp_user",JSON.stringify(e.data))}))},methods:{logout(){sessionStorage.removeItem("erp_menu_current_index"),sessionStorage.removeItem("erp_menu_son_index"),localStorage.removeItem("erp_token"),localStorage.removeItem("erp_user"),this.$router.push("/login")}}};const S=(0,s.Z)(y,[["render",_],["__scopeId","data-v-64cec829"]]);var I=S;const x={class:"IndexMenu"},P=["onClick"],T={class:"itemTitleIcon"},M={class:"itemTitleContent"},O={class:"itemSons"},C=["onClick"];function E(e,t,n,a,i,s){const c=(0,o.up)("el-collapse-transition");return(0,o.wg)(),(0,o.iD)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.menu,((t,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"item",key:n},[(0,o._)("div",{class:"itemTitle",onClick:e=>s.itemTitleClick(n)},[(0,o._)("span",T,[(0,o._)("i",{class:(0,m.C_)(`erp ${t.icon}`)},null,2)]),(0,o._)("span",M,[(0,o._)("span",{class:(0,m.C_)(0==t.son.length&&e.activeMenuIndex==n?"active":"")},(0,m.zw)(t.title),3),t.son.length>0?((0,o.wg)(),(0,o.iD)("i",{key:0,class:(0,m.C_)(t.show?"erp erp31xiala activeIcon":"erp erp31xiala")},null,2)):(0,o.kq)("",!0)])],8,P),(0,o.Wm)(c,null,{default:(0,o.w5)((()=>[(0,o.wy)((0,o._)("div",O,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.son,((t,r)=>((0,o.wg)(),(0,o.iD)(o.HY,{key:r},[t.show?((0,o.wg)(),(0,o.iD)("p",{key:0,onClick:e=>s.itemSonClick(n,r),class:(0,m.C_)(e.activeMenuIndex==n&&e.activeMenuIndexSon==r?"active":"")},(0,m.zw)(t.title),11,C)):(0,o.kq)("",!0)],64)))),128))],512),[[r.F8,t.show]])])),_:2},1024)])))),128))])}var H=[{title:"ERP",icon:"erpxitongshezhi",show:!0,son:[{title:"作物种植",path:"/erp/plant",show:!1},{title:"任务管理",path:"/erp/task",show:!1},{title:"农资采购",path:"/erp/purchase",show:!1},{title:"农资库存",path:"/erp/stock",show:!1},{title:"申领工单",path:"/erp/workOrder",show:!1},{title:"数据统计",path:"/erp/statistics",show:!1},{title:"我的",path:"/erp/my",show:!0}]}],$={name:"IndexMenu",data:function(){return{menu:H,activeMenuIndex:0,activeMenuIndexSon:0}},mounted(){this.ajax.post("/api/v1/adam/adminMenu/getUserMenusList").then((e=>{this.$store.commit("setPower",e.data),this.$store.state.power.parkList&&(this.menu[0].son[0].show=!0),this.$store.state.power.taskList&&(this.menu[0].son[1].show=!0),this.$store.state.power.materialsPurchaseList&&(this.menu[0].son[2].show=!0),this.$store.state.power.materialsStockList&&(this.menu[0].son[3].show=!0),this.$store.state.power.workOrderList&&(this.menu[0].son[4].show=!0),this.$store.state.power.statistics&&(this.menu[0].son[5].show=!0),this.$store.state.power.accountRole&&(this.menu[1].son[1].show=!0),this.activeMenuIndex=sessionStorage.getItem("erp_menu_current_index")||0,this.menu[this.activeMenuIndex].show=!0,this.activeMenuIndexSon=sessionStorage.getItem("erp_menu_son_index")||0}))},methods:{itemTitleClick(e){let t=this.menu[e];t.son.length>0?this.menu[e].show=!this.menu[e].show:(this.activeMenuIndex=e,this.activeMenuIndexSon=0,this.$router.push(t.path),sessionStorage.setItem("erp_menu_current_index",e),sessionStorage.setItem("erp_menu_son_index",0))},itemSonClick(e,t){if(this.activeMenuIndex==e&&this.activeMenuIndexSon==t)return;this.activeMenuIndex=e,this.activeMenuIndexSon=t,sessionStorage.setItem("erp_menu_current_index",e),sessionStorage.setItem("erp_menu_son_index",t);let n=this.menu[e].son[t].path;this.$router.push(n)}}};const j=(0,s.Z)($,[["render",E],["__scopeId","data-v-42f5d1b7"]]);var N=j,D={name:"Index",components:{IndexHeader:I,IndexMenu:N},mounted(){"/"==this.$route.path&&this.$router.push("/erp/plant")}};const L=(0,s.Z)(D,[["render",h],["__scopeId","data-v-87fdf3e0"]]);var A=L,q=[{name:"erpPlant",path:"/erp/plant",component:()=>Promise.all([n.e(483),n.e(30)]).then(n.bind(n,7030)),children:[{name:"erpPlantDetail",path:"/erp/plant/detail",component:()=>n.e(64).then(n.bind(n,3064))}]},{name:"erpPlantHistory",path:"/erp/plant/history",component:()=>n.e(759).then(n.bind(n,2759))},{name:"erpPlantHistoryDetail",path:"/erp/plant/history/detail",component:()=>Promise.all([n.e(483),n.e(637),n.e(368)]).then(n.bind(n,3701))},{name:"erpPlantCropsDetail",path:"/erp/plant/crops/detail",component:()=>Promise.all([n.e(483),n.e(637),n.e(858)]).then(n.bind(n,1065))},{name:"erpTask",path:"/erp/task",component:()=>Promise.all([n.e(483),n.e(345)]).then(n.bind(n,9345))},{name:"erpPurchase",path:"/erp/purchase",component:()=>n.e(430).then(n.bind(n,9430)),children:[{name:"erpPurchaseOrder",path:"/erp/purchase/order",component:()=>n.e(166).then(n.bind(n,3166))},{name:"erpPurchaseShop",path:"/erp/purchase/shop",component:()=>n.e(115).then(n.bind(n,4115))}]},{name:"erpPurchaseShopDetail",path:"/erp/purchase/shop/detail",component:()=>n.e(177).then(n.bind(n,5177))},{name:"erpStock",path:"/erp/stock",component:()=>n.e(730).then(n.bind(n,7730)),children:[{name:"erpStockList",path:"/erp/stock/list",component:()=>Promise.all([n.e(483),n.e(498)]).then(n.bind(n,3498))}]},{name:"erpStockOut",path:"/erp/stock/out",component:()=>Promise.all([n.e(483),n.e(648)]).then(n.bind(n,1648))},{name:"erpStockPut",path:"/erp/stock/put",component:()=>Promise.all([n.e(483),n.e(407)]).then(n.bind(n,3407))},{name:"StockRecord",path:"/erp/stock/record",component:()=>n.e(550).then(n.bind(n,7550))},{name:"erpWorkOrder",path:"/erp/workOrder",component:()=>n.e(946).then(n.bind(n,5946))},{name:"erpStatistics",path:"/erp/statistics",component:()=>n.e(678).then(n.bind(n,4678)),children:[{name:"erpStatisticsProduct",path:"/erp/statistics/product",component:()=>n.e(778).then(n.bind(n,1778))},{name:"erpStatisticsStock",path:"/erp/statistics/stock",component:()=>n.e(284).then(n.bind(n,8284))},{name:"erpStatisticsWork",path:"/erp/statistics/work",component:()=>n.e(905).then(n.bind(n,4905))}]},{name:"erpMy",path:"/erp/my",component:()=>n.e(73).then(n.bind(n,3073)),children:[{name:"erpMyProduct",path:"/erp/my/product",component:()=>n.e(499).then(n.bind(n,8499))},{name:"erpMyWork",path:"/erp/my/work",component:()=>n.e(353).then(n.bind(n,9353))}]},{name:"erpMyStartGet",path:"/erp/my/get",component:()=>n.e(43).then(n.bind(n,8043))},{name:"erpMyGetRecord",path:"/erp/my/record",component:()=>n.e(594).then(n.bind(n,2594))},{name:"erpMyWorkTime",path:"/erp/my/workTime",component:()=>n.e(141).then(n.bind(n,8141))}];const R=[{name:"index",path:"/",component:A,children:[...q]},{name:"login",path:"/login",component:()=>n.e(986).then(n.bind(n,6986))}],z=(0,u.p7)({history:(0,u.PO)("/erp/"),routes:R});z.beforeEach(((e,t,n)=>{n()}));var W=z,Z=n(894);const F=(0,Z.MT)({state:{power:{loading:!0}},mutations:{setPower:(e,t)=>{let n={};t.map((e=>{n[e]=!0})),e.power=n}}});var K=F,B=n(1575),G=n(2784),X=n(3561),J=n(8642),U=(n(4415),n(7950));const Y=(0,r.ri)(p);Y.use(W),Y.use(K),Y.use((0,B.WB)()),Y.use(G.Z),Y.use(X.Z,{locale:J.Z}),Y.use(U.Z),Y.mount("#app")},2784:function(e,t){const n="https://erp.deepberry.cn",r={},o=(e,t,n)=>{e.onreadystatechange=()=>{if(200==e.status&&4==e.readyState){let n=JSON.parse(e.response);t(n)}},e.onerror=()=>{}};r.get=e=>new Promise(((t,r)=>{let a=new XMLHttpRequest;a.open("GET",`${n}${e}`,!0),a.setRequestHeader("token",localStorage.getItem("erp_token")||localStorage.getItem("TOKEN_TITAN")||"1"),a.send(),o(a,t,r)})),r.getUrl=e=>new Promise(((t,n)=>{let r=new XMLHttpRequest;r.open("GET",e,!0),r.setRequestHeader("token",localStorage.getItem("erp_token")||localStorage.getItem("TOKEN_TITAN")||"1"),r.send(),o(r,t,n)})),r.getUrlBearer=e=>new Promise(((t,n)=>{let r=new XMLHttpRequest;r.open("GET",e,!0),r.setRequestHeader("Authorization","Bearer "+(localStorage.getItem("erp_token")||localStorage.getItem("TOKEN_TITAN")||"1")),r.send(),o(r,t,n)})),r.post=(e,t)=>new Promise(((r,a)=>{let i=new XMLHttpRequest,s=JSON.stringify(t);i.open("POST",`${n}${e}`,!0),i.setRequestHeader("Content-Type","application/json"),i.setRequestHeader("token",localStorage.getItem("erp_token")||localStorage.getItem("TOKEN_TITAN")||"1"),i.send(s),o(i,r,a)})),r.upload=(e,t,r)=>new Promise(((a,i)=>{let s=new XMLHttpRequest,c=new FormData;Object.keys(t).map((e=>{c.append(e,t[e])})),s.upload.onprogress=e=>{r(parseFloat(e.loaded/e.total*100).toFixed(2))},s.open("POST",`${n}${e}`,!0),s.send(c),o(s,a,i)})),t["Z"]={ajax:r,install:e=>{e.config.globalProperties.ajax=r}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var p=o();void 0!==p&&(t=p)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{30:"034a6ab2",43:"bb1169cf",64:"0101985e",73:"28793cf9",115:"6e001743",141:"eb8fc2cc",166:"eaa57364",177:"46897b1a",284:"026320a7",345:"d6a3122f",353:"df52ed93",368:"ccb78855",407:"8ed3fa2b",430:"e48f2026",483:"af8175ca",498:"f6246090",499:"6254fde3",550:"f693ce43",594:"efc19bc2",637:"205830c7",648:"f699f312",678:"a96bf7b3",730:"8335b5d9",759:"35ba4a34",778:"df9e2459",858:"e73db1b2",905:"afe61fa8",946:"6b0f1b57",986:"15b8032d"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{30:"8d368ac5",43:"498b27f3",64:"df33f634",73:"1a7b0886",115:"36e0b2aa",141:"e2eb0c1f",166:"ba8cb329",177:"8ecded95",284:"bc84cb3b",345:"d4c4e041",353:"ab212465",368:"49e5a1da",407:"8addc68a",430:"24455b53",498:"98e604f0",499:"96031fb4",550:"262193ea",594:"108dea82",648:"64b5f869",678:"47f111af",730:"d3df2370",759:"cd757e78",778:"2853ca95",858:"15d443f9",905:"29fbdc71",946:"96a907f4",986:"91d07e89"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="titan2:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,c;if(void 0!==a)for(var p=document.getElementsByTagName("script"),u=0;u<p.length;u++){var d=p[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var l=function(t,n){s.onerror=s.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(l.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=l.bind(null,s.onerror),s.onload=l.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){n.p="/erp/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,o.parentNode.removeChild(o),r(c)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={30:1,43:1,64:1,73:1,115:1,141:1,166:1,177:1,284:1,345:1,353:1,368:1,407:1,430:1,498:1,499:1,550:1,594:1,648:1,678:1,730:1,759:1,778:1,858:1,905:1,946:1,986:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],c=r[2],p=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(c)var u=c(n)}for(t&&t(r);p<i.length;p++)a=i[p],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunktitan2"]=self["webpackChunktitan2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(5106)}));r=n.O(r)})();
//# sourceMappingURL=app.279a0625.js.map