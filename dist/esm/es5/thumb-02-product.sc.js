/*! Built with http://stenciljs.com */
import{h}from"./my-domain-com.core.js";var MyComponent=function(){function t(){this.target="_self"}return t.prototype.render=function(){return[h("div",null,h("div",{class:"thumb",style:{"background-image":"url("+this.thumb+")"}}),h("div",{class:"description"},this.description),h("div",null,h("a",{href:this.url,class:"button",target:this.target},this.buttonText)))]},Object.defineProperty(t,"is",{get:function(){return"thumb-02-product"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{buttonText:{type:String,attr:"button-text"},description:{type:String,attr:"description"},el:{elementRef:!0},target:{type:String,attr:"target"},thumb:{type:String,attr:"thumb"},url:{type:String,attr:"url"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);.sc-thumb-02-product-h{display:inline-block;margin:5px 3px;vertical-align:top}.sc-thumb-02-product-h > div.sc-thumb-02-product{position:relative;text-align:center;border:1px solid silver;padding:10px;width:215px;min-height:360px}.thumb.sc-thumb-02-product{position:relative;height:170px;background-size:contain;background-repeat:no-repeat;background-position:50%;background-color:#eee}.description.sc-thumb-02-product{display:block;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:600;color:#686868;text-align:left;padding:18px 2px 10px}.button.sc-thumb-02-product{position:absolute;bottom:3px;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);font-family:'Open Sans',sans-serif;font-size:12px;text-decoration:none;color:#686868}.button.sc-thumb-02-product:hover{color:#353535}.button.sc-thumb-02-product:active{color:#020202}"},enumerable:!0,configurable:!0}),t}();export{MyComponent as Thumb02Product};