import { html, LitElement } from 'lit';
import { buttonStyles } from './quiz-css';
import {progressBarStyle} from "./quiz-progress-bar";
import { Task } from '@lit/task';
import questions from "../QuestionsJson/QuestionsJson.json";

async function fetchQuestions() {
  return new Promise(res => res(questions))
}

export class SimpleGreeting extends LitElement {
  static styles = [
    buttonStyles,progressBarStyle
  ]

  static properties = {
    name: { type: String },
    questionId: { type: Number },
    questions: { type: Array }
  };

  constructor() {
    super();
    this.questionId = this.getInitialQuestionId();
    questions: []
  }

  getInitialQuestionId() {
    let lastElement = globalState.selectedAnswers && globalState.selectedAnswers.slice(-1);
    return lastElement?.length <= 0 ? 1 : lastElement[0].id;
  }

  _questionsTask = new Task(this, {
    task: async ([], { signal }) => {
      const response = await fetchQuestions();
      //if (!response.ok) { throw new Error(response.status); }
      this.questions = response;
      return response;
    },
    args: () => []
  });

  enableSubmit() {
    console.log("this.questions?.length ",this.questions?.length)
    if(this.questions?.length == globalState.selectedAnswers?.length) {
      console.log("From updated ")
      this.submitButton?.classList.remove("disabled");
    }
  }

  updated(changedProperties) {
    console.log("Changed properties ",changedProperties);
    if(changedProperties.has("questionId")) {
      this.resetSelection();
      this.selectAnswer(this.questionId);
    }
    
  }

  get submitButton() {
    return this.renderRoot?.querySelector(".submit-btn") ?? null;
  }

  get selectedChoice() {
    return this.renderRoot?.querySelector('input[name="option"]:checked') ?? null;
  }

  get answerOptions() {
    return this.renderRoot?.querySelectorAll('input[name="option"]') ?? null;
  }

  resetSelection() {
    if(this.selectedChoice)
      this.selectedChoice.checked = false;
  }

  selectAnswer(id) {
    const itemIndex = globalState.selectedAnswers.findIndex((ans) => ans.id == id );
    console.log("item index ",itemIndex)
    if(itemIndex >= 0) {
      this.answerOptions.forEach(radioButton => {
        console.log("radioButton.value ",radioButton.value);
        console.log("globalState.selectedAnswers[itemIndex].option ",globalState.selectedAnswers[itemIndex].option)

        if(radioButton.value == globalState.selectedAnswers[itemIndex].option) {
          radioButton.checked = true;
          console.log("radio ",radioButton)
        }
      })
    }
  }

  nextHandler(targetId) {
    const findQuestion = this.questions.find(que => {
      const nextQueId = Number.isInteger(targetId) ? targetId : this.questionId + 1;
      console.log("nextQueId ",nextQueId)
      console.log("que.id ",que.id)
      return que.id == nextQueId
    });
    console.log("Find question ",findQuestion)
    let answerData;
    if(this.selectedChoice?.value) {
      answerData = { id: this.questionId, option: this.selectedChoice.value }
      const answerAlreadyExist = globalState.selectedAnswers.find(ans => ans.id == this.questionId);
      if (answerAlreadyExist) {
        const index = globalState.selectedAnswers.findIndex(item => item.id == this.questionId);
        globalState.selectedAnswers[index] = answerData;
      }
      else {
        globalState.selectedAnswers.push(answerData);
      }
      globalState.save();
      console.log("Global State ", globalState.selectedAnswers);
      this.enableSubmit();
    }

    if (findQuestion) {
      this.questionId = Number.isInteger(targetId) ? targetId : this.questionId + 1;
    }
  }

  queNavHandler(id) {
    this.nextHandler(id);
  }

  firstUpdated() {
    console.log('Element has been rendered for the first time');
    console.log('this.questions', this.questions);
  }

  render() {
    return this._questionsTask.render({
      pending: () => html`loading`,
      complete: (questions) => {
        const currentQuestion = questions.find(q => q.id == this.questionId);
        console.log("Current Questions ",currentQuestion);
        console.log("Question id ",this.questionId)
        const { id, question, A, B, C, D } = currentQuestion;
        console.log("Current Q ", currentQuestion)
        return html` <div class="nav">
        <label> &#128218;</label>
        <h3>
          Quizzzy
        </h3>
      </div>
      
      <div class="quiz__container">
        <!-- <div class="quiz__navigation"> -->
        <div class="stepper-wrapper">
          ${this.questions.map(que => {
            const { id } = que;
            const answeredItem = globalState.selectedAnswers.find(item => item.id == id);
            return html`
            <!-- <div @click=${() => this.queNavHandler(id)} 
              class=${`quiz__question ${answeredItem ? "--attended" : ""} ${id == this.questionId ? '--selected' : ""}`}>
              ${`${id}`}
            </div> -->
            <div @click=${() => this.queNavHandler(id)} 
                class=${`stepper-item ${answeredItem ? "--completed" : ""} ${id == this.questionId ? '--selected' : ""}`}
                >
              <div class="step-counter">${`${id}`}</div>
              <!-- <div class="step-name">First</div> -->
            </div>
            `
          })}
        </div>
        <section class='quiz-section'>
        <div>Quiz will end in <span id="time">01:00</span> minutes!</div>
        <div class="qstn">
          <label for='serial-num'><b>${id}</b></label>
              <text>${question}</text>
        </div>
    
        <div class='options'>
          <div class="options-flex">
            <div class="option-items">
              <input type='radio' name="option" value=${A} />
              <label for='option1'>${A}</label>
            </div>
            <div class="option-items">
              <input type='radio' name="option" value=${B} />
              <label for='option2'>${B}</label>
            </div>
            <!-- </div> -->
    
            <!-- <div class="options-flex"> -->
            <div class="option-items">
              <input type='radio' name="option" value=${C} />
              <label for='option3'>${C}</label>
            </div>
            <div class="option-items">
              <input type='radio' name="option" value=${D} />
              <label for='option4'>${D}</label>
            </div>
          </div>
    
        </div>
  
        <div class="btns">
          <button class="submit-btn disabled">
            SUBMIT
          </button>
          <button class="next-btn" @click=${this.nextHandler}>
            NEXT
          </button>
        </div></section>
      </div>
      
`
      },
      error: () => html`error`
    })
  }

  // render() {
  //   return html` <div class="nav">
  //   <label> &#128218;</label>
  //   <h3>
  //     Quizzzy
  //   </h3>
  // </div>

  // <section class='quiz-section'>
  //   <div>Quiz will end in<span id="time">01:00</span> minutes!</div>
  //   <div class="qstn">
  //     <label for='serial-num'><b>1</b></label>
  //     <text>Question text goes here .....</text>
  //   </div>

  //   <div class='options'>
  //     <div class="options-flex">
  //       <div class="option-items">
  //         <input type='radio' name="option" />
  //         <label for='option1'>Option 1</label>
  //       </div>
  //       <div class="option-items">
  //         <input type='radio' name="option" />
  //         <label for='option2'>Option 2</label>
  //       </div>
  //       <!-- </div> -->

  //       <!-- <div class="options-flex"> -->
  //       <div class="option-items">
  //         <input type='radio' name="option" />
  //         <label for='option3'>Option 3</label>
  //       </div>
  //       <div class="option-items">
  //         <input type='radio' name="option" />
  //         <label for='option4'>Option 4</label>
  //       </div>
  //     </div>

  //   </div>
  //   <div>

  //   </div>
  //   <div class="btns">
  //     <button class="submit-btn">
  //       Submit
  //     </button>
  //     <button class="next-btn">
  //       Next
  //     </button>
  //   </div>`;
  // }
}
customElements.define('quiz-form', SimpleGreeting);