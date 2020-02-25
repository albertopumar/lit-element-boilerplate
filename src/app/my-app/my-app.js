import { LitElement, html } from 'lit-element';
import { Router } from '@vaadin/router';
import routerConfig from '../router.js';
import styles from './my-app.scss';

class MyApp extends LitElement {
  static get styles() {
    return styles;
  }

  firstUpdated() {
    const main = this.shadowRoot.querySelector('main');

    const router = new Router(main);
    router.setRoutes(routerConfig);
  }

  render() {
    return html`
      <nav>
        ${routerConfig
          .filter((routerItem) => routerItem.showInMenu)
          .map(
            (routerItem) =>
              html`
                <a href="${routerItem.path}">${routerItem.name}</a>
              `
          )}
      </nav>
      <main></main>
    `;
  }
}

customElements.define('my-app', MyApp);
