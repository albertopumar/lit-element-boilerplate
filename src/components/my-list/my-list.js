import { LitElement, html } from 'lit-element';
import { operations } from './duck';
import connect from '../../redux-mixing/connect.js';

const mapStateToProps = store => ({
  data: store.list.data,
});

const mapDispatchToProps = { ...operations };

class ListComponent extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
    };
  }

  constructor() {
    super();

    this.data = [];
  }

  render() {
    return html`
      ${this.data.map(
        item =>
          html`
            ${item.name}
          `,
      )}
      <button @click="${() => this.loadData()}">Load</button>
    `;
  }
}
const ConnectedListComponent = connect(mapStateToProps, mapDispatchToProps)(ListComponent);
customElements.define('my-list', ConnectedListComponent);
