// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let n6cuttlefish = document.querySelector('#n6cuttlefish');
let n6json = document.querySelector('#n6json');
let ae3cuttlefish = document.querySelector('#ae3cuttlefish');
let ae3json = document.querySelector('#ae3json');
let rt1062cuttlefish = document.querySelector('#rt1062cuttlefish');
let rt1062json = document.querySelector('#rt1062json');


// Variables
let n6dynamb = {
    deviceId: "04e787000076",
    deviceIdType: 3,
    acceleration: [ 0, 0, 1 ],
    soundPressure: 42,
    temperature: 21,
    timestamp: Date.now()
};
let ae3dynamb = {
    deviceId: "04e787000ae3",
    deviceIdType: 3,
    acceleration: [ 0, 0, 1 ],
    distance: 1.00,
    soundPressure: 42,
    temperature: 21,
    timestamp: Date.now()
};
let rt1062dynamb = {
    deviceId: "04e787471062",
    deviceIdType: 3,
    acceleration: [ 0, 0, 1 ],
    temperature: 21,
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the N6 camera
function updateN6() {
  n6dynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  n6dynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  n6dynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  n6dynamb.soundPressure += Math.round((Math.random() - 0.5) * 10);
  n6dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  n6dynamb.timestamp = Date.now();
}


// Update the AE3 camera
function updateAE3() {
  ae3dynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  ae3dynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  ae3dynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  ae3dynamb.distance += Math.round(10 * (Math.random() - 0.5)) / 100;
  ae3dynamb.soundPressure += Math.round((Math.random() - 0.5) * 10);
  ae3dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  ae3dynamb.timestamp = Date.now();
}

// Update the RT1062 camera
function updateRT1062() {
  rt1062dynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  rt1062dynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  rt1062dynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  rt1062dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  rt1062dynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateN6();
  updateAE3();
  updateRT1062();
  cuttlefishDynamb.render(n6dynamb, n6cuttlefish, {});
  cuttlefishDynamb.render(ae3dynamb, ae3cuttlefish, {});
  cuttlefishDynamb.render(rt1062dynamb, rt1062cuttlefish, {});
  n6json.textContent = JSON.stringify(n6dynamb, null, 2);
  ae3json.textContent = JSON.stringify(ae3dynamb, null, 2);
  rt1062json.textContent = JSON.stringify(rt1062dynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}