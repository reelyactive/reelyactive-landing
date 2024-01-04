// Constants
const MIDDLEWARE_DIFFERENTIATIONS = [ 'privacy-preserving',
                                      'vendor-agnostic', 'technology-agnostic',
                                      'application-agnostic' ];
const HEADLINE_BOLD_IDS = [ 'headlineWho', 'headlineWhat', 'headlineWhere',
                            'headlineHow' ];

const HEADLINE_BOLD_UPDATE_MILLISECONDS = 1800;
const MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS = 1800;


// DOM elements
let middlewareDifferentiation =
                           document.querySelector('#middlewareDifferentiation');


// Other variables
let currentHeadlineBoldIndex = 0;
let currentDifferentiationIndex = 0;

// Start the text rotations
updateHeadlineBold();
updateMiddlewareDifferentiation();


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
