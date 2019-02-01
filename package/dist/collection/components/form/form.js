export class Form {
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
    static get style() { return "/**style-placeholder:o-form:**/"; }
}
