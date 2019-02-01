
// OComponentsDs: Custom Elements Define Library, ES Module/es2017 Target

import { defineCustomElement } from './o-components-ds.core.js';
import {
  Button,
  Form,
  InputWrapper,
  Modal,
  TextInput
} from './o-components-ds.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    Button,
    Form,
    InputWrapper,
    Modal,
    TextInput
  ], opts);
}
