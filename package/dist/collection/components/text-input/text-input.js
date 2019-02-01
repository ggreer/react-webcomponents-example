export class TextInput {
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
    static get style() { return "/**style-placeholder:o-text-input:**/"; }
}
