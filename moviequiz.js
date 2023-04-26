'use strict'

const score = document.querySelector('#points');
const question = document.querySelector('#question');
const answer = document.querySelector('.answers');
let index = 0;

async function start(){
    const response = await 
    fetch('https://gist.githubusercontent.com/bertez/2528edb2ab7857dae29c39d1fb669d31/raw/4891dde8eac038aa5719512adee4b4243a8063fd/quiz.json')
    const quiz = await response.json();
    question.innerHTML = quiz[index].question;
    answer.innerHTML = quiz[index].answers;
}
start();