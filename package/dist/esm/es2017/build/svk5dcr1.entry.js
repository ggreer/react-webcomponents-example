/*! Built with http://stenciljs.com */
import { h } from '../o-components-ds.core.js';

class Button {
    constructor() {
        this.type = 'primary';
    }
    render() {
        const classes = ['button'];
        switch (this.type) {
            case 'primary':
                break;
            case 'secondary':
                classes.push('is-button-secondary');
                break;
            case 'danger':
                classes.push('is-button-danger');
                break;
            case 'danger-secondary':
                classes.push('is-button-danger');
                classes.push('is-button-secondary');
                break;
            default:
                throw new Error(`Unknown button type: ${this.type}`);
        }
        return (h("button", { class: classes.join(' '), disabled: this.disabled },
            h("slot", null)));
    }
    static get is() { return "o-button"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "el": {
            "elementRef": true
        },
        "href": {
            "type": String,
            "attr": "href"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "type": {
            "type": String,
            "attr": "type"
        }
    }; }
    static get style() { return "\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:300;src:url(/font/ProximaNova-Light.woff2) format(\"woff2\"),url(/font/ProximaNova-Light.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(/font/ProximaNova-Regular.woff2) format(\"woff2\"),url(/font/ProximaNova-Regular.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:600;src:url(/font/ProximaNova-Semibold.woff2) format(\"woff2\"),url(/font/ProximaNova-Semibold.woff) format(\"woff\")}o-button .button{display:inline-block;position:relative;margin:0;padding:.75em 1.875em;-webkit-transition-property:color,background-color,border-color,-webkit-transform;transition-property:color,background-color,border-color,-webkit-transform;transition-property:color,background-color,border-color,transform;transition-property:color,background-color,border-color,transform,-webkit-transform;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;border:1px solid transparent;border-radius:3px;background-color:#1662dd;color:#fff;font-family:Proxima Nova,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:1rem;font-weight:600;line-height:1}o-button .button.is-button-hover,o-button .button:hover{border-color:#124a94;background-color:#124a94}o-button .button:active{-webkit-transform:scale(.95);transform:scale(.95)}o-button .button.is-button-focus,o-button .button:focus{outline:0}o-button .button.is-button-focus:before,o-button .button:focus:before{content:\"\";display:block;position:absolute;top:50%;left:50%;width:calc(100% + .75em);height:calc(100% + .75em);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:2px dotted #5c6971;border-radius:calc(.375em + 3px - 2px)}o-button .button:disabled{border-color:transparent;background-color:#b7bcc0;pointer-events:none}o-button .is-button-secondary{border-color:#1662dd;background-color:#fff;color:#1662dd}o-button .is-button-secondary.is-button-hover,o-button .is-button-secondary:hover{border-color:#124a94;background-color:#fff;color:#124a94}o-button .is-button-secondary:disabled{border-color:#b7bcc0;background-color:#fff;color:#b7bcc0}o-button .is-button-danger{background-color:#dd0744}o-button .is-button-danger.is-button-hover,o-button .is-button-danger:hover{border-color:#b80047;background-color:#b80047}o-button .is-button-danger.is-button-secondary{border-color:#dd0744;background-color:#fff;color:#dd0744}o-button .is-button-danger.is-button-secondary.is-button-hover,o-button .is-button-danger.is-button-secondary:hover{border-color:#b80047;background-color:#fff;color:#b80047}o-button .is-button-danger.is-button-secondary:disabled{border-color:#b7bcc0;background-color:#fff;color:#b7bcc0}o-button .form--header .button{font-size:.76557rem}o-button .button+o-button .button,o-button .button+o-button o-button,o-button o-button+o-button .button,o-button o-button+o-button o-button{margin-left:.75em}.form:not([data-readonly]) o-button .form--header .button{display:none}"; }
}

class Form {
    constructor() {
        this.read = false;
        this.submit = 'Submit';
    }
    onSubmit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.oSave.emit();
    }
    onEdit(e) {
        e.preventDefault();
        e.stopPropagation();
        this.oEdit.emit();
    }
    render() {
        return (h("form", { class: "form", novalidate: true, "data-readonly": this.read },
            h("header", { class: "form--header" },
                h("h1", { class: "form--title", "data-se": "form-title" }, this.formTitle),
                this.read &&
                    h("o-button", { type: "secondary", "data-se": "edit-button", onClick: this.onEdit.bind(this) }, "Edit")),
            h("slot", { name: "form-content" }),
            h("section", { class: "form--actions" },
                h("slot", { name: "form-action-buttons" }),
                h("o-button", { onClick: this.onSubmit.bind(this), "data-se": "submit-button" }, this.submit)),
            h("footer", { class: "form--footer" },
                h("slot", { name: "form-footer" }))));
    }
    static get is() { return "o-form"; }
    static get properties() { return {
        "formTitle": {
            "type": String,
            "attr": "form-title"
        },
        "read": {
            "type": Boolean,
            "attr": "read"
        },
        "submit": {
            "type": String,
            "attr": "submit"
        }
    }; }
    static get events() { return [{
            "name": "oSave",
            "method": "oSave",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "oEdit",
            "method": "oEdit",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:300;src:url(/font/ProximaNova-Light.woff2) format(\"woff2\"),url(/font/ProximaNova-Light.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(/font/ProximaNova-Regular.woff2) format(\"woff2\"),url(/font/ProximaNova-Regular.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:600;src:url(/font/ProximaNova-Semibold.woff2) format(\"woff2\"),url(/font/ProximaNova-Semibold.woff) format(\"woff\")}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font:inherit;font-size:100%;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:\"\";content:none}table{border-spacing:0;border-collapse:collapse}.fieldset{margin:0 0 1.5rem}.fieldset:last-child{margin:0}.form{max-width:calc(50ch + 1.5rem + 1.5rem + 2px);padding:1.5rem;border:1px solid #b7bcc0;border-radius:3px}.form--header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 1.5rem}.form--title{margin:0;padding:0;color:#2f3f4a;font-size:1.70621rem;font-weight:600;line-height:1.25}.form--actions{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.form--actions:not(:last-child){margin-bottom:.75rem}[data-readonly] .form--actions{display:none}.form--footer,.form--hint{font-size:.87497rem}.form--hint{margin-top:.375rem;color:#899298}[data-invalid]~.form--hint{color:#dd0744}.fieldset--pair{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between}.fieldset--pair .number-input,.fieldset--pair .select-input,.fieldset--pair .text-input{width:calc(50% - .75rem)}.fieldset-flex{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:50ch}.fieldset-flex .label{-ms-flex-order:1;order:1}.fieldset-flex .fieldset--pair,.fieldset-flex .input--unavailable,.fieldset-flex .number-input,.fieldset-flex .select-input,.fieldset-flex .text-input{-ms-flex-order:2;order:2}.fieldset-flex .input--unavailable{margin:0}.fieldset-flex .form--hint{-ms-flex-order:3;order:3}.input-legend{margin:0 0 .375rem;font-size:1rem}.group-legend,.input-legend{color:#2f3f4a;font-weight:600}.group-legend{margin:0 0 .75rem;font-size:1.30622rem}.modal .form{padding:0;border:0}.modal .form--header{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0}"; }
}

export { Button as OButton, Form as OForm };
