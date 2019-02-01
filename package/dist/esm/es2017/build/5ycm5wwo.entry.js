/*! Built with http://stenciljs.com */
import { h } from '../o-components-ds.core.js';

var version="0.3.1",classCallCheck=function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")},createClass=function(){function e(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i);}}return function(o,t,i){return t&&e(o.prototype,t),i&&e(o,i),o}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)},MicroModal=function(){var e=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],o=function(){function o(e){var t=e.targetModal,i=e.triggers,n=void 0===i?[]:i,a=e.onShow,r=void 0===a?function(){}:a,s=e.onClose,l=void 0===s?function(){}:s,c=e.openTrigger,d=void 0===c?"data-micromodal-trigger":c,u=e.closeTrigger,h=void 0===u?"data-micromodal-close":u,f=e.disableScroll,v=void 0!==f&&f,g=e.disableFocus,m=void 0!==g&&g,b=e.awaitCloseAnimation,y=void 0!==b&&b,k=e.debugMode,w=void 0!==k&&k;classCallCheck(this,o),this.modal=document.getElementById(t),this.config={debugMode:w,disableScroll:v,openTrigger:d,closeTrigger:h,onShow:r,onClose:l,awaitCloseAnimation:y,disableFocus:m},n.length>0&&this.registerTriggers.apply(this,toConsumableArray(n)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this);}return createClass(o,[{key:"registerTriggers",value:function(){for(var e=this,o=arguments.length,t=Array(o),i=0;i<o;i++)t[i]=arguments[i];t.forEach(function(o){o.addEventListener("click",function(){return e.showModal()});});}},{key:"showModal",value:function(){this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add("is-open"),this.setFocusToFirstNode(),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.onShow(this.modal);}},{key:"closeModal",value:function(){var e=this.modal;this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement.focus(),this.config.onClose(this.modal),this.config.awaitCloseAnimation?this.modal.addEventListener("animationend",function o(){e.classList.remove("is-open"),e.removeEventListener("animationend",o,!1);},!1):e.classList.remove("is-open");}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var o=document.querySelector("body");switch(e){case"enable":Object.assign(o.style,{overflow:"initial",height:"initial"});break;case"disable":Object.assign(o.style,{overflow:"hidden",height:"100vh"});}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown);}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown);}},{key:"onClick",value:function(e){e.target.hasAttribute(this.config.closeTrigger)&&(this.closeModal(),e.preventDefault());}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.maintainFocus(e);}},{key:"getFocusableNodes",value:function(){var o=this.modal.querySelectorAll(e);return Object.keys(o).map(function(e){return o[e]})}},{key:"setFocusToFirstNode",value:function(){if(!this.config.disableFocus){var e=this.getFocusableNodes();e.length&&e[0].focus();}}},{key:"maintainFocus",value:function(e){var o=this.getFocusableNodes();if(this.modal.contains(document.activeElement)){var t=o.indexOf(document.activeElement);e.shiftKey&&0===t&&(o[o.length-1].focus(),e.preventDefault()),e.shiftKey||t!==o.length-1||(o[0].focus(),e.preventDefault());}else o[0].focus();}}]),o}(),t=null,i=function(e,o){var t=[];return e.forEach(function(e){var i=e.attributes[o].value;void 0===t[i]&&(t[i]=[]),t[i].push(e);}),t},n=function(e){if(!document.getElementById(e))return console.warn("MicroModal v"+version+": ❗Seems like you have missed %c'"+e+"'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'+e+'"></div>'),!1},a=function(e){if(e.length<=0)return console.warn("MicroModal v"+version+": ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'),!1},r=function(e,o){if(a(e),!o)return !0;for(var t in o)n(t);return !0};return {init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=[].concat(toConsumableArray(document.querySelectorAll("["+t.openTrigger+"]"))),a=i(n,t.openTrigger);if(!0!==t.debugMode||!1!==r(n,a))for(var s in a){var l=a[s];t.targetModal=s,t.triggers=[].concat(toConsumableArray(l)),new o(t);}},show:function(e,i){var a=i||{};a.targetModal=e,!0===a.debugMode&&!1===n(e)||(t=new o(a)).showModal();},close:function(){t.closeModal();}}}();

let MODAL_INDEX = 0;
class Modal {
    constructor() {
        this.type = 'standard';
        this.open = false;
    }
    show() {
        this.open = true;
        MicroModal.show(this.id);
    }
    close() {
        this.open = false;
        MicroModal.close(this.id);
    }
    handleClose(event) {
        this.open = false;
        this.oClose.emit(event);
    }
    componentWillLoad() {
        this.id = `modal-${MODAL_INDEX}`;
        MODAL_INDEX = MODAL_INDEX + 1;
    }
    componentDidLoad() {
        if (this.open) {
            this.show();
        }
    }
    render() {
        let modalClass = 'modal';
        if (this.type === 'danger') {
            modalClass += ' is-modal-danger';
        }
        return (h("div", { class: modalClass, id: this.id, "aria-hidden": "true" },
            h("div", { class: "modal--overlay", tabindex: "-1", "data-micromodal-close": true },
                h("div", { class: "modal--dialog", role: "dialog", "aria-modal": "true", "aria-labelledby": "modal-standard-title" },
                    h("header", { class: "modal--header" },
                        h("h1", { class: "modal--title" }, this.modalTitle),
                        h("button", { class: "modal--close", "aria-label": "Close modal", "data-micromodal-close": true, onClick: this.handleClose.bind(this) })),
                    h("main", { class: "modal--content" },
                        h("slot", { name: "content" })),
                    h("footer", { class: "modal--footer" },
                        h("slot", { name: "footer" }))))));
    }
    static get is() { return "o-modal"; }
    static get properties() { return {
        "close": {
            "method": true
        },
        "el": {
            "elementRef": true
        },
        "modalTitle": {
            "type": String,
            "attr": "modal-title"
        },
        "open": {
            "type": Boolean,
            "attr": "open"
        },
        "show": {
            "method": true
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get events() { return [{
            "name": "oClose",
            "method": "oClose",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:300;src:url(/font/ProximaNova-Light.woff2) format(\"woff2\"),url(/font/ProximaNova-Light.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(/font/ProximaNova-Regular.woff2) format(\"woff2\"),url(/font/ProximaNova-Regular.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:600;src:url(/font/ProximaNova-Semibold.woff2) format(\"woff2\"),url(/font/ProximaNova-Semibold.woff) format(\"woff\")}.modal--overlay{display:-ms-flexbox;display:flex;position:fixed;top:0;right:0;bottom:0;left:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:rgba(47,63,74,.9)}.modal--dialog{position:relative;max-width:calc(50ch + 1.5rem + 1.5rem);max-height:calc(100vh - 3rem);padding:1.875rem 1.5rem 0;overflow-y:auto;border-radius:3px;background-color:#fff}.modal--dialog:before{content:\"\";position:absolute;top:0;left:0;width:100%;height:.375rem;background-color:#1662dd}.modal--header{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between}.modal--close{width:1.5rem;height:1.5rem;padding:0;border:0;background-color:transparent;background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2219%22%20height%3D%2219%22%20fill%3D%22none%22%3E%0A%20%20%3Cpath%20stroke%3D%22%232F3F4A%22%20stroke-width%3D%221.5%22%20d%3D%22M1%2018L18%201M18%2018L1%201%22%2F%3E%0A%3C%2Fsvg%3E%0A\");background-repeat:no-repeat;background-position:50%}.modal--title{margin-top:0;margin-bottom:0;color:#2f3f4a;font-size:1.30622rem;font-weight:600;line-height:1.25}.modal--content{padding:1.5rem 0 3rem;font-size:1rem}.modal--footer{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;padding-bottom:1.5rem}.is-modal-danger .modal--dialog:before{background-color:#dd0744}\@-webkit-keyframes overlay-in{0%{opacity:0}to{opacity:1}}\@keyframes overlay-in{0%{opacity:0}to{opacity:1}}\@-webkit-keyframes overlay-out{0%{opacity:1}to{opacity:0}}\@keyframes overlay-out{0%{opacity:1}to{opacity:0}}\@-webkit-keyframes dialog-in{0%{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@keyframes dialog-in{0%{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}to{-webkit-transform:scale(1);transform:scale(1);opacity:1}}\@-webkit-keyframes dialog-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}}\@keyframes dialog-out{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}to{-webkit-transform:scale(.7);transform:scale(.7);opacity:0}}.modal{display:none}.modal.is-open{display:block}.modal[aria-hidden=false] .modal--overlay{-webkit-animation:overlay-in .2s linear;animation:overlay-in .2s linear}.modal[aria-hidden=false] .modal--dialog{-webkit-animation:dialog-in .2s linear;animation:dialog-in .2s linear}.modal[aria-hidden=true] .modal--overlay{-webkit-animation:overlay-out .2s linear;animation:overlay-out .2s linear}.modal[aria-hidden=true][aria-hidden=true] .modal--dialog{-webkit-animation:dialog-out .2s linear;animation:dialog-out .2s linear}"; }
}

export { Modal as OModal };
