// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let rhtcuttlefish = document.querySelector('#rhtcuttlefish');
let rhtjson = document.querySelector('#rhtjson');
let movcuttlefish = document.querySelector('#movcuttlefish');
let movjson = document.querySelector('#movjson');
let magcuttlefish = document.querySelector('#magcuttlefish');
let magjson = document.querySelector('#magjson');
let pircuttlefish = document.querySelector('#pircuttlefish');
let pirjson = document.querySelector('#pirjson');
let dicuttlefish = document.querySelector('#dicuttlefish');
let dijson = document.querySelector('#dijson');


// Variables
let rhtdynamb = {
    deviceId: "e1a000000487",
    deviceIdType: 2,
    relativeHumidity: 50,
    temperature: 21,
    timestamp: Date.now()
};
let movdynamb = {
    deviceId: "e1a000000307",
    deviceIdType: 2,
    acceleration: [ 0.1, -0.1, 0.9 ],
    isMotionDetected: [ true ],
    isMotionDetectedCycle: 1,
    timestamp: Date.now()
};
let magdynamb = {
    deviceId: "e1a0000003a9",
    deviceIdType: 2,
    isContactDetected: [ true ],
    isContactDetectedCycle: 1,
    timestamp: Date.now()
};
let pirdynamb = {
    deviceId: "e1a000000714",
    deviceIdType: 2,
    isMotionDetected: [ true ],
    isMotionDetectedCycle: 1,
    timestamp: Date.now()
};
let didynamb = {
    deviceId: "e1a0000000d1",
    deviceIdType: 2,
    isInputDetected: [ true ],
    isInputDetectedCycle: 1,
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the RHT sensor
function updateRht() {
  rhtdynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  rhtdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  rhtdynamb.timestamp = Date.now();
}


// Update the MOV sensor
function updateMov() {
  let wasMotionDetected = movdynamb.isMotionDetected[0];
  movdynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  movdynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  movdynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  movdynamb.isMotionDetected[0] = (Math.random() > 0.5);
  if(movdynamb.isMotionDetected[0] !== wasMotionDetected) {
    movdynamb.isMotionDetectedCycle = ++movdynamb.isMotionDetectedCycle % 256;
  }
  movdynamb.timestamp = Date.now();
}

// Update the MAG sensor
function updateMag() {
  let wasContactDetected = magdynamb.isContactDetected[0];
  magdynamb.isContactDetected[0] = (Math.random() > 0.1);
  if(magdynamb.isContactDetected[0] !== wasContactDetected) {
    magdynamb.isContactDetectedCycle = ++magdynamb.isContactDetectedCycle % 256;
  }
  magdynamb.timestamp = Date.now();
}

// Update the PIR sensor
function updatePir() {
  let wasMotionDetected = pirdynamb.isMotionDetected[0];
  pirdynamb.isMotionDetected[0] = (Math.random() > 0.6);
  if(pirdynamb.isMotionDetected[0] !== wasMotionDetected) {
    pirdynamb.isMotionDetectedCycle = ++pirdynamb.isMotionDetectedCycle % 256;
  }
  pirdynamb.timestamp = Date.now();
}

// Update the DI sensor
function updateDi() {
  let wasInputDetected = didynamb.isInputDetected[0];
  didynamb.isInputDetected[0] = (Math.random() > 0.5);
  if(didynamb.isInputDetected[0] !== wasInputDetected) {
    didynamb.isInputDetectedCycle = ++didynamb.isInputDetectedCycle % 256;
  }
  didynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateRht();
  updateMag();
  updateMov();
  updatePir();
  updateDi();
  cuttlefishDynamb.render(rhtdynamb, rhtcuttlefish, {});
  cuttlefishDynamb.render(magdynamb, magcuttlefish, {});
  cuttlefishDynamb.render(movdynamb, movcuttlefish, {});
  cuttlefishDynamb.render(pirdynamb, pircuttlefish, {});
  cuttlefishDynamb.render(didynamb, dicuttlefish, {});
  rhtjson.textContent = JSON.stringify(rhtdynamb, null, 2);
  movjson.textContent = JSON.stringify(movdynamb, null, 2);
  magjson.textContent = JSON.stringify(magdynamb, null, 2);
  pirjson.textContent = JSON.stringify(pirdynamb, null, 2);
  dijson.textContent = JSON.stringify(didynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}