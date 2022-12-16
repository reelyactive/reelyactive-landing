/**
 * Copyright reelyActive 2022
 * We believe in an open Internet of Things
 */


// The Owl-iday content
const OWLIDAY_DEVICES = {
    "h0h0h0h0h0h0/0": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/treelyactive/", version: "2012" },
      dynamb: { unicodeCodePoints: [ 127876 ], illuminance: 1225 },
      position: [ 0, 0 ]
    },
    "reelyactivesubghz/0": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/reelyactive/" },
      nearest: [ { device: "h0h0h0h0h0h0/0" } ]
    },
    "bluetoothle5/0": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/bluetoothlowenergy/" },
      nearest: [ { device: "h0h0h0h0h0h0/0" } ]
    },
    "rainrfid/0": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/rain-rfid/" },
      nearest: [ { device: "h0h0h0h0h0h0/0" } ]
    },
    "enoceanalliance/0": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/enocean-alliance/" },
      nearest: [ { device: "h0h0h0h0h0h0/0" } ]
    },
    "001bc50940802022/1": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/ra-r432/", version: "RA-R432" },
      dynamb: { unicodeCodePoints: [ 129417 ], temperature: 20.12 },
      nearest: [ { device: "reelyactivesubghz/0" } ]
    },
    "001bc50940812022/1": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/ra-r436/", version: "RA-R436" },
      dynamb: { unicodeCodePoints: [ 129417 ], temperature: 20.14 },
      nearest: [ { device: "bluetoothle5/0" } ]
    },
    "001bc50940822022/1": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/owl-in-one/", version: "RA-H443" },
      dynamb: { unicodeCodePoints: [ 129417 ], temperature: 20.16 },
      nearest: [ { device: "bluetoothle5/0" } ]
    },
    "p1p1p1p1p1p1/2": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/raspberry-pi/", version: "3B+" },
      dynamb: { unicodeCodePoints: [ 129383 ] },
      nearest: [ { device: "bluetoothle5/0" } ]
    },
    "001bc50940832022/1": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/pi-dual-ble113/" },
      dynamb: { unicodeCodePoints: [ 129417 ], temperature: 20.18 },
      nearest: [ { device: "p1p1p1p1p1p1/2" } ]
    },
    "001bc50940102022/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/ra-t411/" },
      dynamb: { unicodeCodePoints: [ 129417 ], temperature: 20.12 },
      nearest: [ { device: "001bc50940802022/1" } ]
    },
    "banglejsv200/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/banglejs/", version: "2" },
      dynamb: { unicodeCodePoints: [ 128578 ], temperature: 20.21,
                nearest: [ { deviceId: "cavabracelet", rssi: -72 } ],
                heartRate: 60 },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "cavabracelet/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/cavabracelet/" },
      dynamb: { unicodeCodePoints: [ 128567 ], temperature: 20.20,
                nearest: [ { deviceId: "banglejs", rssi: -66 } ] },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "lairdbt71022/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/laird-bt710/" },
      dynamb: { temperature: 20.20 },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "minewb102022/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/minew-b10/" },
      dynamb: { unicodeCodePoints: [ 129301 ], temperature: 20.22,
                isButtonPressed: [ true ] },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "minewe8s2022/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/minew-e8/" },
      dynamb: { temperature: 20.16, acceleration: [ 0.12, -0.96, -0.21 ] },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "minewmwl0122/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/minew-mwl01/" },
      dynamb: { temperature: 20.22 },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "puckjsv22022/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/puckjs/" },
      dynamb: { unicodeCodePoints: [ 129451 ], temperature: 20.16,
                isButtonPressed: [ true ] },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    },
    "wiliotpixel0/3": {
      statid: { uri: "https://www.reelyactive.com/owlidays/2022/wiliot-pixel/" },
      dynamb: { temperature: 20.22 },
      nearest: [ { device: "001bc50940812022/1" },
                 { device: "001bc50940822022/1" }, { device: "p1p1p1p1p1p1/2" },
                 { device: "001bc50940832022/1" } ]
    }
};
const OWLIDAY_EDGE_NAME = 'o~o~o~o~o';


// Constants
const TIME_OPTIONS = { hour12: false };
const MAX_RSSI = -30;
const HLC_MIN_HEIGHT_PX = 480;
const HLC_UNUSABLE_HEIGHT_PX = 120;
const COSE_LAYOUT_OPTIONS = {
    name: "cose",
    animate: false,
    randomize: false,
    initialTemp: 40
};
const GRAPH_STYLE = [
    { selector: "node",
      style: { label: "data(name)", "font-size": "0.5em",
               "min-zoomed-font-size": "16px" } },
    { selector: "node[image]",
      style: { "background-image": "data(image)", "border-color": "#83b7d0",
               "background-fit": "cover cover", "border-width": "2px" } },
    { selector: "edge", style: { "curve-style": "haystack",
                                 "line-color": "#ddd", label: "data(name)",
                                 "text-rotation": "autorotate",
                                 color: "#5a5a5a", "font-size": "0.25em",
                                 "min-zoomed-font-size": "12px" } },
    { selector: ".cyDeviceNode",
      style: { "background-color": "#83b7d0", "border-color": "#83b7d0" } },
    { selector: ".cyAnchorNode",
      style: { "background-color": "#0770a2", "border-color": "#0770a2" } },
    { selector: ".cySelectedNode",
      style: { "background-color": "#ff6900", "border-color": "#ff6900" } }
];

// DOM elements
let connection = document.querySelector('#connection');
let reinitialise = document.querySelector('#reinitialise');
let time = document.querySelector('#time');
let offcanvas = document.querySelector('#offcanvas');
let offcanvasTitle = document.querySelector('#offcanvasTitle');
let offcanvasBody = document.querySelector('#offcanvasBody');
let storyDisplay = document.querySelector('#storyDisplay');
let dynambDisplay = document.querySelector('#dynambDisplay');

// Other variables
let baseUrl = window.location.protocol + '//' + window.location.hostname +
              ':' + window.location.port;
let bsOffcanvas = new bootstrap.Offcanvas(offcanvas);
let selectedDeviceSignature;
let storyImageData;
let devices = {};
let cy;
let layout;


// Monitor buttons
reinitialise.onclick = init;

// Monitor offcanvas hide/close
offcanvas.addEventListener('hidden.bs.offcanvas', handleOffcanvasHide);


// Initialisation: poll the context once and display the result
init(true);


// Initialise to full context, no polling
function init(isInitialPageLoad) {
  devices = OWLIDAY_DEVICES;
  selectedDeviceSignature = null;

  bsOffcanvas.hide();
  setContainerHeight();
  renderHyperlocalContext();
  fetchStories();
}


// Fetch stories from devices with URIs
function fetchStories() {
  for(const deviceSignature in devices) {
    let device = devices[deviceSignature];
    let url = device.url;

    if(!url && device.hasOwnProperty('statid')) {
      url = device.statid.uri;
    }

    if(url) {
      cormorant.retrieveStory(url, function(story) {
        let isExistingNode = (cy.getElementById(deviceSignature).size() > 0);
        if(story && isExistingNode) {
          let node = cy.getElementById(deviceSignature);
          let name = cuttlefishStory.determineTitle(story);
          let imageUrl = cuttlefishStory.determineImageUrl(story);

          node.data('name', name);
          if(imageUrl) { node.data('image', imageUrl); }
        }
      });
    }
  }
}


// Retrieve the device story if already fetched by cormorant
function retrieveDeviceStory(device) {
  if(device.url && cormorant.stories[device.url]) {
    return cormorant.stories[device.url];
  }

  if(device.hasOwnProperty('statid') && device.statid.uri &&
     cormorant.stories[device.statid.uri]) {
    return cormorant.stories[device.statid.uri];
  }

  return null;
}


// Add a device node to the hyperlocal context graph
function addDeviceNode(deviceSignature, device) {
  let name = determineDeviceName(device);
  let imageUrl;
  let story = retrieveDeviceStory(device);

  if(story) {
    name = cuttlefishStory.determineTitle(story) || name;
    imageUrl = cuttlefishStory.determineImageUrl(story);
  }

  let isAnchor = device.hasOwnProperty('position') &&
                 Array.isArray(device.position) &&
                 (device.position.length >= 2) &&
                 (typeof device.position[0] === 'number') &&
                 (typeof device.position[1] === 'number');
  let nodeClass = isAnchor ? 'cyAnchorNode' : 'cyDeviceNode';
  let isExistingNode = (cy.getElementById(deviceSignature).size() > 0);

  if(!isExistingNode && !isAnchor) {
    cy.add({ group: "nodes", data: { id: deviceSignature } });
  }
  else if(!isExistingNode) {
    cy.add({ group: "nodes", data: { id: deviceSignature,
                                     position: { x: device.position[0],
                                                 y: device.position[1] } } });
  }

  let node = cy.getElementById(deviceSignature);
  node.data('name', name);
  node.addClass(nodeClass);
  if(imageUrl) { node.data('image', imageUrl); }

  if(device.hasOwnProperty('nearest')) {
    device.nearest.forEach(function(entry) {
      let peerSignature = entry.device;
      let edgeSignature = deviceSignature + '@' + peerSignature;
      let isExistingEdge = (cy.getElementById(edgeSignature).size() > 0);
      isExistingNode = (cy.getElementById(peerSignature).size() > 0);

      if(!isExistingNode) {
        cy.add({ group: "nodes", data: { id: peerSignature } });
      }
      if(!isExistingEdge) {
        cy.add({ group: "edges", data: { id: edgeSignature,
                                         source: deviceSignature,
                                         target: peerSignature,
                                         name: OWLIDAY_EDGE_NAME } });
      }
    });
  }
}


// Determine the name of the device, if any
function determineDeviceName(device) {
  if(device.hasOwnProperty('directory')) {
    return device.directory;
  }

  if(device.hasOwnProperty('statid') && device.statid.hasOwnProperty('name')) {
    return device.statid.name;
  }

  if(device.hasOwnProperty('tags') && Array.isArray(device.tags)) {
    return device.tags[0];
  }

  if(Array.isArray(device.position)) {
    let position = '';

    device.position.forEach((coordinate) => {
      position += coordinate.toFixed(6) + ', ';
    });
    
    return position.substring(0, position.length - 2);
  }

  return '';
}


// Update the offcanvas body based on the selected device
function updateOffcanvasBody(device) {
  let dynambContent = new DocumentFragment();
  let statidContent = new DocumentFragment();
  let story = retrieveDeviceStory(device);

  if(story) {
    cuttlefishStory.render(story, storyDisplay);
  }
  else {
    storyDisplay.replaceChildren();
  }

  if(device.hasOwnProperty('dynamb')) {
    dynambContent = cuttlefishDynamb.render(device.dynamb);
  }
  if(device.hasOwnProperty('statid')) {
    statidContent = cuttlefishStatid.render(device.statid);
  }

  dynambDisplay.replaceChildren(dynambContent);
  statidDisplay.replaceChildren(statidContent);
}


// Handle a user tap on a specific node
function handleNodeTap(event) {
  let device = event.target;

  if(selectedDeviceSignature &&
     (cy.getElementById(selectedDeviceSignature).size() > 0)) {
    cy.getElementById(selectedDeviceSignature).removeClass('cySelectedNode');
  }

  selectedDeviceSignature = device.id();
  cy.getElementById(selectedDeviceSignature).addClass('cySelectedNode');
  offcanvasTitle.textContent = selectedDeviceSignature;
  updateOffcanvasBody(devices[selectedDeviceSignature]);
  bsOffcanvas.show();
}


// Handle an offcanvas hide
function handleOffcanvasHide() {
  if(selectedDeviceSignature &&
     (cy.getElementById(selectedDeviceSignature).size() > 0)) {
    cy.getElementById(selectedDeviceSignature).removeClass('cySelectedNode');
  }

  selectedDeviceSignature = null;
}


// Render the hyperlocal context graph
function renderHyperlocalContext() {
  let options = {
      container: document.getElementById('cy'),
      layout: COSE_LAYOUT_OPTIONS,
      style: GRAPH_STYLE
  };
  let layoutName = 'cose';

  cy = cytoscape(options);
  layout = cy.layout({ name: layoutName, cy: cy });

  cy.on('tap', 'node', handleNodeTap);

  for(const deviceSignature in devices) {
    let device = devices[deviceSignature];

    addDeviceNode(deviceSignature, device);

    if(deviceSignature === selectedDeviceSignature) {
      updateOffcanvasBody(device);
    }
  }

  if(selectedDeviceSignature &&
     (cy.getElementById(selectedDeviceSignature).size() > 0)) {
    cy.getElementById(selectedDeviceSignature).addClass('cySelectedNode');
  }

  layout.stop();
  layout = cy.elements().makeLayout(options.layout);
  layout.run();
  time.textContent = new Date().toLocaleTimeString([], TIME_OPTIONS);
}


// Set the height of the graph container
function setContainerHeight() {
  let container = document.getElementById('cy-container');
  let height = Math.max(window.innerHeight - HLC_UNUSABLE_HEIGHT_PX,
                        HLC_MIN_HEIGHT_PX) + 'px';
  container.setAttribute('style', 'height:' + height);
}


// Create an element as specified
function createElement(elementName, classNames, content) {
  let element = document.createElement(elementName);

  if(classNames) {
    element.setAttribute('class', classNames);
  }

  if((content instanceof Element) || (content instanceof DocumentFragment)) {
    element.appendChild(content);
  }
  else if(Array.isArray(content)) {
    content.forEach(function(item) {
      if((item instanceof Element) || (item instanceof DocumentFragment)) {
        element.appendChild(item);
      }
      else {
        element.appendChild(document.createTextNode(item));
      }
    });
  }
  else if(content) {
    element.appendChild(document.createTextNode(content));
  }

  return element;
}
