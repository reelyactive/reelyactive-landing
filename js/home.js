// Constants
const USECASE_ITERATION_MILLISECONDS = 2400;
const HLC_ITERATION_MILLISECONDS = 4800;
const COSE_LAYOUT_OPTIONS = {
    name: "cose",
    animate: false,
    randomize: true,
    initialTemp: 40
};
const GRAPH_STYLE = [
    { selector: "node[type='transmitter']",
      style: { "background-color": "#83b7d0", "border-color": "#83b7d0",
               "border-width": "2px" } },
    { selector: "node[type='receiver']",
      style: { "background-color": "#aec844", "border-color": "#aec844",
               "border-width": "2px" } },
    { selector: "node[image]",
      style: { "background-image": "data(image)",
               "background-fit": "cover cover" } },
    { selector: "edge", style: { "curve-style": "haystack",
                                 "line-color": "#ddd" } },
];
const TRANSMITTER_SIGNATURES = [ '1', '2', '3', '4', '5', '6', '7', '8' ];
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

// Animate the hyperlocal context graph
animateHyperlocalContext();


// Update the images of the graph nodes
function updateGraph() {
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
    node.data('image', TRANSMITTER_IMAGES[index]);
  });
}


// Update the graph layout
function updateLayout() {
  layout.stop();
  layout = cy.elements().makeLayout(COSE_LAYOUT_OPTIONS);
  layout.run();
}


// Update the hyperlocal context display
function animateHyperlocalContext() {
  updateGraph();
  updateLayout();
  setTimeout(animateHyperlocalContext, HLC_ITERATION_MILLISECONDS);
}