// Constants
const OL_ELEMENTS = [ '#OL1', '#OL2', '#OL3' ];
const OL_UPDATE_MILLISECONDS = 800;
const JSON_UPDATE_MILLISECONDS = 5000;
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
let raddecjson = document.querySelector('#raddecjson');
let dynambjson = document.querySelector('#dynambjson');
let spatemjson = document.querySelector('#spatemjson');
let middlewareDifferentiation =
                           document.querySelector('#middlewareDifferentiation');
let terminal = document.querySelector('#terminal');

// Data Variables
let raddec = {
    transmitterId: "bada55beac04",
    transmitterIdType: 3,
    timestamp: Date.now(),
    rssiSignature: [{
      receiverId: "63a4044eade7",
      receiverIdType: 2,
      rssi: -55,
      numberOfDecodings: 3
    }]
};
let dynamb = {
    deviceId: "bada55beac04",
    deviceIdType: 3,
    timestamp: Date.now(),
    batteryVoltage: 3.21,
    temperature: 23.4,
    txCount: 12345,
    uptime: 123456789
};
let spatem = {
    deviceId: "bada55beac04",
    deviceIdType: 3,
    timestamp: Date.now(),
    type: "Position",
    data:  {
      type: "FeatureCollection",
      features: [{
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [ -73.6, 45.5, 50 ]
        }
      }],
    }
};

// Other variables
let olIndex = 0;
let currentHeadlineBoldIndex = 0;
let currentDifferentiationIndex = 0;
let currentConsoleLine = 0;
let currentConsoleCharacter = -1;


// Start the text rotations
updateOL();
updateJson();
updateHeadlineBold();
updateMiddlewareDifferentiation();
updateTerminal();


// Update the one-liner elements
function updateOL() {
  let currentTerm = document.querySelector(OL_ELEMENTS[olIndex]);
  let previousTerm = document.querySelector(
          OL_ELEMENTS[(olIndex - 1 + OL_ELEMENTS.length) % OL_ELEMENTS.length]);

  currentTerm.setAttribute('class', 'text-body-emphasis');
  previousTerm.setAttribute('class', 'text-body');

  olIndex = (olIndex + 1) % OL_ELEMENTS.length;
  setTimeout(updateOL, OL_UPDATE_MILLISECONDS);
}


// Update the JSON
function updateJson() {
  raddec.timestamp = Date.now();
  raddec.rssiSignature[0].rssi += Math.round((Math.random() - 0.5) * 20);
  raddec.rssiSignature[0].numberOfDecodings = 1 + Math.round(Math.random() * 5);

  dynamb.batteryVoltage += Math.round((Math.random() - 0.5) * 20) / 100;
  dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  dynamb.timestamp = Date.now();
  dynamb.txCount++;
  dynamb.uptime += JSON_UPDATE_MILLISECONDS;

  spatem.timestamp = Date.now();
  spatem.data.features[0].geometry.coordinates.forEach((coordinate, index) => {
    spatem.data.features[0].geometry.coordinates[index] = coordinate +
                                  Math.round((Math.random() - 0.5) * 20) / 100;
  });

  raddecjson.textContent = JSON.stringify(raddec, null, 2);
  dynambjson.textContent = JSON.stringify(dynamb, null, 2);
  spatemjson.textContent = JSON.stringify(spatem, null, 2);
  setTimeout(updateJson, JSON_UPDATE_MILLISECONDS);
}


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