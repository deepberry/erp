"use strict";(self["webpackChunktitan2"]=self["webpackChunktitan2"]||[]).push([[30],{8830:function(e,t,i){i.d(t,{Z:function(){return z}});var a=i(6252);const s=e=>((0,a.dD)("data-v-5600a339"),e=e(),(0,a.Cn)(),e),l={class:"plantAdd"},o={class:"item"},d=s((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("种植种类：")],-1))),n={class:"item"},r=s((()=>(0,a._)("p",{class:"itemLabel"},"种植品种：",-1))),m={class:"item"},u=s((()=>(0,a._)("p",{class:"itemLabel"},"种植样图：",-1))),p={class:"upload"},h=["src"],g={key:2,class:"uploadBox"},c={key:1},w=s((()=>(0,a._)("i",{class:"erp erpshangchuan"},null,-1))),f=[w],y={key:2},k={class:"item"},v=s((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("棚区：")],-1))),_={class:"item"},b=s((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("移植方式：")],-1))),L={class:"userList"},D={class:"item"},C=s((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("移植时间：")],-1))),$={class:"item"},x=s((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("种植面积：")],-1))),I=(0,a.Uk)("亩"),T={class:"item"},A=s((()=>(0,a._)("p",{class:"itemLabel"},"关联设备：",-1))),B={class:"userList"},q={class:"btn"},V=s((()=>(0,a._)("p",null,null,-1))),U=(0,a.Uk)("保存");function M(e,t){const i=(0,a.up)("el-input"),s=(0,a.up)("el-progress"),w=(0,a.up)("el-option"),M=(0,a.up)("el-select"),j=(0,a.up)("el-date-picker"),G=(0,a.up)("el-button"),E=(0,a.up)("el-dialog"),P=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.j4)(E,{modelValue:e.showAddBox,"onUpdate:modelValue":t[9]||(t[9]=t=>e.showAddBox=t),title:e.isEdit?"编辑作物":"新增作物",width:"600px","before-close":e.onClose,"append-to-body":""},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",l,[(0,a._)("div",o,[d,(0,a.Wm)(i,{modelValue:e.form.categoryTitle,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.categoryTitle=t),placeholder:"如：蓝莓"},null,8,["modelValue"])]),(0,a._)("div",n,[r,(0,a.Wm)(i,{modelValue:e.form.varietyTitle,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.varietyTitle=t),placeholder:"品种名称"},null,8,["modelValue"])]),(0,a._)("div",m,[u,(0,a._)("div",p,[e.form.image?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.form.image,alt:""},null,8,h)):(0,a.kq)("",!0),e.form.image?((0,a.wg)(),(0,a.iD)("i",{key:1,class:"erp erpguanbi",onClick:t[2]||(t[2]=t=>e.form.image="")})):(0,a.kq)("",!0),e.form.image?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",g,[e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("input",{key:0,onChange:t[3]||(t[3]=(...t)=>e.uploadFile&&e.uploadFile(...t)),ref:"file",type:"file"},null,544)),e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",c,f)),e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",y,"点击上传图片")),e.form.uploading?((0,a.wg)(),(0,a.j4)(s,{key:3,width:90,type:"circle",percentage:e.form.percentage},null,8,["percentage"])):(0,a.kq)("",!0)]))])]),(0,a._)("div",k,[v,(0,a.Wm)(i,{modelValue:e.form.address,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.address=t),placeholder:"如：棚区、地块、村组"},null,8,["modelValue"])]),(0,a._)("div",_,[b,(0,a._)("div",L,[(0,a.Wm)(M,{style:{width:"475px"},modelValue:e.form.growthId,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.growthId=t),placeholder:"请选择移植方式"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.plantType,(e=>((0,a.wg)(),(0,a.j4)(w,{key:e.id,label:e.title,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])]),(0,a._)("div",D,[C,(0,a.Wm)(j,{style:{width:"565px"},modelValue:e.form.plantTime,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.plantTime=t),type:"date",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",placeholder:"请选择时间"},null,8,["modelValue"])]),(0,a._)("div",$,[x,(0,a.Wm)(i,{modelValue:e.form.area,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.area=t),placeholder:"请输入种植面积"},{append:(0,a.w5)((()=>[I])),_:1},8,["modelValue"])]),(0,a._)("div",T,[A,(0,a._)("div",B,[(0,a.Wm)(M,{style:{width:"475px"},modelValue:e.form.smartDeviceBoList,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.smartDeviceBoList=t),multiple:"",placeholder:"请选择关联设备"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.deviceList,(e=>((0,a.wg)(),(0,a.j4)(w,{key:e.id,label:e.name,value:e.id},null,8,["label","value"])))),128))])),_:1},8,["modelValue"])])])])),[[P,e.loading]]),(0,a._)("div",q,[V,(0,a.Wm)(G,{type:"primary",loading:e.submitting,onClick:e.submit},{default:(0,a.w5)((()=>[U])),_:1},8,["loading","onClick"])])])),_:1},8,["modelValue","title","before-close"])}var j=i(3483),G=i(8339),E=i(2335);const P="https://io.deepberry.cn";var N={name:"plantAdd",props:["isEdit","id"],emits:["onCloseAdd"],data(){return{loading:!1,showAddBox:!0,form:{uploading:!1,percentage:0,varietyTitle:"",growthId:"",smartDeviceBoList:[],plantTime:E.Z.time("y-m-d")},plantType:[],deviceList:[],submitting:!1}},mounted(){let e=this,t=async function(){e.loading=!0,await e.getData(),await e.getPlantType(),await e.getDevice(),e.loading=!1},i=async function(){e.loading=!0,await e.getPlantType(),await e.getDevice(),e.loading=!1};e.isEdit?t():i()},methods:{getData(){return new Promise(((e,t)=>{this.ajax.post("/api/v1/adam/plants/getPlants",{id:this.id}).then((t=>{t.data.smartDeviceBoList=t.data.smartDeviceBoList||[],t.data.smartDeviceBoList=t.data.smartDeviceBoList.map((e=>e.smartDeviceId)),this.form=t.data,console.log(this.form),e()}))}))},onClose(e=null){"function"==typeof e&&(e=null),this.$emit("onCloseAdd",e),this.showAddBox=!1},getPlantType(){return new Promise(((e,t)=>{this.ajax.post("/api/v1/adam/garden/getGrowGrowth").then((t=>{this.plantType=t.data,this.form.growthId=t.data[0].id,e()}))}))},getDevice(){return new Promise(((e,t)=>{const i=localStorage.getItem("erp_token")||localStorage.getItem("TOKEN_TITAN");let a=(new G.s).withUrl(P+"/hub/overview",{accessTokenFactory:()=>i}).withAutomaticReconnect({nextRetryDelayInMilliseconds:e=>5e3}).build();a.start().then((()=>{a.invoke("Subscribe").then((e=>{let t=[];e.map((e=>{e.nodes.map((i=>{i.name=e.name+"-"+i.name,t.push(i)}))})),this.deviceList=t})),e()}))}))},uploadFile(){this.form.uploading=!0;let e=this.$refs.file.files[0];(0,j.Z)(e,`erp/plant/${e.name}`).then((e=>{e.url&&(this.form.image=e.url,this.form.uploading=!1,this.form.percentage=0)}))},submit(){if(!this.form.categoryTitle)return void this.$message.warning("请输入种类名称");if(!this.form.address)return void this.$message.warning("请输入棚区");if(!this.form.growthId)return void this.$message.warning("请选择移植时方式");if(!this.form.plantTime)return void this.$message.warning("请选择移植时间");if(!this.form.area)return void this.$message.warning("请输入种植面积");this.submitting=!0;let e=this.isEdit?this.id:0,t=this.form.plantTime.length>12?this.form.plantTime:this.form.plantTime+" 08:00:00",i=this.isEdit?this.$route.query.gardenId:this.$route.query.id,a={id:e,categoryTitle:this.form.categoryTitle,varietyTitle:this.form.varietyTitle,plantTime:t,gardenId:i,growthId:this.form.growthId,area:Number(this.form.area),address:this.form.address,smartDevice:this.form.smartDeviceBoList.length>0?1:0,smartDeviceBoList:this.form.smartDeviceBoList.map((e=>{let t={};return this.deviceList.map((i=>{e==i.id&&(t={dashboardId:i.dashboardId,id:"",plantsId:"",smartDeviceId:i.id,title:i.name})})),t})),image:this.form.image};this.ajax.post("/api/v1/adam/plants/editPlants",a).then((e=>{this.submitting=!1,this.$message.success("提交成功"),this.onClose(1)}))}}},W=i(8118);const Y=(0,W.Z)(N,[["render",M],["__scopeId","data-v-5600a339"]]);var z=Y},7030:function(e,t,i){i.r(t),i.d(t,{default:function(){return me}});var a=i(6252),s=i(3577),l=i(9963);const o=e=>((0,a.dD)("data-v-00dad99a"),e=e(),(0,a.Cn)(),e),d={class:"stock inner"},n={class:"box"},r={key:0,class:"head"},m={class:"headBox"},u={class:"active"},p=(0,a.Uk)("新增作物"),h={key:1,class:"nodata"},g=o((()=>(0,a._)("i",{class:"erp erpicon_tianjia",style:{"font-size":"14px","margin-right":"5px"}},null,-1))),c=(0,a.Uk)(" 添加园区"),w=o((()=>(0,a._)("i",{class:"erp erpanniu_jiantouxiangzuo_o"},null,-1))),f=o((()=>(0,a._)("p",null,"园区列表",-1))),y=[w,f],k={class:"gardenList"},v={class:"head"},_=o((()=>(0,a._)("i",{class:"erp erpanniu_jiantouxiangzuo_o"},null,-1))),b=(0,a.Uk)(" 园区列表 "),L=[_,b],D=(0,a.Uk)("新增园区"),C={class:"list"},$=["onClick"],x=["src"],I={class:"c"},T=["onClick"],A=["onMouseleave"],B=o((()=>(0,a._)("div",{class:"menuPoint"},null,-1))),q=["onClick"],V=["onClick"],U=["onClick"];function M(e,t,i,o,w,f){const _=(0,a.up)("el-button"),b=(0,a.up)("router-view"),M=(0,a.up)("el-empty"),j=(0,a.up)("el-drawer"),G=(0,a.up)("PlantAdd"),E=(0,a.up)("PlantAddCrops"),P=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",n,[w.gardenList.length>0?((0,a.wg)(),(0,a.iD)("div",r,[(0,a._)("div",m,[(0,a._)("div",null,[(0,a._)("span",u,(0,s.zw)(w.gardenList[w.currentGarden].title),1)]),e.$store.state.power.addPlantBtn?((0,a.wg)(),(0,a.j4)(_,{key:0,type:"primary",onClick:f.addCrops},{default:(0,a.w5)((()=>[p])),_:1},8,["onClick"])):(0,a.kq)("",!0)]),(0,a.Wm)(b)])):(0,a.kq)("",!0),0==w.gardenList.length?((0,a.wg)(),(0,a.iD)("div",h,[(0,a.Wm)(M,{description:"暂无园区",style:{"padding-top":"200px"}},{default:(0,a.w5)((()=>[e.$store.state.power.addParkBtn?((0,a.wg)(),(0,a.j4)(_,{key:0,type:"primary",onClick:f.addGarden},{default:(0,a.w5)((()=>[g,c])),_:1},8,["onClick"])):(0,a.kq)("",!0)])),_:1})])):(0,a.kq)("",!0),e.$store.state.power.parkList?((0,a.wg)(),(0,a.iD)("div",{key:2,class:"btn",onClick:t[0]||(t[0]=e=>w.showGardenList=!0)},y)):(0,a.kq)("",!0),(0,a.Wm)(j,{modelValue:w.showGardenList,"onUpdate:modelValue":t[2]||(t[2]=e=>w.showGardenList=e),"before-close":f.onCloseGardenList,size:"300px","show-close":!1,"append-to-body":""},{default:(0,a.w5)((()=>[(0,a._)("div",k,[(0,a._)("div",v,[(0,a._)("p",{onClick:t[1]||(t[1]=e=>w.showGardenList=!1)},L),(0,a.Wm)(_,{type:"primary",onClick:f.addGarden},{default:(0,a.w5)((()=>[D])),_:1},8,["onClick"])]),(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(w.gardenList,((t,i)=>((0,a.wg)(),(0,a.iD)("div",{class:"item",onClick:e=>f.gardenListClick(i),key:i},[(0,a._)("img",{src:t.listImage,alt:""},null,8,x),(0,a._)("div",I,[(0,a._)("p",null,(0,s.zw)(t.title),1),(0,a._)("p",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.tagList,(e=>((0,a.wg)(),(0,a.iD)("span",{key:e.id},(0,s.zw)(e.title),1)))),128))])]),(0,a._)("i",{class:"erp erpcaidan",onClick:(0,l.iM)((e=>t.showMenu=!0),["stop"])},null,8,T),(0,a.Wm)(l.uT,{name:"el-zoom-in-top"},{default:(0,a.w5)((()=>[t.showMenu?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"menu",onMouseleave:e=>t.showMenu=!1},[B,e.$store.state.power.historyPlantBtn?((0,a.wg)(),(0,a.iD)("p",{key:0,onClick:(0,l.iM)((e=>f.history(t.id)),["stop"])}," 历史种植 ",8,q)):(0,a.kq)("",!0),e.$store.state.power.editParkBtn?((0,a.wg)(),(0,a.iD)("p",{key:1,onClick:(0,l.iM)((e=>f.edit(t.id,i)),["stop"])}," 编辑园区 ",8,V)):(0,a.kq)("",!0),e.$store.state.power.delParkBtn?((0,a.wg)(),(0,a.iD)("p",{key:2,onClick:(0,l.iM)((e=>f.del(t.id,i)),["stop"])}," 删除园区 ",8,U)):(0,a.kq)("",!0)],40,A)):(0,a.kq)("",!0)])),_:2},1024)],8,$)))),128))])])])),_:1},8,["modelValue","before-close"])])),[[P,w.loading]]),w.showAddBox?((0,a.wg)(),(0,a.j4)(G,{key:0,isEdit:w.isEdit,id:w.editId,onOnCloseAdd:f.onCloseAdd},null,8,["isEdit","id","onOnCloseAdd"])):(0,a.kq)("",!0),w.showAddCropsBox?((0,a.wg)(),(0,a.j4)(E,{key:1,isEdit:w.isEdit,id:w.editCropsId,onOnCloseAdd:f.onCloseAddCrops},null,8,["isEdit","id","onOnCloseAdd"])):(0,a.kq)("",!0)])}const j=e=>((0,a.dD)("data-v-f9647c24"),e=e(),(0,a.Cn)(),e),G={class:"plantAdd"},E={class:"item"},P=j((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("园区名称：")],-1))),N={class:"item"},W=j((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("园区图片：")],-1))),Y={class:"upload"},z=["src"],F={key:2,class:"uploadBox"},S={key:1},Z=j((()=>(0,a._)("i",{class:"erp erpshangchuan"},null,-1))),H=[Z],K={key:2},O={class:"item"},Q=j((()=>(0,a._)("p",{class:"itemLabel"},[(0,a._)("span",null,"*"),(0,a.Uk)("管理人员：")],-1))),R={class:"userList"},J={class:"btn"},X=j((()=>(0,a._)("p",null,null,-1))),ee=(0,a.Uk)("保存");function te(e,t){const i=(0,a.up)("el-input"),s=(0,a.up)("el-progress"),l=(0,a.up)("el-option"),o=(0,a.up)("el-select"),d=(0,a.up)("el-button"),n=(0,a.up)("el-dialog"),r=(0,a.Q2)("loading");return(0,a.wg)(),(0,a.j4)(n,{modelValue:e.showAddBox,"onUpdate:modelValue":t[4]||(t[4]=t=>e.showAddBox=t),title:e.isEdit?"编辑园区":"新增园区",width:"600px","before-close":e.onClose,"append-to-body":""},{default:(0,a.w5)((()=>[(0,a.wy)(((0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("div",E,[P,(0,a.Wm)(i,{modelValue:e.form.title,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.title=t),placeholder:"请输入园区名称"},null,8,["modelValue"])]),(0,a._)("div",N,[W,(0,a._)("div",Y,[e.form.img?((0,a.wg)(),(0,a.iD)("img",{key:0,src:e.form.img,alt:""},null,8,z)):(0,a.kq)("",!0),e.form.img?((0,a.wg)(),(0,a.iD)("i",{key:1,class:"erp erpguanbi",onClick:t[1]||(t[1]=t=>e.form.img="")})):(0,a.kq)("",!0),e.form.img?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("div",F,[e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("input",{key:0,onChange:t[2]||(t[2]=(...t)=>e.uploadFile&&e.uploadFile(...t)),ref:"file",type:"file"},null,544)),e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",S,H)),e.form.uploading?(0,a.kq)("",!0):((0,a.wg)(),(0,a.iD)("p",K,"点击上传图片")),e.form.uploading?((0,a.wg)(),(0,a.j4)(s,{key:3,width:90,type:"circle",percentage:e.form.percentage},null,8,["percentage"])):(0,a.kq)("",!0)]))])]),(0,a._)("div",O,[Q,(0,a._)("div",R,[(0,a.Wm)(o,{style:{width:"475px"},modelValue:e.form.user,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.user=t),multiple:"",placeholder:"请选择人员"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.userList,(e=>((0,a.wg)(),(0,a.j4)(l,{key:e.id,label:e.name,value:e.id,disabled:e.defaultCheck},null,8,["label","value","disabled"])))),128))])),_:1},8,["modelValue"])])])])),[[r,e.loading]]),(0,a._)("div",J,[X,(0,a.Wm)(d,{type:"primary",loading:e.submitting,onClick:e.submit},{default:(0,a.w5)((()=>[ee])),_:1},8,["loading","onClick"])])])),_:1},8,["modelValue","title","before-close"])}var ie=i(3483),ae={name:"plantAdd",props:["isEdit","id"],emits:["onCloseAdd"],data(){return{loading:!1,showAddBox:!0,form:{title:"",img:"",uploading:!1,percentage:0,user:[]},userList:[],submitting:!1,currentUser:{}}},mounted(){let e=this,t=async function(){e.loading=!0,await e.getData(),await e.getUserList(),e.loading=!1},i=async function(){e.loading=!0,await e.getUserList(),e.loading=!1};e.isEdit?t():i()},methods:{getData(){return new Promise(((e,t)=>{this.ajax.post("/api/v1/adam/garden/details",{id:this.id}).then((t=>{t.data.img=t.data.detailImage,t.data.user=t.data.gardenManagerBoList.map((e=>Number(e.aid))),this.form=t.data,e()}))}))},onClose(e=null){"function"==typeof e&&(e=null),console.log(e),this.$emit("onCloseAdd",e),this.showAddBox=!1},getUserList(){return new Promise(((e,t)=>{this.ajax.post("/api/v1/adam/task/getOrganizationUsers").then((t=>{let i="";this.userList=t.data.map((e=>(1==e.isMain&&(e.defaultCheck=!0,i=e.id),e))),this.form.user.includes(i)||this.form.user.push(i),e()}))}))},uploadFile(){this.form.uploading=!0;let e=this.$refs.file.files[0];(0,ie.Z)(e,`erp/park/${e.name}`).then((e=>{e.url&&(this.form.img=e.url,this.form.uploading=!1,this.form.percentage=0)}))},submit(){if(!this.form.title)return void this.$message.warning("请输入园区名称");if(!this.form.img)return void this.$message.warning("请上传园区图片");if(0==this.form.user.length)return void this.$message.warning("请选择管理人员");let e=this.form.user.map((e=>(this.userList.map((t=>{e==t.id&&(e={aid:t.id,username:t.name})})),e)));this.submitting=!0,this.ajax.post("/api/v1/adam/garden/editGarden",{detailImage:this.form.img,gardenManagerBoList:e,growPlantsBoList:[{address:"",area:0,categoryId:0,categoryTitle:"",endTime:"",gardenId:0,growthId:0,id:0,image:"",isEnd:0,plantTime:"",smartDevice:0,smartDeviceBoList:[{id:0,plantsId:0,smartDeviceId:0,title:""}],varietyId:0,varietyTitle:"",weightAll:0}],id:this.id,title:this.form.title}).then((e=>{this.submitting=!1,this.$message.success("提交成功"),this.onClose(this.isEdit?{title:this.form.title,detailImage:this.form.img,id:this.id}:"add")}))}}},se=i(8118);const le=(0,se.Z)(ae,[["render",te],["__scopeId","data-v-f9647c24"]]);var oe=le,de=i(8830),ne={name:"stock",data(){return{gardenList:[{title:""}],currentGarden:0,loading:!1,showGardenList:!1,showAddBox:!1,showAddCropsBox:!1,isEdit:!1,editCropsId:0,editId:0}},components:{PlantAdd:oe,PlantAddCrops:de.Z},mounted(){this.getGardenList()},methods:{addCrops(){this.showAddCropsBox=!0,this.isEdit=!1},history(e){this.$router.push({path:"/erp/plant/history",query:{id:e}})},edit(e,t){this.showAddBox=!0,this.isEdit=!0,this.editId=e},addGarden(){this.showAddBox=!0,this.isEdit=!1,this.editId=""},del(e,t){let i=this,a=i.gardenList[t].title;i.$confirm(`\n                <div style="color: #F59103">园区名称：${a}</div>\n                <div>确定要删除此园区？</div>\n            `,"删除园区",{dangerouslyUseHTMLString:!0,type:"warning",beforeClose(a,s,l){"confirm"==a?i.ajax.post("/api/v1/adam/garden/deleteGarden",{id:e}).then((e=>{200==e.code?(i.$message.success("删除成功"),i.gardenList.splice(t,1),l(),i.$router.push({path:"/erp/plant/detail",query:{id:i.gardenList[0].id}})):i.$message.error(e.message)})):l()}}).catch((()=>{}))},gardenListClick(e){this.currentGarden=e,this.showGardenList=!1,this.$router.push({path:"/erp/plant/detail",query:{id:this.gardenList[e].id}})},getGardenList(){this.loading=!0,this.ajax.post("/api/v1/adam/garden/list",{pageNum:1,pageSize:100,param:{}}).then((e=>{if(this.gardenList=e.data.map((e=>(e.showMenu=!1,e))),this.gardenList.length>0){let t=this.$route.query.gardenId||e.data[0].id;this.$router.push({path:"/erp/plant/detail",query:{id:t}}),this.$route.query.gardenId&&this.gardenList.map(((e,t)=>{e.id==this.$route.query.gardenId&&(this.currentGarden=t)}))}this.loading=!1}))},onCloseGardenList(e){e()},onCloseAdd(e){"string"==typeof e&&"add"==e&&this.getGardenList(),"object"==typeof e&&e&&(this.gardenList=this.gardenList.map((t=>(t.id==e.id&&(t.title=e.title,t.detailImage=e.detailImage),t)))),setTimeout((()=>{this.showAddBox=!1}),500)},onCloseAddCrops(e){1==e&&this.$router.push({path:"/erp/plant/detail",query:{id:this.$route.query.id,re:1}}),setTimeout((()=>{this.showAddCropsBox=!1}),500)}}};const re=(0,se.Z)(ne,[["render",M],["__scopeId","data-v-00dad99a"]]);var me=re},2335:function(e,t){const i={to2:e=>Number(e)<10?`0${Number(e)}`:String(e),time(e="y-m-d",t=null){let i=t?new Date(t):new Date;return e=e.replace("y",i.getFullYear()),e=e.replace("m",this.to2(i.getMonth()+1)),e=e.replace("d",this.to2(i.getDate())),e=e.replace("h",this.to2(i.getHours())),e=e.replace("i",this.to2(i.getMinutes())),e=e.replace("s",this.to2(i.getSeconds())),e=e.replace("w",i.getDay()),e},monthLength(e=null){let t=1*this.time("y",e),i=this.to2(1*this.time("m",e)+1);if(13==i)return 31;{let e=new Date(`${t}-${i}-01`).getTime()-864e5;return Number(this.time("d",e))}},preMonthLenggth(e=null){let t=1*this.time("y",e),i=this.to2(1*this.time("m",e)),a=new Date(`${t}-${i}-01`).getTime()-864e5;return Number(this.time("d",a))},nextMonthLenggth(e=null){let t=1*this.time("y",e),i=this.to2(1*this.time("m",e)+2),a=new Date(`${t}-${i}-01`).getTime()-864e5;return Number(this.time("d",a))},monthFirst(e=null){let t=this.time("y-m",e)+"-01";return this.time("y-m-d",t)},monthLast(e=null){let t=1*this.time("y",e),i=this.to2(1*this.time("m",e)+1),a=new Date(`${t}-${i}-01`).getTime()-864e5;return this.time("y-m-d",a)},preMonthToday(e=null){let t=Number(e.substr(0,4)),i=Number(e.substr(5,2)),a=Number(e.substr(8));return a>this.preMonthLenggth(`{y}-${i}-01`)&&(a=this.preMonthLenggth(`{y}-${i}-01`)),1==i?(t-=1,i=12):i-=1,`${t}-${i}-${a}`},nextMonthToday(e=null){let t=Number(e.substr(0,4)),i=Number(e.substr(5,2)),a=Number(e.substr(8));return a>this.nextMonthLenggth(`{y}-${i}-01`)&&(a=this.nextMonthLenggth(`{y}-${i}-01`)),12==i?(t+=1,i=1):i+=1,`${t}-${i}-${a}`},timeout(e){},timeRemaining(e,t){return t-=parseInt((new Date).getTime()/1e3),this.unixToString(e,t)},unixToString(e,t){let a=parseInt(t/60/60/24),s=parseInt((t-86400*a)/3600),l=parseInt((t-86400*a-3600*s)/60),o=t-86400*a-3600*s-60*l;return e=e.replace("d",i.to2(i.low(a))),e=e.replace("h",i.to2(i.low(s))),e=e.replace("i",i.to2(i.low(l))),e=e.replace("s",i.to2(i.low(o))),e},low(e){return e<0?0:e},parse(e){return new Date(e)}};t["Z"]=i}}]);
//# sourceMappingURL=30.034a6ab2.js.map