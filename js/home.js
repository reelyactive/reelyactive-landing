// Constants
const MIDDLEWARE_DIFFERENTIATIONS = [ 'privacy-preserving',
                                      'vendor-agnostic', 'technology-agnostic',
                                      'application-agnostic' ];
const HEADLINE_BOLD_IDS = [ 'headlineWho', 'headlineWhat', 'headlineWhere',
                            'headlineHow' ];
const EXAMPLES = [ 'equipment condition status with Entergy.',
                   'workplace occupancy with Desjardins.',
                   'workplace stress and performance factors with USC.',
                   'museum visitor journeys with MCQ.',
                   'operational efficiency with the US Army.' ];

const HEADLINE_BOLD_UPDATE_MILLISECONDS = 1800;
const MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS = 1800;
const EXAMPLE_TYPING_MILLISECONDS = 3600;
const EXAMPLE_HOLD_MILLISECONDS = 2400;


// DOM elements
let middlewareDifferentiation =
                           document.querySelector('#middlewareDifferentiation');
let exampleText = document.querySelector('#exampleText');


// Other variables
let currentHeadlineBoldIndex = 0;
let currentDifferentiationIndex = 0;
let currentExampleIndex = 0;
let currentExampleCharacter = -1;

// Start the text rotations
updateHeadlineBold();
updateMiddlewareDifferentiation();
updateExample();


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

// Update the example one character at a time
function updateExample() {
  let example = EXAMPLES[currentExampleIndex];
  let nextCharacterMilliseconds = Math.round(EXAMPLE_TYPING_MILLISECONDS /
                                             (example.length + 1));
  let isNewExample = (currentExampleCharacter === -1);
  let isExampleComplete = (currentExampleCharacter >= (example.length - 1));

  if(isNewExample) {
    exampleText.textContent = '';
  }

  if(isExampleComplete) {
    currentExampleIndex = (currentExampleIndex + 1) % EXAMPLES.length;
    currentExampleCharacter = -1;

    return setTimeout(updateExample, EXAMPLE_HOLD_MILLISECONDS);
  }
  else {
    exampleText.textContent += example[++currentExampleCharacter];
  }

  setTimeout(updateExample, nextCharacterMilliseconds);
}
