import {html, LitElement } from "lit";


export class AdminForm extends LitElement{
   
  constructor() {
    super();
    this.name = 'Somebody';
  }

  render(){
    return html`<div>Hello</div>`
  }

}

customElements.define('admin-form', AdminForm);