// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let msp01cuttlefish = document.querySelector('#msp01cuttlefish');
let msp01json = document.querySelector('#msp01json');
let mst01cuttlefish = document.querySelector('#mst01cuttlefish');
let mst01json = document.querySelector('#mst01json');
let msr01cuttlefish = document.querySelector('#msr01cuttlefish');
let msr01json = document.querySelector('#msr01json');
let msd01cuttlefish = document.querySelector('#msd01cuttlefish');
let msd01json = document.querySelector('#msd01json');
let mse01cuttlefish = document.querySelector('#mse01cuttlefish');
let mse01json = document.querySelector('#mse01json');
let msa01cuttlefish = document.querySelector('#msa01cuttlefish');
let msa01json = document.querySelector('#msa01json');
let msl01cuttlefish = document.querySelector('#msl01cuttlefish');
let msl01json = document.querySelector('#msl01json');


// Variables
let msp01dynamb = {
    deviceId: "c30000085201",
    deviceIdType: 3,
    batteryPercentage: 67,
    isMotionDetected: [ true ],
    luminousFlux: 321,
    relativeHumidity: 50,
    temperature: 21,
    timestamp: Date.now()
};
let mst01dynamb = {
    deviceId: "c30000085701",
    deviceIdType: 3,
    batteryPercentage: 99,
    relativeHumidity: 50,
    temperature: 21,
    timestamp: Date.now()
};
let msr01dynamb = {
    deviceId: "c30000085401",
    deviceIdType: 3,
    numberOfOccupants: 7,
    passageCounts: [ 123, 456 ],
    timestamp: Date.now()
};
let msd01dynamb = {
    deviceId: "c30000085d01",
    deviceIdType: 3,
    distance: 1.00,
    distanceCycle: 1,
    isContactDetected: [ true ],
    isContactDetectedCycle: 1,
    isMotionDetected: [ false ],
    isOccupancyDetected: [ false ],
    isOccupancyDetectedCycle: 1,
    timestamp: Date.now()
};
let mse01dynamb = {
    deviceId: "c30000085e01",
    deviceIdType: 3,
    isButtonPressed: [ false, false ],
    isContactDetected: [ true ],
    isMotionDetected: [ false ],
    levelPercentage: 33,
    txCycle: 1,
    timestamp: Date.now()
};
let msa01dynamb = {
    deviceId: "c30000085a01",
    deviceIdType: 3,
    batteryPercentage: 88,
    illuminance: 321,
    isContactDetected: [ false ],
    timestamp: Date.now()
};
let msl01dynamb = {
    deviceId: "c30000085101",
    deviceIdType: 3,
    batteryPercentage: 80,
    isLiquidDetected: [ false ],
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the MSP01
function updateMSP01() {
  msp01dynamb.isMotionDetected[0] = !msp01dynamb.isMotionDetected[0];
  msp01dynamb.luminousFlux += Math.round((Math.random() - 0.5) * 10);
  msp01dynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  msp01dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  msp01dynamb.timestamp = Date.now();
}

// Update the MST01
function updateMST01() {
  mst01dynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  mst01dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  mst01dynamb.timestamp = Date.now();
}

// Update the MSR01
function updateMSR01() {
  msr01dynamb.numberOfOccupants += (Math.random() > 0.5) ? 1 : -1;
  msr01dynamb.passageCounts[0] += (Math.random() > 0.5) ? 4 : 1;
  msr01dynamb.passageCounts[1] += (Math.random() > 0.5) ? 2 : 1;
  msr01dynamb.timestamp = Date.now();
}

// Update the MSD01
function updateMSD01() {
  let wasContactDetected = msd01dynamb.isContactDetected[0];
  let wasOccupancyDetected = msd01dynamb.isOccupancyDetected[0];
  msd01dynamb.distance += Math.round(10 * (Math.random() - 0.5)) / 100;
  msd01dynamb.distanceCycle = ++msd01dynamb.distanceCycle % 256;
  msd01dynamb.isContactDetected[0] = (Math.random() > 0.1);
  msd01dynamb.isMotionDetected[0] = (Math.random() > 0.7);
  if(msd01dynamb.isContactDetected[0] !== wasContactDetected) {
    msd01dynamb.isContactDetectedCycle++;
  }
  if(msd01dynamb.isOccupancyDetected[0] !== wasOccupancyDetected) {
    msd01dynamb.isOccupancyDetectedCycle++;
  }
  msd01dynamb.timestamp = Date.now();
}

// Update the MSE01
function updateMSE01() {
  mse01dynamb.isButtonPressed[0] = (Math.random() > 0.8);
  mse01dynamb.isButtonPressed[1] = (Math.random() > 0.9);
  mse01dynamb.isContactDetected[0] = (Math.random() > 0.1);
  mse01dynamb.isMotionDetected[0] = (Math.random() > 0.7);
  mse01dynamb.levelPercentage += Math.round((Math.random() - 0.5) * 2);
  mse01dynamb.txCycle = ++mse01dynamb.txCycle % 256;
  mse01dynamb.timestamp = Date.now();
}

// Update the MSA01
function updateMSA01() {
  msa01dynamb.illuminance += Math.round((Math.random() - 0.5) * 10);
  msa01dynamb.isContactDetected[0] = !msa01dynamb.isContactDetected[0];
  msa01dynamb.timestamp = Date.now();
}

// Update the MSL01
function updateMSL01() {
  msl01dynamb.isLiquidDetected[0] = !msl01dynamb.isLiquidDetected[0];
  msl01dynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateMSP01();
  updateMST01();
  updateMSR01();
  updateMSD01();
  updateMSE01();
  updateMSA01();
  updateMSL01();
  cuttlefishDynamb.render(msp01dynamb, msp01cuttlefish, {});
  cuttlefishDynamb.render(mst01dynamb, mst01cuttlefish, {});
  cuttlefishDynamb.render(msr01dynamb, msr01cuttlefish, {});
  cuttlefishDynamb.render(msd01dynamb, msd01cuttlefish, {});
  cuttlefishDynamb.render(mse01dynamb, mse01cuttlefish, {});
  cuttlefishDynamb.render(msa01dynamb, msa01cuttlefish, {});
  cuttlefishDynamb.render(msl01dynamb, msl01cuttlefish, {});
  msp01json.textContent = JSON.stringify(msp01dynamb, null, 2);
  mst01json.textContent = JSON.stringify(mst01dynamb, null, 2);
  msr01json.textContent = JSON.stringify(msr01dynamb, null, 2);
  msd01json.textContent = JSON.stringify(msd01dynamb, null, 2);
  mse01json.textContent = JSON.stringify(mse01dynamb, null, 2);
  msa01json.textContent = JSON.stringify(msa01dynamb, null, 2);
  msl01json.textContent = JSON.stringify(msl01dynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}