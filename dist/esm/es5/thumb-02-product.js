/*! Built with http://stenciljs.com */
import { h } from './my-domain-com.core.js';
var MyComponent = /** @class */ (function () {
    function MyComponent() {
        this.target = '_self';
    }
    MyComponent.prototype.render = function () {
        return [
            h("div", null, h("div", { class: "thumb", style: { "background-image": "url(" + this.thumb + ")" } }), h("div", { class: "description" }, this.description), h("div", null, h("a", { href: this.url, class: "button", target: this.target }, this.buttonText)))
        ];
    };
    Object.defineProperty(MyComponent, "is", {
        get: function () { return "thumb-02-product"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "properties", {
        get: function () {
            return {
                "buttonText": {
                    "type": String,
                    "attr": "button-text"
                },
                "description": {
                    "type": String,
                    "attr": "description"
                },
                "el": {
                    "elementRef": true
                },
                "target": {
                    "type": String,
                    "attr": "target"
                },
                "thumb": {
                    "type": String,
                    "attr": "thumb"
                },
                "url": {
                    "type": String,
                    "attr": "url"
                }
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return "\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);\n:host {\n  display: inline-block;\n  margin: 5px 3px;\n  vertical-align: top; }\n\n:host > div {\n  position: relative;\n  text-align: center;\n  border: 1px solid #c0c0c0;\n  padding: 10px;\n  width: 215px;\n  min-height: 360px; }\n\n.thumb {\n  position: relative;\n  height: 170px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #eee; }\n\n.description {\n  display: block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #686868;\n  text-align: left;\n  padding: 18px 2px 10px 2px; }\n\n.button {\n  position: absolute;\n  bottom: 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n  transform: translate(-50%);\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #686868; }\n  .button:hover {\n    color: #353535; }\n  .button:active {\n    color: #020202; }"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as Thumb02Product };
