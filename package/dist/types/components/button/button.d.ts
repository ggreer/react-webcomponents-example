import '../../stencil.core';
import { ButtonTypes, ButtonInterface } from '@okta/core.components.shared';
export declare class Button implements ButtonInterface {
    type: ButtonTypes;
    disabled: boolean;
    href: string;
    icon: string;
    el: HTMLElement;
    render(): JSX.Element;
}
