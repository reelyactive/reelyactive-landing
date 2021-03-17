// Constants
const HLC_ITERATION_MILLISECONDS = 4800;
const COSE_LAYOUT_OPTIONS = {
    name: "cose",
    animate: false,
    randomize: true,
    gravity: 3,
    componentSpacing: 120
};
const RECEIVER_SIZE_DIVISOR = 8;
const TRANSMITTER_SIZE_DIVISOR = 16;
const PAN_DIVISOR = 32;
const DEFAULT_TRANSMITTER_IMAGE = 
                  "https://www.reelyactive.com/images/transmitter-default.png";
const TRANSMITTER_SIGNATURES = [ '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
const RECEIVER_SIGNATURES = [ 'a', 'b', 'c' ];
const TRANSMITTER_IMAGES = [
    'https://www.reelyactive.com/images/transmitter-bicycle.png',
    'https://www.reelyactive.com/images/transmitter-box.png',
    'https://www.reelyactive.com/images/transmitter-camera.png',
    'https://www.reelyactive.com/images/transmitter-display.png',
    'https://www.reelyactive.com/images/transmitter-door.png',
    'https://www.reelyactive.com/images/transmitter-fireextinguisher.png',
    'https://www.reelyactive.com/images/transmitter-firstaidkit.png',
    'https://www.reelyactive.com/images/transmitter-headphones.png',
    'https://www.reelyactive.com/images/transmitter-headphones.png',
    'https://www.reelyactive.com/images/transmitter-idbadge.png',
    'https://www.reelyactive.com/images/transmitter-idbadge.png',
    'https://www.reelyactive.com/images/transmitter-idbadge.png',
    'https://www.reelyactive.com/images/transmitter-laptop.png',
    'https://www.reelyactive.com/images/transmitter-laptop.png',
    'https://www.reelyactive.com/images/transmitter-lightbulb.png',
    'https://www.reelyactive.com/images/transmitter-lightbulb.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-mobile.png',
    'https://www.reelyactive.com/images/transmitter-pallet.png',
    'https://www.reelyactive.com/images/transmitter-palletjack.png',
    'https://www.reelyactive.com/images/transmitter-shoppingcart.png',
    'https://www.reelyactive.com/images/transmitter-tag.png',
    'https://www.reelyactive.com/images/transmitter-tag.png',
    'https://www.reelyactive.com/images/transmitter-tag.png',
    'https://www.reelyactive.com/images/transmitter-tag.png',
    'https://www.reelyactive.com/images/transmitter-thermometer.png',
    'https://www.reelyactive.com/images/transmitter-thermometer.png',
    'https://www.reelyactive.com/images/transmitter-tools.png',
    'https://www.reelyactive.com/images/transmitter-trash.png',
    'https://www.reelyactive.com/images/transmitter-videocamera.png',
    'https://www.reelyactive.com/images/transmitter-wheelchair.png'
];
const RECEIVER_IMAGES = [
    'https://www.reelyactive.com/stories/office/callbooths/320x320.jpg',
    'https://www.reelyactive.com/stories/office/conferenceroom/320x320.jpg',
    'https://www.reelyactive.com/stories/office/elevators/320x320.jpg',
    'https://www.reelyactive.com/stories/office/hallway/320x320.jpg',
    'https://www.reelyactive.com/stories/office/hotdesking/320x320.jpg',
    'https://www.reelyactive.com/stories/office/kitchen/320x320.jpg',
    'https://www.reelyactive.com/stories/office/lounge/320x320.jpg',
    'https://www.reelyactive.com/stories/office/nook/320x320.jpg',
    'https://www.reelyactive.com/stories/office/reception/320x320.jpg',
    'https://www.reelyactive.com/stories/office/supplies/320x320.jpg'
];
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
let animatedTransmitterIndex = 0;
let receiverNodeSize = window.innerWidth / RECEIVER_SIZE_DIVISOR;
let transmitterNodeSize = window.innerWidth / TRANSMITTER_SIZE_DIVISOR;
let GRAPH_STYLE = [
    { selector: "node[type='transmitter']",
      style: { "background-color": "#83b7d0", "border-color": "#83b7d0",
               "border-width": "2px", "width": transmitterNodeSize,
               "height": transmitterNodeSize,
               "background-fit": "cover cover",
               "background-image": DEFAULT_TRANSMITTER_IMAGE } },
    { selector: "node[type='receiver']",
      style: { "background-color": "#aec844", "border-color": "#aec844",
               "border-width": "2px", "width": receiverNodeSize,
               "height": receiverNodeSize } },
    { selector: "node[image]",
      style: { "background-image": "data(image)",
               "background-fit": "cover cover" } },
    { selector: "edge", style: { "curve-style": "haystack",
                                 "line-color": "#ddd" } },
];


// Initialise Cytoscape
let cy = cytoscape({
    container: document.getElementById('cy-hero'),
    layout: COSE_LAYOUT_OPTIONS,
    style: GRAPH_STYLE
});

// Create initial graph
let layout = cy.layout({ name: "cose", cy: cy });
cy.add({ group: "nodes", data: { id: "1", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "2", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "3", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "4", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "5", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "6", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "7", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "8", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "9", type: "transmitter" } });
cy.add({ group: "nodes", data: { id: "a", type: "receiver" } });
cy.add({ group: "nodes", data: { id: "b", type: "receiver" } });
cy.add({ group: "nodes", data: { id: "c", type: "receiver" } });
cy.add({ group: "edges", data: { id: "1a", source: "1", target: "a" } });
cy.add({ group: "edges", data: { id: "2a", source: "2", target: "a" } });
cy.add({ group: "edges", data: { id: "3a", source: "3", target: "a" } });
cy.add({ group: "edges", data: { id: "3b", source: "3", target: "b" } });
cy.add({ group: "edges", data: { id: "4b", source: "4", target: "b" } });
cy.add({ group: "edges", data: { id: "5b", source: "5", target: "b" } });
cy.add({ group: "edges", data: { id: "6b", source: "6", target: "b" } });
cy.add({ group: "edges", data: { id: "7c", source: "7", target: "c" } });
cy.add({ group: "edges", data: { id: "8c", source: "8", target: "c" } });
cy.add({ group: "edges", data: { id: "9c", source: "9", target: "c" } });

// Animate the hyperlocal context graph
assignNodeImages();
updateLayout();


// Assign the images of the graph nodes
function assignNodeImages() {
  let usedReceiverImageIndices = [];

  RECEIVER_SIGNATURES.forEach(function(signature) {
    let node = cy.getElementById(signature);
    let index = Math.floor(Math.random() * RECEIVER_IMAGES.length);
    while(usedReceiverImageIndices.includes(index)) {
      index = Math.floor(Math.random() * RECEIVER_IMAGES.length);
    }
    node.data('image', RECEIVER_IMAGES[index]);
    usedReceiverImageIndices.push(index);
  });

  TRANSMITTER_SIGNATURES.forEach(function(signature) {
    let node = cy.getElementById(signature);
    let index = Math.floor(Math.random() * TRANSMITTER_IMAGES.length);
    node.data('imageReveal', TRANSMITTER_IMAGES[index]);
  });
}


// Update the graph layoutcy.getElementById(signature)
function updateLayout() {
  let minContainerDimension = Math.min(cy.width(), cy.height());
  receiverNodeSize = minContainerDimension / RECEIVER_SIZE_DIVISOR;
  transmitterNodeSize = minContainerDimension / TRANSMITTER_SIZE_DIVISOR;

  cy.stop();
  layout.stop();
  layout = cy.elements().makeLayout(COSE_LAYOUT_OPTIONS);
  layout.run();
  animateTransmitter();
}


// Animate the next random transmitter and repeat after timeout
function animateTransmitter() {
  let signature = TRANSMITTER_SIGNATURES[animatedTransmitterIndex];
  let currentTransmitter = cy.getElementById(signature);
  let nextTransmitter;
  let nextIndex = animatedTransmitterIndex;

  while(nextIndex === animatedTransmitterIndex) {
    nextIndex = Math.floor(Math.random() * TRANSMITTER_SIGNATURES.length);
  }
  signature = TRANSMITTER_SIGNATURES[nextIndex];
  nextTransmitter = cy.getElementById(signature);
  animatedTransmitterIndex = nextIndex;

  currentTransmitter.animate({
    style: { backgroundImage: DEFAULT_TRANSMITTER_IMAGE },
    duration: 1
  });
  nextTransmitter.animate({
    style: { backgroundImage: nextTransmitter.data('imageReveal') },
    duration: 1
  });

  let panX = (Math.random() - 0.5) * cy.width() / PAN_DIVISOR;
  let panY = (Math.random() - 0.5) * cy.height() / PAN_DIVISOR;

  cy.animate({
    panBy: { x: panX, y: panY },
    duration: HLC_ITERATION_MILLISECONDS,
    easing: 'ease-in-out',
    complete: animateTransmitter
  });
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

updateTerminal();


// Re-animate on resize
cy.on('resize', updateLayout);