// Constants
const DEVICE_PROPERTIES_MAP = new Map([
  [ "d01", { imageUrl: "../images/transmitter-mobile.png" } ],
  [ "d02", { imageUrl: "../images/transmitter-mobile.png" } ],
  [ "d03", { imageUrl: "../images/transmitter-laptop.png" } ],
  [ "d04", { imageUrl: "../images/transmitter-mobile.png" } ],
  [ "d05", { imageUrl: "../images/transmitter-display.png" } ],
  [ "d06", { imageUrl: "../images/transmitter-display.png" } ],
  [ "d07", { imageUrl: "../images/transmitter-tag.png" } ],
  [ "d08", { imageUrl: "../images/transmitter-tag.png" } ],
  [ "d09", { imageUrl: "../images/transmitter-thermometer.png" } ],
  [ "d10", { imageUrl: "../images/transmitter-mobile.png" } ],
  [ "d11", { imageUrl: "../images/transmitter-mobile.png" } ],
  [ "d12", { imageUrl: "../images/transmitter-idbadge.png" } ],
  [ "d13", { imageUrl: "../images/transmitter-idbadge.png" } ],
  [ "d14", { imageUrl: "../images/transmitter-lightbulb.png" } ],
  [ "d15", { imageUrl: "../images/transmitter-door.png" } ],
  [ "i01", { imageUrl: "https://www.reelyactive.com/stories/office/nook/320x320.jpg" } ],
  [ "i02", { imageUrl: "https://www.reelyactive.com/stories/office/conferenceroom/320x320.jpg" } ],
  [ "i03", { imageUrl: "https://www.reelyactive.com/stories/office/elevators/320x320.jpg" } ]
]);
const DEVICES = {
  "d01": { nearest: [ { device: "i01", rssi: -61 },
                      { device: "i02", rssi: -84 } ] },
  "d02": { nearest: [ { device: "i01", rssi: -69 } ] },
  "d03": { nearest: [ { device: "i01", rssi: -59 } ] },
  "d04": { nearest: [ { device: "i02", rssi: -61 },
                      { device: "i03", rssi: -84 } ] },
  "d05": { nearest: [ { device: "i03", rssi: -54 } ] },
  "d06": { nearest: [ { device: "i03", rssi: -59 } ] },
  "d07": { nearest: [ { device: "i02", rssi: -53 } ] },
  "d08": { nearest: [ { device: "i03", rssi: -53 } ] },
  "d09": { nearest: [ { device: "i03", rssi: -63 } ] },
  "d10": { nearest: [ { device: "i03", rssi: -61 } ] },
  "d11": { nearest: [ { device: "i03", rssi: -55 } ] },
  "d12": { nearest: [ { device: "i02", rssi: -77 } ] },
  "d13": { nearest: [ { device: "i02", rssi: -49 } ] },
  "d14": { nearest: [ { device: "i01", rssi: -46 } ] },
  "d15": { nearest: [ { device: "i02", rssi: -56 } ] },
  "i01": { position: [] },
  "i02": { position: [] },
  "i03": { position: [] }
}
const CONSOLE_TEXT = [
    'npm install -g pareto-anywhere',
    '+ pareto-anywhere@1.x.x',
    'pareto-anywhere',
    'Pareto Anywhere by reelyActive is running on port 3001'
];
const INCLUDE_CONSOLE_PROMPT = [ true, false, true, false ];
const DEFAULT_CONSOLE_UPDATE_MILLISECONDS = 100;
const NEWLINE_CONSOLE_UPDATE_MILLISECONDS = 1200;
const LOOPED_CONSOLE_UPDATE_MILLISECONDS = 4800;


// DOM elements
let terminal = document.querySelector('#terminal');


// Other variables
let currentConsoleLine = 0;
let currentConsoleCharacter = -1;


// Spin the hyperlocal context web
charlotte.init(document.getElementById('cy-hero'), DEVICE_PROPERTIES_MAP);
charlotte.spin(DEVICES);


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

updateTerminal();