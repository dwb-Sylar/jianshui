(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71a351b2"],{"08f3":function(t,e,o){"use strict";o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return i})),o.d(e,"c",(function(){return l}));var a={1:"景点介绍"},i={1:"显示中",2:"已隐藏"},l={1:"景点介绍",2:"景点娱乐"}},8159:function(t,e,o){},ad8f:function(t,e,o){"use strict";o("b775")},cc48:function(t,e,o){"use strict";o.d(e,"a",(function(){return i})),o.d(e,"g",(function(){return l})),o.d(e,"e",(function(){return n})),o.d(e,"c",(function(){return r})),o.d(e,"d",(function(){return s})),o.d(e,"f",(function(){return c}));var a=o("b775");function i(t){return Object(a["b"])("/hotpoint/selectAllByPaging",t)}function l(t){return Object(a["b"])("/hotpoint/statusUpdate",t)}function n(t){return Object(a["b"])("/hotpoint/saveOrUpdate",t)}function r(t){return Object(a["b"])("/hotpoint/detail",t)}function s(){return Object(a["b"])("/threshold/query")}function c(t){return Object(a["b"])("/threshold/saveOrUpdate",t)}},d3a6:function(t,e,o){"use strict";o("8159")},ff7b:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container"},[o("div",{staticClass:"filter-container"},[o("div",[o("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"热点ID",clearable:""},model:{value:t.filtersForm.id,callback:function(e){t.$set(t.filtersForm,"id",e)},expression:"filtersForm.id"}}),o("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"请输入热点名称",clearable:""},model:{value:t.filtersForm.hotPointName,callback:function(e){t.$set(t.filtersForm,"hotPointName",e)},expression:"filtersForm.hotPointName"}}),o("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"选择类型"},model:{value:t.filtersForm.hotPointType,callback:function(e){t.$set(t.filtersForm,"hotPointType",e)},expression:"filtersForm.hotPointType"}},t._l(t.typeOptions,(function(t){return o("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1),o("el-select",{staticClass:"filter-item",attrs:{clearable:"",placeholder:"选择状态"},model:{value:t.filtersForm.status,callback:function(e){t.$set(t.filtersForm,"status",e)},expression:"filtersForm.status"}},t._l(t.EHotPointStatus,(function(t,e){return o("el-option",{key:e,attrs:{label:t,value:e}})})),1),o("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleSearch}},[t._v(" 搜索 ")]),o("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-refresh"},on:{click:t.handleReset}},[t._v(" 重置 ")])],1),o("div",[o("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v(" 添加热点 ")])],1)]),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",border:"",size:"small","max-height":t.tableHeight,fit:"","highlight-current-row":""}},[o("el-table-column",{attrs:{align:"center",label:"热点ID",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),o("el-table-column",{attrs:{label:"热点名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.hotPointName)+" ")]}}])}),o("el-table-column",{attrs:{label:"类型",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("span",[t._v(t._s(t.EHotPointList[e.row.hotPointType]))])]}}])}),o("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-tag",{attrs:{type:1==e.row.status?"success":"danger"}},[t._v(t._s(t.EHotPointStatus[e.row.status]))])]}}])}),o("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"300"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini"},on:{click:function(o){return t.handleDetail(e.$index,e.row)}}},[t._v("查看")]),o("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(o){return t.handleEdit(e.row)}}},[t._v("编辑")]),1==e.row.status?o("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(o){return t.handleShow(e.row)}}},[t._v("隐藏")]):o("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(o){return t.handleShow(e.row)}}},[t._v("展示")])]}}])})],1),o("el-pagination",{attrs:{"current-page":t.page.current,"page-sizes":t.page.sizes,"page-size":t.page.size,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),o("el-dialog",{attrs:{title:"添加热点",visible:t.dialogVisible,width:"30%","custom-class":"my-dialog","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("div",{staticClass:"dialog-body"},[o("el-form",{ref:"hotForm",attrs:{model:t.hotForm,rules:t.hotFormRules,"label-position":"right","label-width":"120px"}},[o("el-form-item",{attrs:{label:"热点名称",prop:"hotPointName"}},[o("el-input",{attrs:{maxlength:"20",autocomplete:"off"},model:{value:t.hotForm.hotPointName,callback:function(e){t.$set(t.hotForm,"hotPointName",e)},expression:"hotForm.hotPointName"}})],1),o("el-form-item",{attrs:{label:"热点类型",required:"",prop:"hotPointType"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择活动区域"},model:{value:t.hotForm.hotPointType,callback:function(e){t.$set(t.hotForm,"hotPointType",e)},expression:"hotForm.hotPointType"}},[o("el-option",{attrs:{label:"景点介绍",value:1}})],1)],1),o("el-form-item",{attrs:{label:"是否关联模型",required:"",prop:"hasModel"}},[o("el-radio-group",{model:{value:t.hotForm.hasModel,callback:function(e){t.$set(t.hotForm,"hasModel",e)},expression:"hotForm.hasModel"}},[o("el-radio",{attrs:{label:1}},[t._v("是")]),o("el-radio",{attrs:{label:2}},[t._v("否")])],1)],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:1==t.hotForm.hasModel,expression:"hotForm.hasModel==1"}],attrs:{label:"模型ID",prop:"releationModel"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.hotForm.releationModel,callback:function(e){t.$set(t.hotForm,"releationModel",e)},expression:"hotForm.releationModel"}})],1),o("el-form-item",{directives:[{name:"show",rawName:"v-show",value:2==t.hotForm.hasModel,expression:"hotForm.hasModel==2"}],attrs:{label:"经纬度"}},[o("el-row",{attrs:{gutter:20,type:"flex"}},[o("el-col",[o("el-form-item",{attrs:{prop:"lon"}},[o("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"经度"},model:{value:t.hotForm.lon,callback:function(e){t.$set(t.hotForm,"lon",e)},expression:"hotForm.lon"}})],1)],1),o("el-col",[o("el-form-item",{attrs:{prop:"lat"}},[o("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"维度"},model:{value:t.hotForm.lat,callback:function(e){t.$set(t.hotForm,"lat",e)},expression:"hotForm.lat"}})],1)],1),o("el-col",[o("el-form-item",{attrs:{prop:"hight"}},[o("el-input",{attrs:{type:"number",autocomplete:"off",placeholder:"高度"},model:{value:t.hotForm.hight,callback:function(e){t.$set(t.hotForm,"hight",e)},expression:"hotForm.hight"}})],1)],1)],1)],1)],1)],1),o("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)])],1)},i=[],l=o("5530"),n=(o("b0c0"),o("ad8f"),o("252a"),o("cc48")),r=o("08f3"),s={name:"hotspot",filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,total:0,page:{sizes:[10,20,50],size:10,current:1},listLoading:!0,filtersForm:{id:void 0,hotPointName:void 0,hotPointType:void 0,status:void 0},listQuery:{},typeOptions:[{value:1,label:"景点介绍"}],EHotPointList:r["a"],EHotPointStatus:r["b"],dialogVisible:!1,hotForm:{hotPointName:"",hotPointType:1,releationModel:"",hasModel:1,height:void 0,lat:void 0,lon:void 0},hotFormRules:{hotPointName:[{required:!0,message:"请输入热点名称",trigger:["blur","change"]}]}}},created:function(){this.fetchData()},beforeRouteLeave:function(t,e,o){"hotspotDetail"==t.name||"hotspotEdit"==t.name?e.meta.keepAlive=!0:this.$store.dispatch("tagsView/delCachedView","hotspot"),o()},methods:{fetchData:function(){var t=this;this.listLoading=!0;var e=Object(l["a"])({pageSize:this.page.size,page:this.page.current},this.listQuery);Object(n["a"])(e).then((function(e){t.total=e.data.total,t.list=e.data.rows,t.listLoading=!1}))},handleDetail:function(t,e){this.$router.push({path:"/content/hotspot/detail/"+e.id})},handleEdit:function(t){this.$router.push({path:"/content/hotspot/edit/"+t.id})},handleShow:function(t){var e=this,o=1==t.status?"确认后，将该部分内容在3D场景内隐藏，是否确认？":"确认后，将该部分内容在3D场景内显示，是否确认";this.$confirm(o,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o={id:t.id,status:1==t.status?2:1};Object(n["g"])(o).then((function(t){e.$message({type:"success",message:"操作成功!"}),e.fetchData()})).catch((function(t){e.$message({type:"error",message:"操作失败"})}))}))},handleSizeChange:function(t){this.page.current=1,this.page.size=t,this.fetchData()},handleCurrentChange:function(t){this.page.current=t,this.fetchData()},handleSearch:function(){this.listQuery=Object(l["a"])({},this.filtersForm),this.page.current=1,this.fetchData()},handleReset:function(){this.page.current=1,this.filtersForm={id:void 0,hotPointName:void 0,hotPointType:void 0,status:void 0},this.listQuery={},this.fetchData()},handleAdd:function(){this.dialogVisible=!0},handleSubmit:function(){var t=this;this.$refs.hotForm.validate((function(e){if(!e)return!1;Object(n["hotpointSave"])(t.hotForm)}))},handleClose:function(){this.$refs["hotForm"].resetFields(),this.dialogVisible=!1}}},c=s,u=(o("d3a6"),o("2877")),h=Object(u["a"])(c,a,i,!1,null,"105bd8a9",null);e["default"]=h.exports}}]);