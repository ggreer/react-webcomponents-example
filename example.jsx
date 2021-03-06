// import React from "react";
// import ReactDOM from "react-dom";

/* global React: false, ReactDOM: false */

// fieldset component. Wraps inputs in the correct markup & classes for Nim.
const FieldSet = ({ label, aside, children, error }) => <fieldset className="fieldset">
  <div className={`fieldset-flex ${error ? 'error' : ''}`}>
    { children }
    { label && <label className="label">{ label }</label> }
    { aside && <aside className="form--hint">{ aside }</aside> }
    { error && <aside className="form--hint">{ error }</aside>}
  </div>
</fieldset>;

/* TextInput component - React counterpart to o-text-input. Uses FieldSet component above.
 * This pattern could be used by other components for checkboxes, selects, etc.
 */
const TextInput = React.forwardRef(({ label, aside, error, required = true, ...otherProps }, ref) => <FieldSet label={label} aside={aside} error={error}>
  { /* Nim styles data-invalid="false" as red. Work around this by un-setting the attribute.
     * Nim also adds an "optional" text next to non-required inputs, so default to required.
     */}
  <input type="text" className="text-input" data-invalid={error ? true : undefined} ref={ref} required={required} {...otherProps} />
</FieldSet>);


// React wrapper for o-text-input. Very incomplete. Has bugs.
class OTextInput extends React.Component {
  constructor (props) {
    super(props);
    this.input = React.createRef();

    this.onChange = e => {
      if (this.props.onChange) {
        this.props.onChange(e);
      }
      if (this.props.value !== undefined) {
        e.target.setAttribute('value', this.props.value || '');
      }
    };
  }

  focus () {
    this.input.current.focus();
  }

  get value () {
    return this.input.current.getAttribute('value');
  }

  componentDidUpdate (previousProps) {
    const { value } = this.props;
    if (value !== undefined && previousProps.value !== value) {
      this.input.current.setAttribute('value', value || '');
    }
  }

  componentDidMount () {
    this.input.current.addEventListener('oChange', this.onChange);
  }

  componentWillUnmount () {
    this.input.current.removeEventListener('oChange', this.onChange);
  }

  render () {
    const { defaultValue, value, className, ...otherProps } = this.props;
    return <o-text-input class={className} value={value || defaultValue} ref={this.input} {...otherProps}></o-text-input>;
  }
}

const Title = ({ id, children }) => <h1 id={id} className="form--title">
  <a className="hover" href={`#${id}`}>{ children }</a>
</h1>;

class Refs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      oValue: '1',
      value: 'a',
    };
    this.setOValue = e => this.setState({ oValue: e.target.value });
    this.setValue = e => this.setState({ value: e.target.value });
    this.ref = React.createRef();
    this.oRef = React.createRef();
  }

  render () {
    const { value, oValue } = this.state;

    return <form className="form">
      <Title id="refs">Races and Refs</Title>
      <p>
        React <code>Components</code> are instantiated by the framework to create a virtual DOM.
        React&apos;s <a href="https://reactjs.org/docs/refs-and-the-dom.html"><code>ref</code> API</a> provides a way to access the realized DOM counterpart of a given component.
      </p>
      <p>
        In the example below, we control the input directly and use a <code>ref</code> to ask the wrapper what it thinks the value is.
        The ref&apos;s <code>value</code> attribute and our <code>value</code> sometimes differ because of the two way data binding.
      </p>
      <p>
        It is probably possible to fix this bug in the wrapper by calling setState and implementing something like <a href="https://www.thinkful.com/projects/understanding-the-digest-cycle-528/">AngularJS&apos;s digest cycle</a>
        , but it was the 3rd or 4th race condition we ran into after a few hours of combined effort.
        The React equivalent of <code>o-text-input</code> took us a few minutes to write.
      </p>
      <TextInput label="Native Input" aside="Can be changed by user. Always up to date." name="native" value={value} onChange={this.setValue} ref={this.ref} />
      Value from input ref: { this.ref.current && this.ref.current.value }
      <br/>
      <br/>
      <OTextInput label="O-text-input Wrapper" name="wc1" value={oValue} onChange={this.setOValue} ref={this.oRef} explain="Can be changed by user, but ref value lags reality." />
      <br/>
      Value from o-text-input ref: { this.oRef.current && this.oRef.current.value }
    </form>;
  }
}

class ControlledInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eventKeys: [''],
      value: "value",
    };
    this.setValue = e => {
      this.setState({
        eventKeys: Object.keys(e),
        value: e.target.value,
      });
    };
  }

  render () {
    const { eventKeys, value } = this.state;
    return <form className="form">
      <Title id="events">Events</Title>
      <p>
        Most events bubble up from the actual input because our Web Components aren&apos;t using the shadow DOM.
        One exception is <code>o-text-input</code>&apos;s <code>oChange</code> event, which is emitted instead of the native <code>input</code> event.
      </p>

      From React&apos;s <a href="https://reactjs.org/docs/events.html">SyntheticEvent docs</a>:
      <blockquote>
        Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event.
        It has the same interface as the browser&apos;s native event, including <code>stopPropagation()</code> and <code>preventDefault()</code>, except the events work identically across all browsers.
        React normalizes events so that they have consistent properties across different browsers.
      </blockquote>

      <p>
        The React <code>o-text-input</code> wrapper must manually bind to <code>oChange</code> using <code>addEventListener()</code>.
        This bypasses React&apos;s event normalization.
      </p>
      <p>
        Solutions include:
      </p>
      <ol>
        <li>Abandon event compatibility with React.</li>
        <li>Do not use custom events in Web Components.</li>
        <li>Duplicate React&apos;s event normalization.</li>
        <li>Do not use Web Components in React.</li>
      </ol>

      <TextInput label="Native Input" name="native" value={value} onChange={this.setValue} />
      <OTextInput label="(Controlled) o-text-input" name="wc1" value={value} onChange={this.setValue} />
      <p>
        Keys from change event:
        { eventKeys && <br/> }
        { eventKeys.map(k => <React.Fragment key={k}>{k}<br/></React.Fragment>)}
      </p>
    </form>;
  }
}
// In React, passing a <code>value=</code> property to an input creates a <a href="https://reactjs.org/docs/forms.html#controlled-components">controlled input</a>. The value is entirely controlled by the Component that renders it.
// React informs us when a controlled input changes by way of the <a href="https://reactjs.org/docs/handling-events.html"><code>onChange</code> event handler</a>:
class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: null,
    };
    this.setOValue = e => this.setState({ oValue: e.target.value });
    this.validate = e => this.setState({ error: (e.target.value || '').endsWith('e') ? undefined : 'Value must end with `e`.'});
  }

  render () {
    const { error } = this.state;
    return <form className="form">
      <Title id="interfaces">Interfaces</Title>
      <p>
        Custom events emitted by Web Components change the event&apos;s target from the actual emitter (<code>input</code>) to the web component (<code>o-text-input</code>).
        &nbsp;<code>o-text-input</code> is currently missing most of the native input&apos;s <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties">methods and properties</a>:
      </p>
      <code>
        blur()
        click()
        focus()
        select()
        setSelectionRange()
        setRangeText()
        setCustomValidity()
        checkValidity()
        reportValidity()
      </code>
      <br/>
      <br/>
      <code>
        name,
        type,
        disabled,
        autofocus,
        required,
        value,
        validity,
        validationMessage,
        willValidate,
        autocomplete,
        max,
        maxLength,
        min,
        minLength,
        pattern,
        placeholder,
        readOnly,
        selectionStart,
        selectionEnd,
        selectionDirection,
        size,
        tabindex,
        data-invalid
      </code>
      <p>
        Besides the ones listed above, there are input-specific methods and several vendor-specific methods/properties potentially used by libraries.
        These missing methods and properties also break the expected interface of <code>inputs</code> accessed via <code>ref</code>s.
      </p>
      <br />
      <TextInput
        label="Native Input"
        aside={
          <React.Fragment>
            Handles `focus`. Shows error if data is invalid. Button is correctly positioned.
            <br />
            <br />
            <button type="button" className="button is-button-primary" onClick={() => this.input.focus()}>Focus input</button>
          </React.Fragment>
        }
        ref={r => this.input = r}
        onClick={e => console.log('onClick', e.target)}
        onChange={this.validate}
        error={error}
      />

      <OTextInput
        ref={r => this.oInput = r}
        onClick={e => console.log('WC onClick', e.target)}
        label="Web component input"
        explain='Does not handle `focus`. Does not show error if data-invalid="true".'
        onChange={this.setOValue} data-invalid={error ? true : undefined}>
        <button type="button" onClick={() => this.oInput.focus()}>focus WC</button>
      </OTextInput>
    </form>;
  }
}

const Styles = () => {
  const label = <code><img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> http://</code>;
  return <form className="form">
    <Title id="styles">Idiomatic Code, Composition, and Customization</Title>
    <p>
      Web Components may only accept attributes that are strings.
      React Components can receive any type of data.
      In this case, the input&apos;s <code>label</code> is actually a short snippet:
    </p>
    <pre>{`const label = <code>
    <img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> 
    http://...
  </code>
  ...
  <FieldSet label={label} ... />`}</pre>
    <p>
      This is a common pattern in React, which strongly prefers composition over other abstractions.
      Components themselves can be (and commonly are) passed as arguments to other Components, like so:
    </p>

    <pre>{`const CustomLabel = (props) => <code style={props.style}>
    <img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> 
    http://...
  </code>
  ...
  <FieldSet label={CustomLabel} ... />`}</pre>
    <p>
      This sort of idiomatic interface (Higher Order Components et al) is not possible with slots. Web Components cannot operate on React Components, only the DOM nodes they render.
      E.g, Web Components can not accept a <i>p tag</i> in a slot.
      Even something trivial in React (like passing a list of strings to a component) becomes hard.
    </p>
    <p>
      Because React <code>style</code> and <code>className</code> props are applied directly to the <code>o-text-input</code>, there is no clean way to customize <code>o-text-input</code>&apos;s <code>label</code>.
      These sorts of one-off problems inevitably turn into bikesheds and generate Frankenstein interfaces because universal (Web) Components must satisfy all product requirements from all the products that use them.
    </p>
    <TextInput label={label} style={{fontFamily: 'Impact'}} defaultValue="Component as label. Input with Impact font." />
    <OTextInput label={label} style={{fontFamily: 'Impact'}} className="hello" defaultValue="Broken label with Impact font. Input with normal font." />
  </form>;
};

ReactDOM.render(<React.Fragment>
  <h1 className="form--title">React and Web Components</h1>
  <p>
    The source code for this page is available at <a href="https://github.com/ggreer/react-webcomponents-example">https://github.com/ggreer/react-webcomponents-example</a>. You can also play around with a <a href="https://codesandbox.io/s/zk3qvm5983">code sandbox</a>.
  </p>
  <p>
    This page contains some examples of using the o-text-input web component in React and the issues that arise. General problems are:
  </p>
  <ul>
    <li>React is declarative, while Web Components tend to have many imperative interfaces. (eg: <code>&lt;Modal open={'{'}true{'}'}&gt;</code> vs <code>modal.open()</code>)</li>
    <li>React is designed for one way data binding. Data is passed from parent components to child components. Web Components have their own state which must be synced back up into React-land. Doing this correctly is very difficult.</li>
    <li>React properties can be any sort of data: arrays, objects, strings, functions, other React components. Web component attributes must be strings and their slots must be DOM nodes. Wrapped Web Components will always be second class citizens.</li>
    <li>React normalizes events to have a consistent interface and exposes them as callbacks. This convenience isn&apos;t possible for custom events.</li>
    <li>Native inputs have a huge interface of properties and methods. Both our wrappers and web components would need to duplicate these.</li>
  </ul>
  <p>
    Specific instances of these problems are demonstrated below.
  </p>
  <hr />
  <ControlledInput />
  <br />
  <Refs />
  <br />
  <Events />
  <br />
  <Styles />
</React.Fragment>, document.getElementById("root"));
