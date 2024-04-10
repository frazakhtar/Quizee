import { html, LitElement } from "lit";
import { reviewPageCss } from "./review-css";

export class EditForm extends LitElement {
  constructor() {
    super();
    // this.data = false;
  }

  static get properties() {
    return { data: { type: Boolean } };
  }

  render() {
    return html`
      <div>
        <h3>${this.data ? 1 : 0}</h3>
      </div>
    `;
  }
}

window.customElements.define("edit-form", EditForm);
