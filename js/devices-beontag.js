// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let classiccuttlefish = document.querySelector('#classiccuttlefish');
let classicjson = document.querySelector('#classicjson');
let slimcuttlefish = document.querySelector('#slimcuttlefish');
let slimjson = document.querySelector('#slimjson');
let hybridcuttlefish = document.querySelector('#hybridcuttlefish');
let hybridjson = document.querySelector('#hybridjson');
let microcuttlefish = document.querySelector('#microcuttlefish');
let microjson = document.querySelector('#microjson');



// Variables
let classicdynamb = {
    deviceId: "be047a6c1a51c",
    deviceIdType: 3,
    batteryVoltage: 3.00,
    temperature: 21,
    timestamp: Date.now(),
    txCount: 123456789,
    uptime: 220903212345
};
let slimdynamb = {
    deviceId: "be047a6511888",
    deviceIdType: 3,
    batteryVoltage: 3.00,
    temperature: 21,
    timestamp: Date.now(),
    txCount: 1234567,
    uptime: 94672812345
};
let hybriddynamb = {
    deviceId: "be047a684b71d",
    deviceIdType: 3,
    batteryVoltage: 3.00,
    temperature: 21,
    timestamp: Date.now(),
    txCount: 1234567890,
    uptime: 284018412345
};
let microdynamb = {
    deviceId: "be047a6881c70",
    deviceIdType: 3,
    batteryVoltage: 3.00,
    temperature: 21,
    timestamp: Date.now(),
    txCount: 123456789,
    uptime: 220903212345
};


// Begin the simulation
update();


// Update the Classic
function updateClassic() {
  classicdynamb.batteryVoltage += Math.round((Math.random() - 0.5) * 20) / 100;
  classicdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  classicdynamb.timestamp = Date.now();
  classicdynamb.txCount++;
  classicdynamb.uptime += UPDATE_MILLISECONDS;
}

// Update the Slim
function updateSlim() {
  slimdynamb.batteryVoltage += Math.round((Math.random() - 0.5) * 20) / 100;
  slimdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  slimdynamb.timestamp = Date.now();
  slimdynamb.txCount++;
  slimdynamb.uptime += UPDATE_MILLISECONDS;
}

// Update the Hybrid
function updateHybrid() {
  hybriddynamb.batteryVoltage += Math.round((Math.random() - 0.5) * 20) / 100;
  hybriddynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  hybriddynamb.timestamp = Date.now();
  hybriddynamb.txCount++;
  hybriddynamb.uptime += UPDATE_MILLISECONDS;
}

// Update the Micro
function updateMicro() {
  microdynamb.batteryVoltage += Math.round((Math.random() - 0.5) * 20) / 100;
  microdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  microdynamb.timestamp = Date.now();
  microdynamb.txCount++;
  microdynamb.uptime += UPDATE_MILLISECONDS;
}


// Update the simulation
function update() {
  updateClassic();
  updateSlim();
  updateHybrid();
  updateMicro();
  cuttlefishDynamb.render(classicdynamb, classiccuttlefish, {});
  cuttlefishDynamb.render(slimdynamb, slimcuttlefish, {});
  cuttlefishDynamb.render(hybriddynamb, hybridcuttlefish, {});
  cuttlefishDynamb.render(microdynamb, microcuttlefish, {});
  classicjson.textContent = JSON.stringify(classicdynamb, null, 2);
  slimjson.textContent = JSON.stringify(slimdynamb, null, 2);
  hybridjson.textContent = JSON.stringify(hybriddynamb, null, 2);
  microjson.textContent = JSON.stringify(microdynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}