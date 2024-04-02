import {html, css, LitElement} from 'lit';

export class ExamSection extends LitElement {
    constructor() {
        super();
        this.currentQuestion = "Mainn"
        //document.querySelector(".question").addEventListener('click', this.questionClickHandler)
    }

    static properties = {
        currentQuestion : ""
    }

    static styles = css`
    .questions__container {
    display:flex;
    flex-direction:column;
    gap:2rem;
    border:1px solid red;
    max-width:fit-content;
    min-height:auto;
    padding:2rem 2rem;
  }
  .main__container {
    padding:3rem;
    border:1px solid green;
    flex-grow:1;
  }
  .questions__container {
    display:flex;
    flex-direction:column;
    gap:2rem;
    border:1px solid red;
    max-width:fit-content;
    min-height:auto;
    padding:2rem 2rem;
  }
  .body__container {
    display:flex;
  }
    `

    questionClickHandler(e) {
        console.log("clicked")
      const value = e.target.textContent;
      this.currentQuestion = value;
    }


    questions = html`
      ${["Question 1", "Question 2", "Question 3"].map(question => {
        return html `<button @click=${this.questionClickHandler} class="question">${question}</button>`
      })}
      
    `


    render() {
        return html `
        <div class = "body__container">
          <div class = "questions__container">
      ${this.questions}
    </div>
    <div class="main__container">
      <h1 class="question__item">${this.currentQuestion}</h1>
    </div>
    </div>
        `
    }
}

customElements.define('exam-section',ExamSection);