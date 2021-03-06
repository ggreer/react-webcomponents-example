/*! Built with http://stenciljs.com */
import { h } from '../o-components-ds.core.js';

class InputWrapper {
    render() {
        return (h("fieldset", { class: "fieldset" },
            h("div", { class: "fieldset-flex" },
                this.label &&
                    h("label", { class: "label", "data-se": "o-form-label" }, this.label),
                h("slot", null),
                this.explain &&
                    h("aside", { "data-se": "o-form-explain", class: "form--hint" }, this.explain))));
    }
    static get is() { return "o-input-wrapper"; }
    static get properties() { return {
        "explain": {
            "type": String,
            "attr": "explain"
        },
        "label": {
            "type": String,
            "attr": "label"
        }
    }; }
    static get style() { return "\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:300;src:url(/font/ProximaNova-Light.woff2) format(\"woff2\"),url(/font/ProximaNova-Light.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(/font/ProximaNova-Regular.woff2) format(\"woff2\"),url(/font/ProximaNova-Regular.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:600;src:url(/font/ProximaNova-Semibold.woff2) format(\"woff2\"),url(/font/ProximaNova-Semibold.woff) format(\"woff\")}.label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:.375rem;color:#2f3f4a;font-size:1rem;font-weight:600}.password-input~.label:after{content:\"\";width:1rem;height:1rem;background-repeat:no-repeat;background-position:50%;-webkit-filter:invert(30%) sepia(91%) saturate(3619%) hue-rotate(211deg) brightness(91%) contrast(90%);filter:invert(30%) sepia(91%) saturate(3619%) hue-rotate(211deg) brightness(91%) contrast(90%)}.password-input[type=password]~.label:after{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20125%22%3E%0A%20%20%3Cpath%20d%3D%22M92.6%2043.9c-14.2-14.1-29-21.1-43.9-20.7-19.7.4-34.5%2013.3-41.5%2020.9-2.9%203.1-2.9%208.6%200%2011.8%207%207.6%2021.8%2020.5%2041.5%2021h1c14.6%200%2029.1-7%2042.9-20.8%201.5-1.5%202.4-3.7%202.4-6.1%200-2.4-.9-4.6-2.4-6.1zM50%2070.9c-11.5%200-20.9-9.4-20.9-20.9%200-11.5%209.4-20.9%2020.9-20.9%2011.5%200%2020.9%209.4%2020.9%2020.9%200%2011.5-9.4%2020.9-20.9%2020.9zm0-34.8c-7.7%200-13.9%206.2-13.9%2013.9S42.3%2063.9%2050%2063.9%2063.9%2057.7%2063.9%2050%2057.7%2036.1%2050%2036.1zM50%2059c-4.9%200-9-4-9-9%200-1.1.9-2%202-2s2%20.9%202%202c0%202.7%202.2%205%205%205%201.1%200%202%20.9%202%202s-.9%202-2%202z%22%2F%3E%0A%3C%2Fsvg%3E%0A\")}.password-input[type=text]~.label:after{background-image:url(\"data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20125%22%3E%0A%20%20%3Cpath%20d%3D%22M95%2049.3c0%202.4-.9%204.6-2.4%206.1-13.9%2013.8-28.3%2020.8-42.9%2020.8h-1c-4-.1-7.7-.7-11.3-1.6L43%2069c2.2.8%204.6%201.2%207.1%201.2%2011.5%200%2020.9-9.4%2020.9-20.9%200-2.5-.5-4.9-1.2-7l9.9-9.9c4.4%203%208.8%206.6%2013.1%2010.9%201.3%201.4%202.2%203.6%202.2%206zM50%2063.2c7.7%200%2013.9-6.2%2013.9-13.9%200-.4%200-.9-.1-1.3L48.7%2063.2H50zm34.6-44.4L18.1%2085.3c-.5.3-1%20.4-1.5.4-.8%200-1.5-.3-2.1-.9-1.2-1.2-1.2-3.1%200-4.2l10.9-10.9C17.3%2065.2%2011%2059.4%207.2%2055.2c-2.9-3.1-2.9-8.7%200-11.8%207-7.7%2021.8-20.5%2041.5-21%206.7-.2%2013.4%201.2%2020%204l11.2-11.2c1.2-1.2%203.1-1.2%204.2%200%201%201%201.1%202.5.5%203.6zM45.1%2050c0-.2-.1-.5-.1-.7%200-1.1-.9-2-2-2s-2%20.9-2%202c0%201.4.3%202.7.9%203.8l3.2-3.1zm17.4-17.4C59%2030%2054.7%2028.4%2050%2028.4c-11.5%200-20.9%209.4-20.9%2020.9%200%204.7%201.6%209%204.2%2012.5l5-5c-1.4-2.2-2.2-4.7-2.2-7.5%200-7.7%206.2-13.9%2013.9-13.9%202.8%200%205.3.8%207.5%202.2l5-5z%22%2F%3E%0A%3C%2Fsvg%3E%0A\")}.number-input:disabled~.label,.text-input:disabled~.label{color:rgba(92,105,113,.5);pointer-events:none}.number-input:optional~.label:after,.text-input:optional~.label:after{content:\"Optional\";padding:0 .375em;color:#899298;font-size:.87497rem;font-weight:400}.number-input[data-invalid]~.label,.text-input[data-invalid]~.label{color:#dd0744}.fieldset{margin:0 0 1.5rem}.fieldset:last-child{margin:0}.form{max-width:calc(50ch + 1.5rem + 1.5rem + 2px);padding:1.5rem;border:1px solid #b7bcc0;border-radius:3px}.form--header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:0 0 1.5rem}.form--title{margin:0;padding:0;color:#2f3f4a;font-size:1.70621rem;font-weight:600;line-height:1.25}.form--actions{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.form--actions:not(:last-child){margin-bottom:.75rem}[data-readonly] .form--actions{display:none}.form--footer,.form--hint{font-size:.87497rem}.form--hint{margin-top:.375rem;color:#899298}[data-invalid]~.form--hint{color:#dd0744}.fieldset--pair{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:justify;justify-content:space-between}.fieldset--pair .number-input,.fieldset--pair .select-input,.fieldset--pair .text-input{width:calc(50% - .75rem)}.fieldset-flex{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-width:50ch}.fieldset-flex .label{-ms-flex-order:1;order:1}.fieldset-flex .fieldset--pair,.fieldset-flex .input--unavailable,.fieldset-flex .number-input,.fieldset-flex .select-input,.fieldset-flex .text-input{-ms-flex-order:2;order:2}.fieldset-flex .input--unavailable{margin:0}.fieldset-flex .form--hint{-ms-flex-order:3;order:3}.input-legend{margin:0 0 .375rem;font-size:1rem}.group-legend,.input-legend{color:#2f3f4a;font-weight:600}.group-legend{margin:0 0 .75rem;font-size:1.30622rem}.modal .form{padding:0;border:0}.modal .form--header{position:absolute;width:1px;height:1px;margin:-1px;padding:0;overflow:hidden;clip:rect(0 0 0 0);border:0}"; }
}

class TextInput {
    constructor() {
        this.disabled = false;
        this.readonly = false;
        this.value = '';
        this.onInput = (ev) => {
            const input = ev.target || null;
            if (input) {
                this.value = input.value || '';
                this.oChange.emit({
                    value: this.value
                });
            }
        };
    }
    render() {
        const selector = `o-form-input-${this.name}`;
        return (h("o-input-wrapper", { explain: this.explain, label: this.label },
            h("input", { class: "text-input", type: "text", name: this.name, value: this.value, placeholder: this.placeholder, spellcheck: "false", disabled: this.disabled, readonly: this.readonly, onInput: this.onInput, "data-se": selector })));
    }
    static get is() { return "o-text-input"; }
    static get properties() { return {
        "disabled": {
            "type": Boolean,
            "attr": "disabled"
        },
        "explain": {
            "type": String,
            "attr": "explain"
        },
        "label": {
            "type": String,
            "attr": "label"
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "placeholder": {
            "type": String,
            "attr": "placeholder"
        },
        "readonly": {
            "type": Boolean,
            "attr": "readonly"
        },
        "value": {
            "type": String,
            "attr": "value",
            "mutable": true
        }
    }; }
    static get events() { return [{
            "name": "oChange",
            "method": "oChange",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:300;src:url(/font/ProximaNova-Light.woff2) format(\"woff2\"),url(/font/ProximaNova-Light.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:400;src:url(/font/ProximaNova-Regular.woff2) format(\"woff2\"),url(/font/ProximaNova-Regular.woff) format(\"woff\")}\@font-face{font-family:Proxima Nova;font-style:normal;font-weight:600;src:url(/font/ProximaNova-Semibold.woff2) format(\"woff2\"),url(/font/ProximaNova-Semibold.woff) format(\"woff\")}.text-input{display:block;position:relative;width:100%;max-width:50ch;margin:0;padding:.75rem;-webkit-transition-property:border-color,background-color;transition-property:border-color,background-color;-webkit-transition-duration:.25s;transition-duration:.25s;-webkit-transition-timing-function:ease-in-out;transition-timing-function:ease-in-out;border:1px solid #b7bcc0;border-radius:3px;background-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#5c6971;font-family:Proxima Nova,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen-Sans,Ubuntu,Cantarell,Helvetica Neue,sans-serif;font-size:1rem;line-height:1.25}.text-input:focus,.text-input:hover{border-color:#1662dd}.text-input:disabled{opacity:.5;pointer-events:none}.text-input[readonly]{padding-top:0;padding-right:0;padding-left:0;border:0;background-color:transparent}.text-input[data-invalid]{border-color:#dd0744;background-color:#fee6ea}.text-input::-webkit-input-placeholder{color:#899298}.text-input:-ms-input-placeholder{color:#899298}.text-input::-ms-input-placeholder{color:#899298}.text-input::placeholder{color:#899298}.text-area{min-width:1.5rem;max-width:50ch;min-height:3rem}"; }
}

export { InputWrapper as OInputWrapper, TextInput as OTextInput };
