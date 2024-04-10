import { html, LitElement } from "lit";
import { adminPageCss } from "./admin-css";

export class AdminForm extends LitElement {
  static styles = [adminPageCss];

  static properties = {
    questions: [{}],
    qId: 0,
  };

  constructor() {
    super();
    this.questions = [];
    this.qId = 0;
    this.isAllFilled = false;
    this.blankFields = [];
  }

  connectedCallback() {
    super.connectedCallback();
    const getLocalData = JSON.parse(localStorage.getItem("questionsStore"));
    const getID = getLocalData[getLocalData.length - 1].id;
    this.questions = getLocalData;
    this.qId = this.qId + getID;
  }

  _validation(qsInp, getInps) {
    const validationMsg = this.renderRoot?.getElementById("msg");
    if (qsInp.value) {
      for (let opt in getInps) {
        let currentInp = getInps[opt];
        if (currentInp.id && !currentInp.value) {
          validationMsg.className = "validation-msg-show";
          return false;
        }
      }
      validationMsg.className = "validation-msg-hide";
      return true;
    } else {
      validationMsg.className = "validation-msg-show";
      return false;
    }
  }

  _clearBorder() {
    const validationMsg = this.renderRoot?.getElementById("msg");
    validationMsg.className = "validation-msg-hide";
  }

  _questionAdded() {
    const inp = this.renderRoot?.getElementById("qstn");
    const qs = inp.value;
    const opts = this.renderRoot
      ?.getElementById("ops")
      .getElementsByTagName("input");

    const isValidated = this._validation(inp, opts);
    if (isValidated) {
      let optionsObj = { id: this.qId + 1, question: qs };
      const optionsKey = ["A", "B", "C", "D"];
      let count = 0;
      for (var i of opts) {
        optionsObj[optionsKey[count]] = i.value;
        count = count + 1;
      }
      this.qId = this.qId + 1;
      this.questions.push(optionsObj);
      localStorage.setItem("questionsStore", JSON.stringify(this.questions));
      let allInputs = this.renderRoot?.querySelectorAll("input");
      allInputs.forEach((inpField) => (inpField.value = ""));

      //Snackbar
      var x = this.renderRoot?.getElementById("snackbar");
      x.className = "show";
      i.style.borderBottom = "1px solid blue";

      setTimeout(function () {
        x.className = x.className.replace("show", "");
      }, 3000);
    } else {
    }
  }

  _review() {
    window.location.pathname = "/src/admin/review.html";
  }
  render() {
    return html`<body>
      <main>
        <div class="nav">
          <label> &#128218;</label>
          <label class="title"><h3>Quizzzy</h3></title>
        </div>

        <h3>Add Questions</h3>
        <section class="input-section">
          <div @click=${this._clearBorder}>
            <label><b>Q</b></label>
            <input
              class="q-input"
              placeholder="Enter Question"
              type="text"
              id="qstn"
            />
          </div>
          <br />
          <div class="options" id="ops">
            <div @click=${this._clearBorder}>
              <label>1.</label>
              <input
                placeholder="Option 1"
                type="text"
                id="opt1"
                name="option"
              />
            </div>
            <div @click=${this._clearBorder}>
              <label>2.</label>
              <input
                placeholder="Option 2"
                type="text"
                id="opt2"
                name="option"
              />
            </div>
            <div @click=${this._clearBorder}>
              <label>3.</label>
              <input
                placeholder="Option 3"
                type="text"
                id="opt3"
                name="option"
              />
            </div>
            <div @click=${this._clearBorder}>
              <label>4.</label>
              <input
                placeholder="Option 4"
                type="text"
                id="opt4"
                name="option"
              />
            </div>
            <br />
            <label class="validation-msg-hide" id="msg"
              >Please fill all the fields</label
            >
            <div class="btns">
              <button @click=${this._review} id="btn">Review & Submit</button>

              <button @click=${this._questionAdded} id="btn">Add</button>
            </div>
          </div>
          <div id="snackbar">Added Successfully</div>
        </section>
      </main>
    </body>`;
  }
}

customElements.define("admin-form", AdminForm);
