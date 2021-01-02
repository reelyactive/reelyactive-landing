// Constants
const USECASE_ITERATION_MILLISECONDS = 2400;

// DOM elements
let usecasesTable = document.querySelector('#usecasestable');
let usecasesTableBody = usecasesTable.querySelector('tbody');

// Other variables
let currentUsecaseIndex = 0;

// Set the next use case row to 'table-active'
function nextUsecase() {
  let trs = usecasesTableBody.getElementsByTagName('tr');
  let numberOfUsecases = trs.length;

  trs.item(currentUsecaseIndex).setAttribute('class', '');
  currentUsecaseIndex = (currentUsecaseIndex + 1) % numberOfUsecases;
  trs.item(currentUsecaseIndex).setAttribute('class', 'table-active');
}

setInterval(nextUsecase, USECASE_ITERATION_MILLISECONDS);