import {html, css, LitElement} from 'lit';

export class NavigationItems extends LitElement {

    static styles = css`
      .navigation__container {
        display:flex;
        gap:1rem;
      }
    `;

    constructor() {
        super();
    }

    render() {
        return html`
          <div class = "navigation__container">
            <a href="/"><span>HOME</span></a>
            <a href="/about"><span>ABOUT</span></a>
            <span>Option C</span>
          </div>
        `
    }
}

customElements.define('navigation-items',NavigationItems);