import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { FormInterface } from '@okta/core.components.shared';
export declare class Form implements FormInterface {
    formTitle: string;
    read: boolean;
    submit: string;
    oSave: EventEmitter;
    oEdit: EventEmitter;
    onSubmit(e: MouseEvent): void;
    onEdit(e: MouseEvent): void;
    render(): JSX.Element;
}
