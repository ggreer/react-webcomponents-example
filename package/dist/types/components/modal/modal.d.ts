import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { ModalInterface, ModalTypes } from '@okta/core.components.shared';
export declare class Modal implements ModalInterface {
    modalTitle: string;
    type: ModalTypes;
    open: boolean;
    private id;
    oClose: EventEmitter;
    el: HTMLElement;
    show(): void;
    close(): void;
    handleClose(event: CustomEvent): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
