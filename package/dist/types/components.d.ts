/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';


import {
  ButtonTypes,
  ModalTypes,
} from '@okta/core.components.shared';


export namespace Components {

  interface OButton {
    'disabled': boolean;
    'href': string;
    'icon': string;
    'type': ButtonTypes;
  }
  interface OButtonAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'href'?: string;
    'icon'?: string;
    'type'?: ButtonTypes;
  }

  interface OForm {
    'formTitle': string;
    'read': boolean;
    'submit': string;
  }
  interface OFormAttributes extends StencilHTMLAttributes {
    'formTitle'?: string;
    'onOEdit'?: (event: CustomEvent) => void;
    'onOSave'?: (event: CustomEvent) => void;
    'read'?: boolean;
    'submit'?: string;
  }

  interface OInputWrapper {
    'explain': string;
    'label': string;
  }
  interface OInputWrapperAttributes extends StencilHTMLAttributes {
    'explain'?: string;
    'label'?: string;
  }

  interface OModal {
    'close': () => void;
    'modalTitle': string;
    'open': boolean;
    'show': () => void;
    'type': ModalTypes;
  }
  interface OModalAttributes extends StencilHTMLAttributes {
    'modalTitle'?: string;
    'onOClose'?: (event: CustomEvent) => void;
    'open'?: boolean;
    'type'?: ModalTypes;
  }

  interface OTextInput {
    'disabled': boolean;
    'explain': string;
    'label': string;
    'name': string;
    'placeholder': string;
    'readonly': boolean;
    'value': string;
  }
  interface OTextInputAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'explain'?: string;
    'label'?: string;
    'name'?: string;
    'onOChange'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'readonly'?: boolean;
    'value'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'OButton': Components.OButton;
    'OForm': Components.OForm;
    'OInputWrapper': Components.OInputWrapper;
    'OModal': Components.OModal;
    'OTextInput': Components.OTextInput;
  }

  interface StencilIntrinsicElements {
    'o-button': Components.OButtonAttributes;
    'o-form': Components.OFormAttributes;
    'o-input-wrapper': Components.OInputWrapperAttributes;
    'o-modal': Components.OModalAttributes;
    'o-text-input': Components.OTextInputAttributes;
  }


  interface HTMLOButtonElement extends Components.OButton, HTMLStencilElement {}
  var HTMLOButtonElement: {
    prototype: HTMLOButtonElement;
    new (): HTMLOButtonElement;
  };

  interface HTMLOFormElement extends Components.OForm, HTMLStencilElement {}
  var HTMLOFormElement: {
    prototype: HTMLOFormElement;
    new (): HTMLOFormElement;
  };

  interface HTMLOInputWrapperElement extends Components.OInputWrapper, HTMLStencilElement {}
  var HTMLOInputWrapperElement: {
    prototype: HTMLOInputWrapperElement;
    new (): HTMLOInputWrapperElement;
  };

  interface HTMLOModalElement extends Components.OModal, HTMLStencilElement {}
  var HTMLOModalElement: {
    prototype: HTMLOModalElement;
    new (): HTMLOModalElement;
  };

  interface HTMLOTextInputElement extends Components.OTextInput, HTMLStencilElement {}
  var HTMLOTextInputElement: {
    prototype: HTMLOTextInputElement;
    new (): HTMLOTextInputElement;
  };

  interface HTMLElementTagNameMap {
    'o-button': HTMLOButtonElement
    'o-form': HTMLOFormElement
    'o-input-wrapper': HTMLOInputWrapperElement
    'o-modal': HTMLOModalElement
    'o-text-input': HTMLOTextInputElement
  }

  interface ElementTagNameMap {
    'o-button': HTMLOButtonElement;
    'o-form': HTMLOFormElement;
    'o-input-wrapper': HTMLOInputWrapperElement;
    'o-modal': HTMLOModalElement;
    'o-text-input': HTMLOTextInputElement;
  }


}
