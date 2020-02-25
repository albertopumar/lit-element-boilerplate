import { LitElement, html } from 'lit-element';
import { connect } from 'lit-element-redux';
import { operations } from './duck';

const mapStateToProps = (store) => ({
  data: store.list.data
});

const mapDispatchToProps = { ...operations };

class ListComponent extends LitElement {
  static get properties() {
    return {
      data: { type: Array }
    };
  }

  constructor() {
    super();

    this.data = [];
  }

  render() {
    return html`
      ${this.data.map(
        (item) =>
          html`
            ${item.name}
          `
      )}
      <button @click="${() => this.loadData()}">Load</button>
    `;
  }
}
const ConnectedListComponent = connect(mapStateToProps, mapDispatchToProps)(ListComponent);
customElements.define('my-list', ConnectedListComponent);
