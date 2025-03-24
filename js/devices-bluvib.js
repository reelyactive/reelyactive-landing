// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let tricuttlefish = document.querySelector('#tricuttlefish');
let trijson = document.querySelector('#trijson');
let unicuttlefish = document.querySelector('#unicuttlefish');
let unijson = document.querySelector('#unijson');


// Variables
let tridynamb = {
    deviceId: "b10041b3a815",
    deviceIdType: 3,
    acceleration: [ 0.0, 0.0, 1.0 ],
    accelerationSamplingRate: 2560,
    accelerationTimeSeries: [],
    temperature: 88,
    velocityOverall: [ 0.0015, 0.0020, 0.0025 ],
    timestamp: Date.now()
};
let unidynamb = {
    deviceId: "b10041b1a815",
    deviceIdType: 3,
    acceleration: [ 1.0 ],
    accelerationSamplingRate: 12800,
    accelerationTimeSeries: [],
    temperature: 88,
    velocityOverall: [ 0.0020 ],
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the triaxial sensor
function updateTri() {
  tridynamb.acceleration.forEach((axis, index) => {
    tridynamb.acceleration[index] += (Math.random() - 0.5) / 10;
  });
  tridynamb.temperature += (Math.random() - 0.5) * 2;
  tridynamb.velocityOverall.forEach((axis, index) => {
    tridynamb.velocityOverall[index] += (Math.random() - 0.5) / 1000;
    if(tridynamb.velocityOverall[index] < 0) {
      tridynamb.velocityOverall[index] *= -2;
    }
  });
  tridynamb.timestamp = Date.now();
}


// Update the uniaxial sensor
function updateUni() {
  unidynamb.acceleration[0] += (Math.random() - 0.5) / 10;
  unidynamb.temperature += (Math.random() - 0.5) * 2;
  unidynamb.velocityOverall[0] += (Math.random() - 0.5) / 1000;
  if(unidynamb.velocityOverall[0] < 0) {
    unidynamb.velocityOverall[0] *= -2;
  }
  unidynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateTri();
  updateUni();
  cuttlefishDynamb.render(tridynamb, tricuttlefish, {});
  cuttlefishDynamb.render(unidynamb, unicuttlefish, {});
  trijson.textContent = JSON.stringify(tridynamb, null, 2);
  unijson.textContent = JSON.stringify(unidynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}