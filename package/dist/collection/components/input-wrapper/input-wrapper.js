export class InputWrapper {
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
    static get style() { return "/**style-placeholder:o-input-wrapper:**/"; }
}
