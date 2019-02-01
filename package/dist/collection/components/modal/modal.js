import MicroModal from 'micromodal';
let MODAL_INDEX = 0;
export class Modal {
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
    static get style() { return "/**style-placeholder:o-modal:**/"; }
}
