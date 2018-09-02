/*! Built with http://stenciljs.com */
MyDomainCom.loadBundle("thumb-01-product",["exports"],function(e){var t=window.MyDomainCom.h,n=function(){function e(){this.scale=0}return e.prototype.render=function(){var e=this;return[t("div",null,t("div",{class:"thumb",style:{"background-image":"url("+this.thumb+")"}},t("a",{href:"#",class:"magnifying-glass fa fa-search-plus",onClick:function(t){return e.togglePopup(t)}})),t("span",{class:"name"},this.name),t("br",null),t("a",{class:"button",href:"#",onClick:function(t){return e.emitbuttonClicked(t)}},this.buttonText)),t("div",{class:"popup",style:{"-ms-transform":"translate(-50%, -50%) scale("+this.scale+")","-webkit-transform":"translate(-50%, -50%) scale("+this.scale+")",transform:"translate(-50%, -50%) scale("+this.scale+")","background-image":"url("+this.thumb+")"}},t("a",{href:"#",class:"close fa fa-times",onClick:function(t){return e.togglePopup(t)}})),t("div",{class:"overlay",style:{display:1==this.scale?"block":"none"},onClick:function(t){return e.togglePopup(t)}})]},e.prototype.togglePopup=function(e){this.scale=0==this.scale?1:0,e.preventDefault()},e.prototype.emitbuttonClicked=function(e){this.buttonClicked.emit({name:this.name}),e.preventDefault()},Object.defineProperty(e,"is",{get:function(){return"thumb-01-product"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{buttonText:{type:String,attr:"button-text"},el:{elementRef:!0},name:{type:String,attr:"name"},scale:{state:!0},thumb:{type:String,attr:"thumb"},togglePopup:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"buttonClicked",method:"buttonClicked",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);\@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);:host{display:inline-block;margin:5px 3px}:host>div{text-align:center}.thumb{position:relative;width:170px;height:170px;background-size:contain;background-repeat:no-repeat;background-position:50%;background-color:#f0f0f0}.name{text-align:center;font-family:'Open Sans',sans-serif;font-size:14px;color:#686868}.button{font-family:'Zilla Slab',serif;font-weight:600;font-size:13px;text-decoration:none;color:#fff;border-radius:10px;padding:1px 20px;background-color:#20ad61}.button:hover{background-color:#1c9755}.button:active{background-color:#188249}.magnifying-glass{position:absolute;left:0;bottom:0;display:inline-block;padding:2px 3px;border-top-right-radius:5px;font-size:22px;text-decoration:none;outline:0;color:#3c5681;background-color:#d2e9ff}.magnifying-glass:hover{color:#344a70}.magnifying-glass:active{color:#2c3f5e}:host>.popup{position:fixed;left:50%;top:50%;display:inline-block;width:80%;height:80%;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;z-index:1000;background-size:contain;background-repeat:no-repeat;background-position:50%;background-color:#eee;border-radius:5px}:host>.popup>.close{position:absolute;right:0;top:0;display:inline-block;font-size:20px;color:#fff;text-decoration:none;padding:1px 4px 4px;background-color:#f60000;border-bottom-left-radius:5px}:host>.overlay{position:fixed;left:0;top:0;width:100%;height:100%;z-index:999;background-color:#000;opacity:.7}"},enumerable:!0,configurable:!0}),e}();e.Thumb01Product=n,Object.defineProperty(e,"__esModule",{value:!0})});