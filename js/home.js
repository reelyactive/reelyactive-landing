// Constants
const QA_ELEMENTS = [ '#Q1', '#A1', '#Q2', '#A2', '#Q3', '#A3', '#Q4', '#A4' ];
const QA_UPDATE_MILLISECONDS = 1600;


// Other variables
let qaIndex = 0;


// Update the QA table
function updateQA() {
  let isQuestion = ((qaIndex % 2) === 0);

  if(isQuestion) {
    let currentQuestion = document.querySelector(QA_ELEMENTS[qaIndex]);
    let previousQuestion = document.querySelector(
          QA_ELEMENTS[(qaIndex - 2 + QA_ELEMENTS.length) % QA_ELEMENTS.length]);
    let previousAnswer = document.querySelector(
          QA_ELEMENTS[(qaIndex - 1 + QA_ELEMENTS.length) % QA_ELEMENTS.length]);

    currentQuestion.setAttribute('class', 'text-end text-body-emphasis');
    previousQuestion.setAttribute('class', 'text-end text-body-tertiary');
    previousAnswer.setAttribute('class', 'text-start text-body-tertiary');
  }
  else {
    let currentQuestion = document.querySelector(QA_ELEMENTS[qaIndex - 1]);
    let currentAnswer = document.querySelector(QA_ELEMENTS[qaIndex]);

    currentQuestion.setAttribute('class', 'text-end text-body');
    currentAnswer.setAttribute('class', 'text-start text-body-emphasis');
  }

  qaIndex = (qaIndex + 1) % QA_ELEMENTS.length;
  setTimeout(updateQA, QA_UPDATE_MILLISECONDS);
}


// Begin periodic updates
updateQA();
