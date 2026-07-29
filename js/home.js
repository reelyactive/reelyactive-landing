// Constants
const OL_ELEMENTS = [ '#OL1', '#OL2', '#OL3' ];
const QA_ELEMENTS = [ '#Q1', '#A1', '#Q2', '#A2', '#Q3', '#A3', '#Q4', '#A4' ];
const QA_ROWS = [ '#R1', '#R2', '#R3', '#R4' ];
const QA_LINKS = [ '#L1', '#L2', '#L3', '#L4' ];
const OL_UPDATE_MILLISECONDS = 800;
const QA_UPDATE_MILLISECONDS = 1600;


// Other variables
let olIndex = 0;
let qaIndex = 0;


// Update the one-liner elements
function updateOL() {
  let currentTerm = document.querySelector(OL_ELEMENTS[olIndex]);
  let previousTerm = document.querySelector(
          OL_ELEMENTS[(olIndex - 1 + OL_ELEMENTS.length) % OL_ELEMENTS.length]);

  currentTerm.setAttribute('class', 'text-body-emphasis');
  previousTerm.setAttribute('class', 'text-body-secondary');

  olIndex = (olIndex + 1) % OL_ELEMENTS.length;
  setTimeout(updateOL, OL_UPDATE_MILLISECONDS);
}


// Update the QA table
function updateQA() {
  let isQuestion = ((qaIndex % 2) === 0);

  if(isQuestion) {
    let currentQuestion = document.querySelector(QA_ELEMENTS[qaIndex]);
    let previousQuestion = document.querySelector(
          QA_ELEMENTS[(qaIndex - 2 + QA_ELEMENTS.length) % QA_ELEMENTS.length]);
    let previousAnswer = document.querySelector(
          QA_ELEMENTS[(qaIndex - 1 + QA_ELEMENTS.length) % QA_ELEMENTS.length]);
    let currentRow = document.querySelector(QA_ROWS[qaIndex / 2]);
    let previousRow = document.querySelector(
          QA_ROWS[((qaIndex / 2) - 1 + QA_ROWS.length) % QA_ROWS.length]);
    let currentLink = document.querySelector(QA_LINKS[qaIndex / 2]);
    let previousLink = document.querySelector(
          QA_LINKS[((qaIndex / 2) - 1 + QA_LINKS.length) % QA_LINKS.length]);

    currentQuestion.setAttribute('class', 'text-end text-body-emphasis');
    previousQuestion.setAttribute('class', 'text-end text-body-tertiary');
    previousAnswer.setAttribute('class', 'text-start text-body-tertiary');
    currentRow.setAttribute('class', 'table-active');
    previousRow.setAttribute('class', '');
    currentLink.setAttribute('class', 'link-primary');
    previousLink.setAttribute('class', 'link-body-emphasis link-opacity-50');
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
updateOL();
updateQA();
