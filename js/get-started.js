// Constants
const HEADLINE_TOGGLE_MILLISECONDS = 4000;
const HEADLINE_MESSAGES = [ 'Get in touch', 'Get up and running' ];

// DOM elements
let firstHeadlineIcons = [ document.querySelector('#firstheadlineicon0'),
                           document.querySelector('#firstheadlineicon1') ];
let secondHeadlineIcons = [ document.querySelector('#secondheadlineicon0'),
                            document.querySelector('#secondheadlineicon1') ];
let headlineMessages = [ document.querySelector('#firstheadlinemessage'),
                         document.querySelector('#secondheadlinemessage') ];

// Other variables
let headlineIndex = 0;

setInterval(updateHeadline, HEADLINE_TOGGLE_MILLISECONDS);

// Update (swap) the two headlines
function updateHeadline() {
  firstHeadlineIcons[headlineIndex].hidden = true;
  secondHeadlineIcons[headlineIndex].hidden = true;
  headlineMessages[1].textContent = HEADLINE_MESSAGES[headlineIndex];

  headlineIndex = ++headlineIndex % 2;

  firstHeadlineIcons[headlineIndex].hidden = false;
  secondHeadlineIcons[headlineIndex].hidden = false;
  headlineMessages[0].textContent = HEADLINE_MESSAGES[headlineIndex];
}


