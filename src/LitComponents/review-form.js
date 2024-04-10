import { html, LitElement } from "lit";
import { reviewPageCss } from "./review-css";
import { EditForm } from "./edit";

export class ReviewForm extends LitElement {
  static styles = [reviewPageCss];

  static properties = {
    qId: 0,
    storedQuestion: [{}],
  };

  constructor() {
    super();
    this.storedQuestions = JSON.parse(localStorage.getItem("questionsStore"));
    this.qId = 0;
    this.editData = [];
  }

  editQuestion(e) {
    const editId = e.target.id;
    const editDialog = this.renderRoot?.getElementById("favDialog");
    const getObj = this.storedQuestions.find((arr) => arr.id == editId);
    this.editData.push(getObj);
    this.requestUpdate();
    editDialog.showModal();
  }

  deleteQuestion(e) {
    const delId = e.target.id;
    const getObj = this.storedQuestions.find((arr) => arr.id == delId);
    const getIndex = this.storedQuestions.indexOf(getObj);
    this.storedQuestions.splice(getIndex, 1);
    localStorage.setItem(
      "questionsStore",
      JSON.stringify(this.storedQuestions)
    );
    this.requestUpdate();
  }

  onUpdate(e) {
    console.log(e.target.id);
    const inp = this.renderRoot?.getElementById("qstn");
    const qs = inp.value;
    const opts = this.renderRoot
      ?.getElementById("ops")
      .getElementsByTagName("input");

    // const isValidated = this._validation(inp, opts);
    let optionsObj = { id: parseInt(e.target.id), question: qs };
    const optionsKey = ["A", "B", "C", "D"];
    let count = 0;
    for (var i of opts) {
      optionsObj[optionsKey[count]] = i.value;
      count = count + 1;
    }
    this.qId = this.qId + 1;
    const idx = this.storedQuestions.find(
      (data) => data.id === parseInt(e.target.id)
    );
    const getIndex = this.storedQuestions.indexOf(idx);
    this.storedQuestions.splice(getIndex, 1, optionsObj);
    localStorage.setItem(
      "questionsStore",
      JSON.stringify(this.storedQuestions)
    );
    // let allInputs = this.renderRoot?.querySelectorAll("input");
    // allInputs.forEach((inpField) => (inpField.value = ""));
    this.editData = [];
    const editDialog = this.renderRoot?.getElementById("favDialog");

    editDialog.close();
  }

  onCancel() {
    this.editData = [];
  }

  render() {
    let count = 0;
    return html`
    <head>
    </head>
   <link href="//cdn.muicss.com/mui-0.10.3/css/mui.min.css" rel="stylesheet" type="text/css" />
<script src="//cdn.muicss.com/mui-0.10.3/js/mui.min.js"></script>

    <body>
      <main>
        <div class="nav">
          <label> &#128218;</label>
          <h3>Quizzzy</h3>
        </div>
        <section >
          <h3>Review and Submit</h3>
            ${
              this.storedQuestions?.length >= 1
                ? this.storedQuestions.map(
                    (item) =>
                      html`
                        <div class="flex-items">
                          <span
                            >${(count = count + 1)}.
                            <text>${item.question}</text></span
                          >
                          <ol>
                            <li>${item.A}</li>
                            <li>${item.B}</li>
                            <li>${item.C}</li>
                            <li>${item.D}</li>
                          </ol>
                          <div class="btns">
                            <button
                              @click=${this.deleteQuestion}
                              id=${item.id}
                              class="mui-btn mui-btn mui-btn--small mui-btn--danger"
                            >
                              Delete
                            </button>
                            <button
                              @click=${this.editQuestion}
                              id=${item.id}
                              class="mui-btn mui-btn mui-btn--small mui-btn--primary"
                            >
                              Edit
                            </button>
                          </div>
                        </div>
                        <dialog id="favDialog">
                          <form method="dialog">
                            ${this.editData.map(
                              (data) =>
                                html`
                                  <div
                                    @click=${this._clearBorder}
                                    class="mui-textfield"
                                  >
                                    <label><b>Q</b></label>
                                    <input
                                      placeholder="Enter Question"
                                      type="text"
                                      id="qstn"
                                      value=${data.question}
                                    />
                                  </div>
                                  <br />
                                  <div class="options" id="ops">
                                    <div
                                      @click=${this._clearBorder}
                                      class="mui-textfield"
                                    >
                                      <label>1.</label>
                                      <input
                                        placeholder="Option 1"
                                        type="text"
                                        id="opt1"
                                        name="option"
                                        value=${data.A}
                                      />
                                    </div>
                                    <div
                                      @click=${this._clearBorder}
                                      class="mui-textfield"
                                    >
                                      <label>2.</label>
                                      <input
                                        placeholder="Option 2"
                                        type="text"
                                        id="opt2"
                                        name="option"
                                        value=${data.B}
                                      />
                                    </div>
                                    <div
                                      @click=${this._clearBorder}
                                      class="mui-textfield"
                                    >
                                      <label>3.</label>
                                      <input
                                        placeholder="Option 3"
                                        type="text"
                                        id="opt3"
                                        name="option"
                                        value=${data.C}
                                      />
                                    </div>
                                    <div
                                      @click=${this._clearBorder}
                                      class="mui-textfield"
                                    >
                                      <label>4.</label>
                                      <input
                                        placeholder="Option 4"
                                        type="text"
                                        id="opt4"
                                        name="option"
                                        value=${data.D}
                                      />
                                    </div>
                                    <br />
                                    <!-- <label class="validation-msg-hide" id="msg"
                                      >Please fill all the fields</label
                                    > -->
                                  </div>
                                  <div class="btns">
                                    <button
                                      class="mui-btn mui-btn--raised"
                                      @click=${this.onCancel}
                                    >
                                      Cancel
                                    </button>
                                    <button
                                      class="mui-btn mui-btn--raised mui-btn--primary"
                                      @click=${this.onUpdate}
                                      id=${data.id}
                                    >
                                      Update
                                    </button>
                                  </div>
                                `
                            )}
                          </form>
                        </dialog>
                      `
                  )
                : html`<b>Nothing to show</b>`
            }
            ${
              this.storedQuestions?.length >= 1
                ? html`<div class=" btns">
                    <button class="mui-btn mui-btn--raised mui-btn--primary">
                      Submit
                    </button>
                  </div>`
                : ""
            }
          </div>
        </section>
      </main>
    </body>`;
  }
}

customElements.define("review-form", ReviewForm);
