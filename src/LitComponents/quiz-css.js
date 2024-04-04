import {html,css, LitElement} from 'lit';


export const buttonStyles = css`
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #F5EFF0;
  font-size: 20px;
}

.nav {
  display: flex;
  align-items: center;
  max-width: 100%;
  padding: 0px 10px;
  background-color: #D3B6F7;

  h3 {
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
}

input{
  cursor: pointer;
}

.quiz-section {
  margin: 20px auto 0 auto;
  min-width: 50%;
  border: 1px solid purple;
  border-radius: 10px;
  padding: 5px;
}

.options {
  display: flex;
  flex-direction: column;
}

.options-flex {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 20px 0px;
}

.option-items {
  // border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 1px 1px rgba(0,0,0,.35);
  margin: 10px;
  padding: 10px;
}

.qstn {
  line-height: 1.6;
  box-shadow: 0 4px 2px -2px rgba(0, 0, 0, 0.4);
  margin-top: 10px;
  padding:5px;
}

.btns {
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  padding: 20px;
}

.submit-btn {
  margin: inherit;
  border: 1px solid rgb(179, 131, 226);
  width: 100px;
  color: white;
  background-color: rgb(29, 210, 150);
  border-radius: 3px;
  cursor: pointer;
  height:35px;
}

.submit-btn.disabled {
  cursor:not-allowed;
  opacity:0.5;
}

.next-btn {
  @extend .submit-btn;
  width:100px;
  background-color: rgb(106, 93, 228);
 
 }

 .submit-btn:hover{
  background-color: rgb(60, 211, 161);
 }

 .next-btn:hover{
  background-color:  rgb(122, 108, 249);
 }

 .quiz__container {
    border:1px solid red;
    display:flex;
    flex-direction:column;
    justify-content:center;
    padding:2rem 0;
 }
 .quiz__container .quiz-section {
    flex-shrink:0;
 }
 .quiz__navigation {
    margin:20px 40px;
    display:flex;
    flex-direction:row;
    gap:4px;
    max-width:20%;
    font-weight:bold;
    color:maroon;
 }
 .quiz__question {
  border-bottom:1px solid gray;
  padding:10px 10px;
  background-color:lightblue;
  border-radius:10px;
 }

 .quiz__question.--selected {
   background-color:white;
 }

 .quiz__question.--attended {
    color:green;
 }

 .quiz__question:hover {
  cursor:pointer;
 }
 
 `;