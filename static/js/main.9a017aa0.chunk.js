(this["webpackJsonplayoutdesigner-app"]=this["webpackJsonplayoutdesigner-app"]||[]).push([[0],{122:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),c=(a(92),a(23)),o=a(24),l=a(26),u=a(25),d=a(34),p=a.n(d),h=a(27),m=a(12),b=a(13),j=a(15),O=a.n(j),g=a(31),f=a(16),v=a.n(f),x=a(160),y=a(162),S=a(47),C=a(155),w=a(157),T=a(163),k=a(2);function F(e){return Object(k.jsxs)(T.a,{position:"relative",display:"inline-flex",children:[Object(k.jsx)(C.a,Object(b.a)({variant:"determinate"},e)),Object(k.jsx)(T.a,{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",children:Object(k.jsx)(w.a,{variant:"caption",component:"div",color:"textSecondary",children:"".concat(Math.round(e.value),"%")})})]})}function I(){var e=s.a.useState(10),t=Object(S.a)(e,2),a=t[0],n=t[1];return s.a.useEffect((function(){var e=setInterval((function(){n((function(e){return e>=100?0:e+10}))}),800);return function(){clearInterval(e)}}),[]),Object(k.jsx)(F,{value:a})}var U=a(22),R=a.n(U),N={local:{name:"Local",url:"http://localhost:62557/"},test:{name:"Test",url:"http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/"},product:{name:"Product",url:"http://layoutdesignerLoadBalancer-1418351197.ap-northeast-2.elb.amazonaws.com/"}},P=s.a.createContext({server:N.local,toggleServer:function(){},servername:"unknown",changeServername:function(){}}),L=a.p+"static/media/ready.a090bba9.jpg",D=["Background","Layout","Foreground"],A=["Default","Simple","Human","Car","Cat"],B=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onFileChange=function(e){n.setState({selectedFile:e.target.files[0]})},n.onFileUpload=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("hskim",n.state.selectedFile,n.state.selectedFile.name),s=n.state.selectTemplateType,a.append("selectTemplateType",s),a.append("category","test"),n.state.defaultUpload&&a.append("isDefaultTemplate","true"),console.log(n.state.selectedFile),r={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},n.setState({isOpen:!1}),n.setState({isRun:!0}),e.next=13,v.a.post(n.state.ServerUrl+"api/LayoutDesigner",a,r).then((function(e){console.log("response : ",e),n.setState({isOpen:!1});var t=[];e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({thumbnailImages:t}),n.setState({isOpen:!0}),n.setState({isRun:!1})})).catch((function(e){console.log("failed",e),n.setState({isRun:!1})}));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.fileData=function(){return n.state.selectedFile?Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"File Details:"}),Object(k.jsxs)("p",{children:["File Name: ",n.state.selectedFile.name]}),Object(k.jsxs)("p",{children:["File Type: ",n.state.selectedFile.type]}),Object(k.jsxs)("p",{children:["Last Modified:"," ",n.state.selectedFile.lastModifiedDate.toDateString()]})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("h4",{children:"Choose before Pressing the Upload button"})]})},n.onTemplateTypeChange=function(e,t){n.setState({selectTemplateType:t})},n.onCateforyChange=function(e){n.setState({selectCategory:e})},n.onDefaultUploadChange=function(e){var t=n.state.defaultUpload;n.setState({defaultUpload:!t})},n.UpdateServer=function(e){n.state.ServerUrl!=e.url&&n.setState({ServerUrl:e.url})},n.state={ServerUrl:"http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/",selectedFile:null,photoIndex:0,isOpen:!0,isRun:!1,defaultUpload:!1,selectTemplateType:"Background",selectCategory:"Simple",thumbnailImages:[{original:L,thumbnail:L}]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.isOpen,n=t.isRun,s=t.defaultUpload,r=(t.ServerUrl,t.thumbnailImages);return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(P.Consumer,{children:function(t){var a=t.server;return e.UpdateServer(a)}}),Object(k.jsxs)("div",{className:"white-block-body",children:[Object(k.jsx)(y.a,{options:D,defaultValue:D[0],style:{width:300},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Template Type",variant:"outlined"}))},onChange:this.onTemplateTypeChange}),Object(k.jsx)(y.a,{options:A,defaultValue:A[0],style:{width:200},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Category",variant:"outlined"}))},onChange:this.onCateforyChange}),n&&Object(k.jsx)(I,{}),Object(k.jsx)("input",{className:"smallclick",type:"file",onChange:this.onFileChange}),Object(k.jsx)("button",{className:"smallclick",onClick:this.onFileUpload,children:" Upload! "}),Object(k.jsxs)("label",{class:"react-select--inline",style:{alignSelf:"center"},children:[Object(k.jsx)("input",{type:"checkbox",checked:s,onChange:this.onDefaultUploadChange}),"\uae30\ubcf8\ud15c\ud50c\ub9bf"]})]})]}),Object(k.jsx)("div",{className:"fileinfo",children:this.fileData()}),Object(k.jsxs)("div",{children:[Object(k.jsx)("div",{className:"previewcontainer",children:Object(k.jsx)("div",{style:{width:300},children:a&&Object(k.jsx)(R.a,{items:r,additionalClass:p.a.img})})}),Object(k.jsx)("div",{})]})]})}}]),a}(s.a.Component),G=(a(62),a(49),a(55)),E=a.n(G);function J(e){var t=e.msg,a=void 0===t?"\uba54\uc138\uc9c0 \uc5c6\uc74c":t;return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)("div",{className:"toast",children:a})})}var z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({isOpen:!0})},n.onCombination=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,s,r,i,c,o,l,u,d,p,h,m,b;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.state,a.isRun,s=a.savePPTX,r=a.RefBackgroundImg,i=a.RefLayoutImg,c=a.RefForegroundImg,o=a.curBackgroundTemplate,l=a.curLayoutTemplate,u=a.curForegroundTemplate,n.setState({isError:!1}),""!==o){e.next=6;break}return n.setState({isError:!0}),n.setState({errMsg:"\ubc30\uacbd \ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud558\uc138\uc694."}),e.abrupt("return");case 6:if(""!==l){e.next=10;break}return n.setState({isError:!0}),n.setState({errMsg:"\ub808\uc774\uc544\uc6c3 \ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud558\uc138\uc694."}),e.abrupt("return");case 10:return""===u&&(n.setState({isError:!0}),n.setState({errMsg:"\uc804\uacbd \ud15c\ud50c\ub9bf\uc744 \uc120\ud0dd\ud558\uc138\uc694."})),d=r.current.getCurrentIndex(),p=i.current.getCurrentIndex(),h=c.current.getCurrentIndex(),(m=new FormData).append("UserId","hskim"),m.append("SavePPTX",s),m.append("BackgroundTemplate",o),m.append("LayoutTemplate",l),m.append("ForegroundTemplate",u),m.append("BackgroundTemplateIndex",d),m.append("LayoutTemplateIndex",p),m.append("ForegroundTemplateIndex",h),b={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},n.setState({isRun:!0}),n.setState({isResult:!1}),e.next=28,v.a.post(n.state.ServerUrl+"api/Combination",m,b).then((function(e){console.log("response : ",e);var t=[];e.data.Name;n.setState({combinationname:e.data.Name}),e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({resultThumbnailImages:t}),n.setState({isResult:!0}),n.setState({isRun:!1}),n.setState({enableDownload:!1})})).catch((function(e){console.log("failed",e),n.setState({isRun:!1})}));case 28:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onDownload=function(){var e=Object(g.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.state.combinationname,v()({url:n.state.ServerUrl+"api/Combination",method:"GET",responseType:"blob",params:{filename:a}}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),a=document.createElement("a");a.href=t,n.state.savePPTX?a.setAttribute("download","test.pptx"):a.setAttribute("download","test.tlx"),document.body.appendChild(a),a.click()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onLoadTemplateList=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,s;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isOpen:!1}),(a=new FormData).append("TemplateList","All"),s={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},e.next=6,v.a.post(n.state.ServerUrl+"api/Information",a,s).then((function(e){console.log("response : ",e);var t=[],a=[],s=[];e.data.templates.map((function(e){"Background"===e.type?t.push(e.template):"Layout"===e.type?a.push(e.template):"Foreground"===e.type&&s.push(e.template)})),n.setState({backgroundOptions:t}),n.setState({layoutOptions:a}),n.setState({foregroundOptions:s})})).catch((function(e){console.log("failed",e)}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.onBackgroundTemplateChange=function(e,t){var a=new FormData;a.append("GetBackgroundThumbnailList",t);n.setState({curBackgroundTemplate:t}),v.a.post(n.state.ServerUrl+"api/Information",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}}).then((function(e){console.log("response : ",e),n.setState({isOpen:!1});var t=[];e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({backgroundThumbnailImages:t}),n.setState({isOpen:!0})})).catch((function(e){console.log("failed",e)}))},n.onLayoutTemplateChange=function(e,t){var a=new FormData;a.append("GetLayoutThumbnailList",t);n.setState({curLayoutTemplate:t}),v.a.post(n.state.ServerUrl+"api/Information",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}}).then((function(e){console.log("response : ",e),n.setState({isLayoutOpen:!1});var t=[];e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({layoutThumbnailImages:t}),n.setState({isLayoutOpen:!0})})).catch((function(e){console.log("failed",e)}))},n.onForegroundTemplateChange=function(e,t){var a=new FormData;a.append("GetForegroundThumbnailList",t);n.setState({curForegroundTemplate:t}),v.a.post(n.state.ServerUrl+"api/Information",a,{headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}}).then((function(e){console.log("response : ",e),n.setState({isForegroundOpen:!1});var t=[];e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({foregroundThumbnailImages:t}),n.setState({isForegroundOpen:!0})})).catch((function(e){console.log("failed",e)}))},n.onsavePPTXChange=function(e){var t=n.state.savePPTX;n.setState({savePPTX:!t})},n.UpdateServer=function(e){n.state.ServerUrl!=e.url&&n.setState({ServerUrl:e.url})},n.state={ServerUrl:"http://ec2-3-35-207-83.ap-northeast-2.compute.amazonaws.com/",RefBackgroundImg:s.a.createRef(),RefLayoutImg:s.a.createRef(),RefForegroundImg:s.a.createRef(),curBackgroundTemplate:"",curLayoutTemplate:"",curForegroundTemplate:"",isOpen:!1,isRun:!1,enableDownload:!0,isLayoutOpen:!1,isForegroundOpen:!1,isResult:!1,savePPTX:!1,isError:!1,errMsg:"",combinationname:"",backgroundOptions:["default"],layoutOptions:["default"],foregroundOptions:["default"],resultThumbnailImages:[{original:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg",thumbnail:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg"}],backgroundThumbnailImages:[{original:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg",thumbnail:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg"}],layoutThumbnailImages:[{original:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg",thumbnail:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg"}],foregroundThumbnailImages:[{original:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg",thumbnail:"https://layoutdesigner-thumbnail-bucket.s3.ap-northeast-2.amazonaws.com/Resources/ready.jpg"}]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.RefBackgroundImg,n=t.RefLayoutImg,s=t.RefForegroundImg,r=t.isOpen,i=t.isError,c=t.errMsg,o=t.enableDownload,l=t.isLayoutOpen,u=t.isRun,d=t.isForegroundOpen,p=t.isResult,h=t.savePPTX,m=t.backgroundOptions,j=t.layoutOptions,O=t.foregroundOptions,g=t.resultThumbnailImages,f=t.backgroundThumbnailImages,v=t.layoutThumbnailImages,S=t.foregroundThumbnailImages;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{className:"row",children:[Object(k.jsx)("h3",{children:"Combination Template"}),u&&Object(k.jsx)(I,{})]}),Object(k.jsx)("br",{}),i&&Object(k.jsx)(J,{msg:c}),Object(k.jsx)(P.Consumer,{children:function(t){var a=t.server;return e.UpdateServer(a)}}),Object(k.jsxs)("div",{className:"combination-block-body",children:[Object(k.jsx)("button",{className:"click",onClick:this.onLoadTemplateList,children:" Load "}),Object(k.jsx)("button",{className:"click",onClick:this.onCombination,children:" Combination "}),Object(k.jsx)("button",{className:"click",onClick:this.onDownload,disabled:o,children:" Download "}),Object(k.jsxs)("label",{class:"react-select--inline",children:[Object(k.jsx)("input",{type:"checkbox",checked:h,onChange:this.onsavePPTXChange}),"PPTX\ub85c \ubcc0\ud658"]})]}),Object(k.jsxs)("div",{class:"combination-list-body",children:[Object(k.jsx)(y.a,{options:m,style:{width:300},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Background",variant:"outlined"}))},onChange:this.onBackgroundTemplateChange}),Object(k.jsx)(y.a,{options:j,style:{width:300},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Layout",variant:"outlined"}))},onChange:this.onLayoutTemplateChange}),Object(k.jsx)(y.a,{options:O,style:{width:300},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Foreground",variant:"outlined"}))},onChange:this.onForegroundTemplateChange})]}),Object(k.jsx)("div",{}),Object(k.jsxs)("div",{class:"searchcontainer",children:[Object(k.jsx)("div",{style:{width:300},children:r&&Object(k.jsx)(R.a,{items:f,additionalClass:E.a.image,ref:a})}),Object(k.jsx)("div",{style:{width:300},children:l&&Object(k.jsx)(R.a,{items:v,additionalClass:E.a.image,ref:n})}),Object(k.jsx)("div",{style:{width:300},children:d&&Object(k.jsx)(R.a,{items:S,additionalClass:E.a.image,ref:s})})]}),Object(k.jsx)("br",{}),p&&Object(k.jsx)("div",{className:"previewcontainer",children:Object(k.jsx)("div",{style:{width:300},children:Object(k.jsx)(R.a,{items:g})})})]})}}]),a}(n.Component);var M=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onFileChange=function(e){n.setState({selectedFile:e.target.files[0]});var t=n.state.oldPreview,a=document.getElementById("preview");null!=t&&a.removeChild(t);for(var s=0;s<e.target.files.length;s++){var r=e.target.files[s];if(r.type.startsWith("image/")){var i=document.createElement("img",{className:"photo"},"styled");i.classList.add("photo"),i.file=r,a.appendChild(i),n.setState({oldPreview:i});var c=new FileReader;c.onload=function(e){return function(t){e.src=t.target.result}}(i),c.readAsDataURL(r)}}},n.onFileUpload=function(){var e=Object(g.a)(O.a.mark((function e(t){var a,s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("recognition",n.state.selectedFile,n.state.selectedFile.name),a.append("Recognition","true"),a.append("userId","hskim"),console.log(n.state.selectedFile),s={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},n.setState({isOpen:!1}),n.setState({isRun:!0}),r=n.state.ServerUrl,e.next=12,v.a.post(r+"api/Search",a,s).then((function(e){console.log("response : ",e),n.setState({isOpen:!1});var t=[];t.push({original:e.data.target,thumbnail:e.data.target}),t.push({original:e.data.targetBox,thumbnail:e.data.targetBox}),n.setState({thumbnailImages:t});var a=[],s=0,r=[];e.data.labels.map((function(e){r.push({id:s,label:e.name,confidence:e.confidence}),a.push(e.name),s+=1})),n.setState({keywordOptions:a}),n.setState({recognitionResults:r}),n.setState({isOpen:!0}),n.setState({isRun:!1})})).catch((function(e){console.log("failed",e),n.setState({isRun:!1})}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.fileData=function(){return n.state.selectedFile?Object(k.jsxs)("div",{children:[Object(k.jsx)("h2",{children:"File Details:"}),Object(k.jsxs)("p",{children:["File Name: ",n.state.selectedFile.name]}),Object(k.jsxs)("p",{children:["File Type: ",n.state.selectedFile.type]}),Object(k.jsxs)("p",{children:["Last Modified:"," ",n.state.selectedFile.lastModifiedDate.toDateString()]})]}):Object(k.jsxs)("div",{children:[Object(k.jsx)("br",{}),Object(k.jsx)("h4",{children:"Choose before Pressing the Upload button"})]})},n.UpdateServer=function(e){n.state.ServerUrl!=e.url&&n.setState({ServerUrl:e.url})},n.onKeywordOptions=function(){var e=Object(g.a)(O.a.mark((function e(t,a){var s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(s=new FormData).append("UserTemplateList",a),r={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},e.next=5,v.a.post(n.state.ServerUrl+"api/Information",s,r).then((function(e){console.log("response : ",e);var t=[];e.data.templates.map((function(e){t.push(e.template)})),n.setState({searchOptions:t})})).catch((function(e){console.log("failed",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.onSearchTemplateChange=function(){var e=Object(g.a)(O.a.mark((function e(t,a){var s,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(s=new FormData).append("GetUserTemplate",a),r={headers:{"Content-Type":"multipart/form-data","Access-Control-Allow-Origin":"*",Accept:"*"}},n.setState({curSearchTemplate:a}),v.a.post(n.state.ServerUrl+"api/Information",s,r).then((function(e){console.log("response : ",e),n.setState({isOpen:!1});var t=[];e.data.thumbnails.map((function(e){t.push({original:e.thumb,thumbnail:e.thumb})})),n.setState({searchthumbnailImages:t}),n.setState({isOpen:!0})})).catch((function(e){console.log("failed",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),n.state={ServerUrl:"http://localhost:62557/",selectedFile:null,oldPreview:null,isOpen:!0,isRun:!1,selectKeywordType:"",thumbnailImages:[{original:L,thumbnail:L}],searchthumbnailImages:[{original:L,thumbnail:L}],recognitionResults:[],keywordOptions:["none","Combination"],searchOptions:[],curSearchTemplate:""},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=(t.isOpen,t.isRun),n=t.thumbnailImages,s=t.searchthumbnailImages,r=t.recognitionResults,i=t.keywordOptions,c=t.searchOptions;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)(P.Consumer,{children:function(t){var a=t.server;return e.UpdateServer(a)}}),Object(k.jsxs)("div",{className:"combination-block-body",children:[Object(k.jsx)("input",{id:"myFile",className:"smallclick",type:"file",onChange:this.onFileChange,style:{background:"gray",width:400}}),Object(k.jsx)("button",{className:"smallclick",onClick:this.onFileUpload,children:" Upload! "}),a&&Object(k.jsx)(I,{})]})]}),Object(k.jsxs)("div",{className:"block-file-body",children:[Object(k.jsx)("div",{id:"preview",className:"previewimg"}),Object(k.jsx)("div",{className:"search-fileinfo",children:this.fileData()})]}),Object(k.jsx)("div",{children:Object(k.jsxs)("div",{className:"searchcontainer",children:[Object(k.jsx)(R.a,{items:n,style:p.a.image}),Object(k.jsxs)("div",{className:"column-box",children:[Object(k.jsx)(y.a,{options:i,defaultValue:i[0],style:{width:300},renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Select Keyword",variant:"outlined"}))},onChange:this.onKeywordOptions}),Object(k.jsx)("div",{className:"recognitionResult",children:r.map((function(e){return Object(k.jsx)(X,{item:e},e.id)}))})]}),Object(k.jsxs)("div",{className:"column-box",children:[Object(k.jsx)(y.a,{options:c,renderInput:function(e){return Object(k.jsx)(x.a,Object(b.a)(Object(b.a)({},e),{},{label:"Results",variant:"outlined"}))},onChange:this.onSearchTemplateChange}),Object(k.jsx)("div",{children:Object(k.jsx)(R.a,{items:s,style:p.a.img,showThumbnails:!1,showPlayButton:!1,showFullscreenButton:!1})}),Object(k.jsx)("button",{className:"smallclick",children:" Downlaod! "})]})]})})]})}}]),a}(s.a.Component);function X(e){var t=e.item;return Object(k.jsxs)("div",{children:[Object(k.jsx)("b",{children:t.label})," ",Object(k.jsxs)("span",{children:["(",t.confidence,")"]})]})}M.context=P;var K=a.p+"static/media/slide1.e1a3dbe4.JPG",V=a.p+"static/media/slide2.8651e002.JPG",W=a.p+"static/media/slide3.51c3cf72.JPG",H=a.p+"static/media/slide4.06d8cb3f.JPG",Y=a.p+"static/media/slide5.a9e603eb.JPG",q=a.p+"static/media/slide6.f55f9bd9.JPG",Q=a.p+"static/media/slide7.8fc67c0f.JPG",Z=a.p+"static/media/slide8.183a104a.JPG",$=a.p+"static/media/slide9.18ddec8b.JPG",_=a.p+"static/media/slide10.fab6dc8e.JPG",ee=a.p+"static/media/slide11.3c97419d.JPG",te=a.p+"static/media/slide12.9aaa117d.JPG",ae=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={thumbnailImages:[{original:K,thumbnail:K},{original:V,thumbnail:V},{original:W,thumbnail:W},{original:H,thumbnail:H},{original:Y,thumbnail:Y},{original:q,thumbnail:q},{original:Q,thumbnail:Q},{original:Z,thumbnail:Z},{original:$,thumbnail:$},{original:_,thumbnail:_},{original:ee,thumbnail:ee},{original:te,thumbnail:te}]},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.thumbnailImages;return Object(k.jsx)("div",{children:Object(k.jsx)(R.a,{items:e,additionalClass:p.a.img})})}}]),a}(s.a.Component),ne=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).UpdateServer=function(e){n.state.ServerUrl!=e.url&&n.setState({ServerUrl:e.url})},n.toggleServer=function(){var e,t=n.state,a=t.server;t.servername;a==N.local?e=N.test:a==N.test?e=N.product:a==N.product&&(e=N.local),n.setState((function(t){return{server:e,ServerUrl:e.url,servername:"unknown"}}))},n.changeServername=function(){v()({url:n.state.ServerUrl+"api/Information/0",method:"GET"}).then((function(e){n.setState((function(t){return{servername:e.data.Name}}))}))},n.state={server:N.local,toggleServer:n.toggleServer,ServerUrl:N.local.url,servername:"unknown",changeServername:n.changeServername},n}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.ServerUrl;return Object(k.jsxs)("div",{className:"app",children:[Object(k.jsx)("h1",{children:"LayoutDesiger API(s)"}),Object(k.jsx)(x.a,{label:"Server",variant:"outlined",value:e,style:{width:600}}),Object(k.jsx)(P.Provider,{value:this.state,children:Object(k.jsx)(se,{})}),Object(k.jsx)(P.Provider,{value:this.state,children:Object(k.jsx)(pe,{})})]})}}]),a}(s.a.Component),se=function(){return Object(k.jsx)("nav",{children:Object(k.jsxs)("ul",{children:[Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/",children:"Home"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/upload",children:"Upload"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/search",children:"Search"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/combination",children:"Combination"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/about",children:"About"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/contact",children:"Contact"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/settings",children:"Settings"})}),Object(k.jsx)("li",{children:Object(k.jsx)(h.b,{exact:!0,activeClassName:"current",to:"/demo",children:"Demo"})})]})})},re=function(){return Object(k.jsxs)("div",{className:"home",children:[Object(k.jsx)("h1",{children:"Welcome to LayoutDesginer React App website"}),Object(k.jsx)("p",{children:" Enjoy this site."}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:" \uc124\uba85 : "}),Object(k.jsx)("p",{children:"\uc0ac\uc6a9\uc790\uac00 \uc120\ud0dd\ud55c \ud15c\ud50c\ub9bf \uc694\uc18c(\ubc30\uacbd, \uc804\uacbd, \ub808\uc774\uc544\uc6c3)\ub4e4\uc744 \uc870\ud569\ud574 \ud504\ub9ac\uc820\ud14c\uc774\uc158 \ud15c\ud50c\ub9bf\uc744 \uc0dd\uc131\ud558\uace0 \uc774\ub97c \uc0ac\uc6a9\uc790\uc5d0\uac8c \ub2e4\uc6b4\ub85c\ub4dc \ud560 \uc218 \uc788\ub3c4\ub85d \ud558\ub294 \uc11c\ube44\uc2a4"}),Object(k.jsx)("hr",{}),Object(k.jsx)("p",{children:" \uc694\uad6c\uc0ac\ud56d "}),Object(k.jsx)("p",{children:"1. \uc0ac\uc6a9\uc790 \ud30c\uc77c \uc5c5\ub85c\ub4dc \uac00\ub2a5(\ub514\uc790\uc778 \uc11c\uc2dd \ucd94\uac00)"}),Object(k.jsx)("p",{children:"2. \ud15c\ud50c\ub9bf \uc870\ud569 \uae30\ub2a5 \uc81c\uacf5"}),Object(k.jsx)("p",{children:"3. \uc0dd\uc131\ub41c \ud15c\ud50c\ub9bf \ub2e4\uc6b4\ub85c\ub4dc \uc81c\uacf5"}),Object(k.jsx)("p",{children:"4. \uc774\ubbf8\uc9c0 \uae30\ubc18 \ud15c\ud50c\ub9bf \uc11c\uce6d \uae30\ub2a5 \uc81c\uacf5"})]})},ie=function(){return Object(k.jsx)("div",{className:"upload",children:Object(k.jsx)(B,{})})},ce=function(){return Object(k.jsx)("div",{className:"search",children:Object(k.jsx)(M,{})})},oe=function(){return Object(k.jsx)("div",{className:"combination",children:Object(k.jsx)(z,{})})},le=function(){return Object(k.jsxs)("div",{className:"about",children:[Object(k.jsx)("h1",{children:"About Me"}),Object(k.jsx)("p",{children:"AWS ABP - LayoutDesigner API Test"})]})},ue=function(){return Object(k.jsxs)("div",{className:"contact",children:[Object(k.jsx)("h1",{children:"Contact Me"}),Object(k.jsxs)("p",{children:["You can reach me via email: ",Object(k.jsx)("strong",{children:"hskim@hancom.com"})]})]})},de=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsx)(P.Consumer,{children:function(e){var t=e.server,a=e.toggleServer,n=e.servername,s=e.changeServername;return Object(k.jsxs)("div",{children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{onClick:a,children:" Change Server "}),Object(k.jsx)("p",{children:"Current Server(".concat(t.name,"): ").concat(t.url)})]}),Object(k.jsxs)("div",{children:[Object(k.jsx)("button",{onClick:s,children:" Get Server Name "}),Object(k.jsx)("p",{children:"Current Server Name(".concat(n,")")})]})]})}})})}}]),a}(s.a.Component),pe=function(){return Object(k.jsxs)(m.c,{children:[Object(k.jsx)(m.a,{exact:!0,path:"/",component:re}),Object(k.jsx)(m.a,{exact:!0,path:"/upload",component:ie}),Object(k.jsx)(m.a,{exact:!0,path:"/search",component:ce}),Object(k.jsx)(m.a,{exact:!0,path:"/combination",component:oe}),Object(k.jsx)(m.a,{exact:!0,path:"/about",component:le}),Object(k.jsx)(m.a,{exact:!0,path:"/contact",component:ue}),Object(k.jsx)(m.a,{exact:!0,path:"/settings",component:de}),Object(k.jsx)(m.a,{exact:!0,path:"/demo",component:ae})]})},he=ne,me=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(k.jsx)(h.a,{children:Object(k.jsx)(he,{})}),document.getElementById("root")),me()},34:function(e,t,a){},92:function(e,t,a){}},[[122,1,2]]]);
//# sourceMappingURL=main.9a017aa0.chunk.js.map