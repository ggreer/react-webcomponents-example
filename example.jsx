/* global React: false, ReactDOM: false */

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
    return <div><o-text-input class={className} value={value || defaultValue} ref={this.input} {...otherProps}></o-text-input></div>;
  }
}

const Title = ({ id, children }) => <h1 id={id} className="form--title">
  <a className="hover" href={`#${id}`}>{ children }</a>
</h1>;

const FieldSet = ({ label, aside, children }) => <fieldset className="fieldset">
  <div className="fieldset-flex">
    { label && <label className="label">{ label }</label> }
    { children }
    { aside && <aside className="form--hint">{ aside }</aside> }
  </div>
</fieldset>;

class Refs extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      oValue: 'oValue',
      value: "value",
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
        In React, user defined <code>Components</code> are instantiated by the framework to create a virtual DOM.
        A <code>ref</code> provides an escape valve to access the realized DOM counterpart of a given component.
        <br/>
        <br/>
        Here, we control the input directly and ask the wrapper what it thinks the value is by way of a <code>ref</code>.
        The ref&rsquo;s <code>value</code> attribute and our <code>value</code> from our internal state race because of the two way data binding of <code>value</code>.
      </p>
      <p>
        It is probably possible to fix this bug in the wrapper, but it was the 3rd or 4th race we ran into.
      </p>
      <FieldSet label="Controlled Input:" aside="Can be changed by user. Always up to date.">
        <input className="text-input" name="native" type="text" value={value} onChange={this.setValue} ref={this.ref} />
        ref value: { this.ref.current && this.ref.current.value }
      </FieldSet>
      <OTextInput label="Web component" name="wc1" value={oValue} onChange={this.setOValue} ref={this.oRef} />
      ref value: { this.oRef.current && this.oRef.current.value }
    </form>;
  }
}

class ControlledInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      eventKeys: [''],
      value: "test",
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
      <Title id="custom-events">Custom Events</Title>
      <p>
        In React, <code>value=</code> creates a <a href="https://reactjs.org/docs/forms.html#controlled-components">controlled input</a> - the value is entirely controlled by the Component that renders it.
        React informs us when a controlled input changes by way of the <a href="https://reactjs.org/docs/handling-events.html"><i>changed</i> event</a>:
      </p>

      <blockquote>
        Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser’s native event.
        It has the same interface as the browser&#39;s native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.
        ...React normalizes events so that they have consistent properties across different browsers.
      </blockquote>

      <p>
        The React o-input wrapper must manually <code>(addEventListener)</code> bind to the o-change custom event because React does not listen to custom events
        which bypasses React&#39;s event normilization.
        Options are:
      </p>
      <ol>
        <li>abandon event compatibility with React</li>
        <li>do not use custom events</li>
        <li>duplicate reacts event normilization</li>
      </ol>

      <FieldSet label="Controlled Input:">
        <input className="text-input" name="native" type="text" value={value} onChange={this.setValue} />
      </FieldSet>
      <OTextInput label="(Controlled) o-input" name="wc1" value={value} onChange={this.setValue} />
      <p>
        Keys from change event object:
        { eventKeys && <br/> }
        { eventKeys.map(k => <React.Fragment key={k}>{k}<br/></React.Fragment>)}
      </p>
    </form>;
  }
}

class Events extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      value: "test",
    };
  }

  render () {
    return <form className="form">
      <Title>Events</Title>
      <p>
        Most events bubble up from the actual input because we aren&rsquo;t using the shadow dom.
        However, the <code>onChange</code> handler in the wrapper must be bound to the <code>oChange</code> custom event which targets the o-input, (not the actual input).
        o-input is currently missing most <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement#properties">methods and properties</a> that inputs have:
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
      <p>
        Of the ones that do mysteriously work, its not at all clear why since operating on o-input is not the same as operating on input.
        Besides the ones listed above, there are input specific methods and several vendor specific methods/properties potentially used by libraries.
        The list of <i>common</i> properties that must be supported on both sides is large:
      </p>
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
        tabindex
      </code>
      <br/>
      <br/>
      <FieldSet
        label="Native Input:"
        aside={<button type="button" className="button is-button-primary" onClick={() => this.input.focus()}>focus input</button>}>
        <input className="text-input" type="text"
          ref={r => this.input = r}
          onClick={e => console.log('onClick', e.target)}
          onChange={e => console.log('onChange', e.target)}
        />
      </FieldSet>

      <OTextInput
        ref={r => this.oInput = r}
        onClick={e => console.log('WC onClick', e.target)}
        onChange={e => console.log('onChange', e.target)}
        label="Web Component has no `focus` method"
      >
        <button type="button" onClick={() => this.oInput.focus()}>focus WC</button>
      </OTextInput>
    </form>;
  }
}

const Styles = () => <form className="form">
  <Title id="styles">Idiomatic Code, Composition, and Customization</Title>
  <p>
    Web Components may only accept string attributes (props) because thats the limition of the DOM.
    React Components can receive any type of data because they only exist in React&rsquo;s virtual DOM.
    In this case, the <code>label</code> is actually the short snippet:
  </p>
  <pre>{`const label = <code>
  <img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> 
  http://...
</code>
...
<FieldSet label={label} ... />`}</pre>
  <p>
    This is a common pattern in React, which strongly prefers Composition over other abstractions.
    Components themselves can (and commonly are) passed as arguments to other Components like so:
  </p>

  <pre>{`const CustomLabel = (props) => <code style={props.style}>
  <img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> 
  http://...
</code>
...
<FieldSet label={CustomLabel} ... />`}</pre>
  <p>
    This sort of idiomatic interface (Higher Order Components et al) is not even possible with slots, because Web Components can not operate on React Components, only the DOM nodes they render.
    Even something trivial in React like passing a list of strings to a component becomes hard.
  </p>
  <p>
    Because React <code>style</code> and <code>className</code> attributes are applied directly to the <code>o-input</code>, there is no clean way to customize <code>o-input</code>&rsquo;s <code>label</code>.
    These sorts of one-off problems inevitably turn into bikesheds and generate Frankenstein interfaces because universal (Web) Components must actually meet the unholy union of all product requirements from all the products that use them.
  </p>
  <FieldSet className="fieldset"
    label={<code><img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> http://</code>}>
    <input className="text-input" type="text" defaultValue="Fancy label" />
  </FieldSet>
  <OTextInput label={<code><img src="fa-triangle.png" style={{ width: 18, height: 18 }} /> http://</code>} style={{fontFamily: 'Impact'}} className="hello">
  </OTextInput>
</form>;

class List extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
    };
    this.input = React.createRef();
    this.add = () => {
      this.setState({
        items: [...this.state.items, this.input.current.value],
      });
      this.input.current.value = '';
      this.input.current.focus();
    };
    this.remove = i => {
      let items = [...this.state.items];
      items.splice(i, 1);
      this.setState({ items });
    };
  }

  render () {
    const { items } = this.state;
    return <React.Fragment>
      <h1>{items.length} Item{items.length === 1 ? '' : 's'}</h1>
      <input type="text" placeholder="type here" ref={this.input} />
      <button type="button" onClick={this.add}>Add!</button>
      <hr />
      { items.map((item, i) => <FieldSet
        key={item}
        label={`Item ${i + 1}`}
        aside={<button type="button" onClick={() => this.remove(i)}>Remove!</button>}>
        <input className="text-input" type="text" defaultValue={item} />
      </FieldSet>) }
    </React.Fragment>;
  }
}

class OList extends List {
  render () {
    const { items } = this.state;
    return <React.Fragment>
      <h1>WC {items.length} Item{items.length === 1 ? '' : 's'}</h1>
      <input type="text" placeholder="type here" ref={this.input} />
      <button type="button" onClick={this.add}>Add!</button>
      <hr />
      { items.map((item, i) => <OTextInput
        key={item}
        label={`Item ${i + 1}`}
        defaultValue={item}>
        <button type="button" onClick={() => this.remove(i)}>Remove!</button>
      </OTextInput>) }
    </React.Fragment>;
  }
}

const listStyle = {
  border: '1px solid black',
  display: 'inline-block',
  verticalAlign: 'top',
  width: '49%',
};

ReactDOM.render(<React.Fragment>
  <ControlledInput />
  <br />
  <Refs />
  <br />
  <Events />
  <br />
  <Styles />
  <br />
  <div style={listStyle}>
    <List />
  </div>
  <div style={listStyle}>
    <OList />
  </div>
  <br />
</React.Fragment>, document.getElementById("root"));
