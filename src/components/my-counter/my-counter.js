import { LitElement, html } from 'lit-element';
import { connect } from 'lit-element-redux';
import { operations } from './duck';
import styles from './my-counter.css';

const mapStateToProps = store => ({
  counter: store.counter
});

const mapDispatchToProps = { ...operations };

class MyCounter extends LitElement {
  static get styles() {
    return styles;
  }

  static get properties() {
    return {
      counter: { type: Number }
    };
  }

  constructor() {
    super();

    this.counter = 0;
  }

  render() {
    return html`
      <h1>Counter: ${this.counter}</h1>
      <button @click="${this.increment}">Increment</button>
      <button @click="${this.decrement}">Decrement</button>
    `;
  }
}
const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(MyCounter);
customElements.define('my-counter', ConnectedCounter);
