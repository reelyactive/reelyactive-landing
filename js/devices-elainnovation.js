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
    timestamp: Date.now()
};
let magdynamb = {
    deviceId: "e1a0000003a9",
    deviceIdType: 2,
    isContactDetected: [ true ],
    timestamp: Date.now()
};
let pirdynamb = {
    deviceId: "e1a000000714",
    deviceIdType: 2,
    isMotionDetected: [ true ],
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
  movdynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  movdynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  movdynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  movdynamb.isMotionDetected[0] = (Math.random() > 0.5);
  movdynamb.timestamp = Date.now();
}

// Update the MAG sensor
function updateMag() {
  magdynamb.isContactDetected[0] = (Math.random() > 0.1);
  magdynamb.timestamp = Date.now();
}

// Update the PIR sensor
function updatePir() {
  movdynamb.isMotionDetected[0] = (Math.random() > 0.6);
  movdynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateRht();
  updateMag();
  updateMov();
  updatePir();
  cuttlefishDynamb.render(rhtdynamb, rhtcuttlefish, {});
  cuttlefishDynamb.render(magdynamb, magcuttlefish, {});
  cuttlefishDynamb.render(movdynamb, movcuttlefish, {});
  cuttlefishDynamb.render(pirdynamb, pircuttlefish, {});
  rhtjson.textContent = JSON.stringify(rhtdynamb, null, 2);
  movjson.textContent = JSON.stringify(movdynamb, null, 2);
  magjson.textContent = JSON.stringify(magdynamb, null, 2);
  pirjson.textContent = JSON.stringify(pirdynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}