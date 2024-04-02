import {html, css, LitElement} from 'lit';
import {Task} from '@lit/task'

async function getQuestion() {
    const res = await fetch('https://fakestoreapi.com/products/1');
    const jsonData = await res.json();
    console.log("json ",jsonData)
    return jsonData;
   }

export class QuestionWithOption extends LitElement {
    constructor() {
        super();
        this.questionIndex = 0;
        this.questionId = null;
    }

    static properties = {
        questionIndex: {type:Number},
        questionId : {type:Number}
      };
    
      _productTask = new Task(this, {
        task: async ([], {signal}) => {
          const response = await fetch(`https://fakestoreapi.com/products`, {signal});
          if (!response.ok) { throw new Error(response.status); }
          const json = response.json()
          return json;
        },
        args: () => []
      });

      nextHandler() {
        this.questionIndex = this.questionIndex + 1;
        
        console.log("Choice selected ",this.selectedChoice.value);
        globalState.selectedAnswers.push({id:this.questionId, choice:this.selectedChoice.value})
        console.log("Global state ",globalState.selectedAnswers)
        globalState.save();
      }

      get selectedChoice() {
        return this.renderRoot?.querySelector('input[name="choice"]:checked') ?? null;
      }
    
      render() {
        return this._productTask.render({
          pending: () => html`<p>Loading product...</p>`,
          complete: (questions) => 
          {
            this.questionId = questions[this.questionIndex].id; 
            return html`
          <h1>${questions[this.questionIndex].id}</h1>
          <p>${questions[this.questionIndex].title}</p>
          <section>
            <input type="radio" name="choice" value="option1" /> Option 1
            <input type="radio" name="choice" value="option2" /> Option 2
            <input type="radio" name="choice" value="option3" /> Option 3
            <input type="radio" name="choice" value="option4" /> Option 4
          </section>
          <button @click=${this.nextHandler}>Next</button>
        `},
          error: (e) => html`<p>Error: ${e}</p>`
        });
      }
}

customElements.define('question-options', QuestionWithOption);