// Constants
const MIDDLEWARE_DIFFERENTIATIONS = [ 'privacy-preserving',
                                      'vendor-agnostic', 'technology-agnostic',
                                      'application-agnostic' ];
const HEADLINE_BOLD_IDS = [ 'headlineWho', 'headlineWhat', 'headlineWhere',
                            'headlineHow' ];
const HEADLINE_BOLD_UPDATE_MILLISECONDS = 1800;
const MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS = 1800;
const CONSOLE_TEXT = [
    'npm install -g pareto-anywhere',
    '+ pareto-anywhere@1.x.x',
    'pareto-anywhere',
    'Pareto Anywhere is running on port 3001'
];
const INCLUDE_CONSOLE_PROMPT = [ true, false, true, false ];
const DEFAULT_CONSOLE_UPDATE_MILLISECONDS = 100;
const NEWLINE_CONSOLE_UPDATE_MILLISECONDS = 1200;
const LOOPED_CONSOLE_UPDATE_MILLISECONDS = 4800;


// DOM elements
let middlewareDifferentiation =
                           document.querySelector('#middlewareDifferentiation');
let terminal = document.querySelector('#terminal');


// Other variables
let currentHeadlineBoldIndex = 0;
let currentDifferentiationIndex = 0;
let currentConsoleLine = 0;
let currentConsoleCharacter = -1;


// Start the text rotations
updateHeadlineBold();
updateMiddlewareDifferentiation();
updateTerminal();


// Update the headline bold element periodically
function updateHeadlineBold() {
  HEADLINE_BOLD_IDS.forEach((id, index) => {
    let element = document.getElementById(id);
    if(index === currentHeadlineBoldIndex) {
      element.setAttribute('class', 'fw-bold');
    }
    else {
      element.setAttribute('class', '');
    }
  });
  currentHeadlineBoldIndex = (currentHeadlineBoldIndex + 1) %
                             HEADLINE_BOLD_IDS.length;
  setTimeout(updateHeadlineBold,
             HEADLINE_BOLD_UPDATE_MILLISECONDS)
}

// Update the middleware differentiation periodically
function updateMiddlewareDifferentiation() {
  middlewareDifferentiation.textContent =
                       MIDDLEWARE_DIFFERENTIATIONS[currentDifferentiationIndex];
  currentDifferentiationIndex = (currentDifferentiationIndex + 1) %
                                MIDDLEWARE_DIFFERENTIATIONS.length;
  setTimeout(updateMiddlewareDifferentiation,
             MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS);
}


// Update the terminal one character or line at a time
function updateTerminal() {
  let line = terminal.children[currentConsoleLine];
  let text = CONSOLE_TEXT[currentConsoleLine];
  let nextUpdateMilliseconds = DEFAULT_CONSOLE_UPDATE_MILLISECONDS;
  let isLastCharacter = (currentConsoleCharacter >= (text.length - 1));
  let isLastLine = (currentConsoleLine >= (CONSOLE_TEXT.length - 1)); 
  let isLooped = (currentConsoleLine === 0) &&
                 (currentConsoleCharacter < 0);
  let isConsoleInput = INCLUDE_CONSOLE_PROMPT[currentConsoleLine];

  if(isLooped) {
    for(let index = 0; index < terminal.children.length; index++) {
      terminal.children[index].textContent = '\u00a0';
    }
  }

  if(isConsoleInput) {
    let isConsoleInputStart = (currentConsoleCharacter === -1);

    if(isConsoleInputStart) {
      line.textContent = '> ';
    }
    else {
      let char = text.substring(currentConsoleCharacter,
                                currentConsoleCharacter + 1);
      line.textContent += char;
    }

    currentConsoleCharacter++;
  }
  else {
    line.textContent = text;
    isLastCharacter = true;
  }

  if(isLastCharacter) {
    currentConsoleCharacter = -1;
    currentConsoleLine++;
    nextUpdateMilliseconds = NEWLINE_CONSOLE_UPDATE_MILLISECONDS;

    if(isLastLine) {
      currentConsoleLine = 0;
      nextUpdateMilliseconds = LOOPED_CONSOLE_UPDATE_MILLISECONDS;
    }
  }

  setTimeout(updateTerminal, nextUpdateMilliseconds);
}