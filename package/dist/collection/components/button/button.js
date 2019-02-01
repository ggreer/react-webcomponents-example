export class Button {
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
    static get style() { return "/**style-placeholder:o-button:**/"; }
}
