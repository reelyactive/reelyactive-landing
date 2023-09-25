// Constants
const MIDDLEWARE_DIFFERENTIATIONS = [ 'technology-agnostic', 'vendor-agnostic',
                                      'application-agnostic' ];
const HEADLINE_BOLD_IDS = [ 'headlineWho', 'headlineWhat', 'headlineWhere',
                            'headlineHow' ];
const EXAMPLES = [
  {
    iconClass: "fas fa-tag",
    text: "Enable real-time tracking with Bluetooth Low Energy asset beacons, existing access points and customisable web apps."
  },
  {
    iconClass: "fas fa-thermometer-half",
    text: "Collect temperature timeseries data with Bluetooth Low Energy sensor beacons and gateways, using an existing database and analytics suite."
  },
  {
    iconClass: "fas fa-tag",
    text: "Trigger a custom action in Node-RED when a RAIN-tagged container is placed on a shelf observed by any reader-antenna pair."
  },
  {
    iconClass: "fas fa-people-arrows",
    text: "Capture person-to-person interactions using DirAct-compatible wearables and a Raspberry Pi computer, writing the data to CSV files."
  },
  {
    iconClass: "fas fa-walking",
    text: "Collect office occupancy data using any combination of EnOcean Alliance sensors, existing HPE Aruba Networking APs, and familiar analytics tools on Microsoft Azure."
  },
  {
    iconClass: "fas fa-tag",
    text: "Locate and identify RAIN-tagged inventory in real-time using RF Controls Smart Antennas and an existing WMS."
  },
  {
    iconClass: "fas fa-bell",
    text: "Notify whenever wearable duress buttons are pressed, using Bluetooth Low Energy gateways and an established messaging system."
  }
];
const HEADLINE_BOLD_UPDATE_MILLISECONDS = 1200;
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
                                             (example.text.length + 1));
  let isNewExample = (currentExampleCharacter === -1);
  let isExampleComplete = (currentExampleCharacter >= (example.text.length - 1));
  let exampleIcon = document.querySelector('#exampleIcon');

  if(isNewExample) {
    exampleIcon.setAttribute('class', example.iconClass + ' text-ambient');
    exampleText.textContent = '';
  }

  if(isExampleComplete) {
    exampleIcon.setAttribute('class', 'fas fa-check text-success');
    currentExampleIndex = (currentExampleIndex + 1) % EXAMPLES.length;
    currentExampleCharacter = -1;

    return setTimeout(updateExample, EXAMPLE_HOLD_MILLISECONDS);
  }
  else {
    exampleText.textContent += example.text[++currentExampleCharacter];
  }

  setTimeout(updateExample, nextCharacterMilliseconds);
}


// Create a random index list from the given array
function createRandomIndexList(sourceArray) {
  let indexList = [];
  let randomIndex;

  sourceArray.forEach(function(value, index) {
    while(indexList.length <= index) {
      randomIndex = Math.floor(Math.random() * sourceArray.length);
      if(!indexList.includes(randomIndex)) {
        indexList.push(randomIndex);
      }
    }
  });

  return indexList;
}