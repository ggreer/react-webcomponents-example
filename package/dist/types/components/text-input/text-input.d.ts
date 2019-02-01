import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
import { TextInputInterface } from '@okta/core.components.shared';
export declare class TextInput implements TextInputInterface {
    disabled: boolean;
    readonly: boolean;
    placeholder: string;
    name: string;
    value: string;
    label: string;
    explain: string;
    oChange: EventEmitter;
    private onInput;
    render(): JSX.Element;
}
