import data from './DummyData.json'


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            window.location.pathname="./index.html"
        }
    }, 1000);
}

let questionNumber=0
window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);

    loadQuestion(questionNumber)
};
const addNum = document.getElementById('qNum')

const optionOne=document.getElementById('optOne')
const optionTwo=document.getElementById('optTwo')
const optionThree=document.getElementById('optThree')
const optionFour=document.getElementById('optFour')

function loadQuestion(num){
    const putQuestion = document.getElementById('questionText')
    const firstData=data[num]
        putQuestion.innerHTML=firstData.question
        addNum.innerHTML=questionNumber+1
        optionOne.innerHTML=firstData.A
        optionTwo.innerHTML=firstData.B
        optionThree.innerHTML=firstData.C
        optionFour.innerHTML=firstData.D
}

const getNextClick=document.getElementById('nextBtn')


getNextClick.addEventListener('click',()=>{
    questionNumber=questionNumber+1
    loadQuestion(questionNumber)
    addNum.innerHTML=questionNumber+1
   
})
