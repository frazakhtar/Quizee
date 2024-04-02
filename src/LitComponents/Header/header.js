import {html, css, LitElement} from 'lit';
import {NavigationItems} from "../Header/navigation-items/navigation-items";
import {ExamSection} from "../Main/Exam/exam-section";
import { Router } from '@lit-labs/router';

export class Header extends LitElement {

  _routes = new Router(this, [
    {path:"/", render : () => html`<exam-section></exam-section>`},
    {path:"/about", render : () => html`<h1>About</h1>`}
  ])

  static styles = css`
  .header__container {
    background-color:beige;
    display:flex;
    justify-content:space-around;
  }


  `;

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html`
    <div class="header__container">
      <div>LOGO</div>
      <navigation-items></navigation-items>
      <div>PROFILE</div>
    </div>
    
      ${this._routes.outlet()}
    
  </div>
    
    `;
  }
}
customElements.define('header-litcomponent', Header);
