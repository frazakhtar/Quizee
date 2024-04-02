import {html, css, LitElement} from 'lit';
import { buttonStyles } from './quiz-css';

export class SimpleGreeting extends LitElement {
    static styles = [
        buttonStyles]

  static properties = {
    name: {type: String},
  };

  constructor() {
    super();
    this.name = 'Somebody';
  }

  render() {
    return html` <div class="nav">
    <label> &#128218;</label>
    <h3>
      Quizzzy
    </h3>
  </div>
  
  <section class='quiz-section'>
    <div>Quiz will end in<span id="time">01:00</span> minutes!</div>
    <div class="qstn">
      <label for='serial-num'><b>1</b></label>
      <text>Question text goes here .....</text>
    </div>

    <div class='options'>
      <div class="options-flex">
        <div class="option-items">
          <input type='radio' name="option" />
          <label for='option1'>Option 1</label>
        </div>
        <div class="option-items">
          <input type='radio' name="option" />
          <label for='option2'>Option 2</label>
        </div>
        <!-- </div> -->

        <!-- <div class="options-flex"> -->
        <div class="option-items">
          <input type='radio' name="option" />
          <label for='option3'>Option 3</label>
        </div>
        <div class="option-items">
          <input type='radio' name="option" />
          <label for='option4'>Option 4</label>
        </div>
      </div>

    </div>
    <div>

    </div>
    <div class="btns">
      <button class="submit-btn">
        Submit
      </button>
      <button class="next-btn">
        Next
      </button>
    </div>`;
  }
}
customElements.define('simple-greeting', SimpleGreeting);