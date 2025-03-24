// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let co2cuttlefish = document.querySelector('#co2cuttlefish');
let co2json = document.querySelector('#co2json');
let pmcuttlefish = document.querySelector('#pmcuttlefish');
let pmjson = document.querySelector('#pmjson');
let co2noisecuttlefish = document.querySelector('#co2noisecuttlefish');
let co2noisejson = document.querySelector('#co2noisejson');


// Variables
let co2dynamb = {
    deviceId: "41b00a145c02",
    deviceIdType: 3,
    carbonDioxideConcentration: 768,
    illuminance: 321,
    pressure: 101300,
    relativeHumidity: 50,
    temperature: 21,
    volatileOrganicCompoundsConcentration: 3,
    timestamp: Date.now()
};
let pmdynamb = {
    deviceId: "41b00a145977",
    deviceIdType: 3,
    illuminance: 321,
    "pm1.0": 1.5,
    "pm2.5": 15,
    "pm10": 50,
    pressure: 101300,
    relativeHumidity: 50,
    temperature: 21,
    volatileOrganicCompoundsConcentration: 3,
    timestamp: Date.now()
};
let co2ndynamb = {
    deviceId: "41b00a14c024",
    deviceIdType: 3,
    carbonDioxideConcentration: 768,
    pressure: 101300,
    relativeHumidity: 50,
    soundPressure: 42,
    temperature: 21,
    volatileOrganicCompoundsConcentration: 3,
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the CO2 sensor
function updateCO2() {
  co2dynamb.carbonDioxideConcentration +=
                                         Math.round((Math.random() - 0.5) * 10);
  co2dynamb.illuminance += Math.round((Math.random() - 0.5) * 10);
  co2dynamb.pressure += Math.round((Math.random() - 0.5) * 50);
  co2dynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  co2dynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  co2dynamb.volatileOrganicCompoundsConcentration +=
                                   Math.round((Math.random() - 0.5) * 20) / 100;
  co2dynamb.timestamp = Date.now();
}


// Update the PM sensor
function updatePM() {
  pmdynamb['pm1.0'] += Math.round((Math.random() - 0.5) * 2) / 100;
  pmdynamb['pm2.5'] += Math.round((Math.random() - 0.5) * 4) / 100;
  pmdynamb['pm10'] += Math.round((Math.random() - 0.5) * 8) / 100;
  pmdynamb.illuminance += Math.round((Math.random() - 0.5) * 10);
  pmdynamb.pressure += Math.round((Math.random() - 0.5) * 50);
  pmdynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  pmdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  pmdynamb.volatileOrganicCompoundsConcentration +=
                                   Math.round((Math.random() - 0.5) * 20) / 100;
  pmdynamb.timestamp = Date.now();
}

// Update the CO2+Noise sensor
function updateCO2Noise() {
  co2ndynamb.carbonDioxideConcentration +=
                                         Math.round((Math.random() - 0.5) * 10);
  co2ndynamb.soundPressure += Math.round((Math.random() - 0.5) * 10);
  co2ndynamb.pressure += Math.round((Math.random() - 0.5) * 50);
  co2ndynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  co2ndynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  co2ndynamb.volatileOrganicCompoundsConcentration +=
                                   Math.round((Math.random() - 0.5) * 20) / 100;
  co2ndynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateCO2();
  updatePM();
  updateCO2Noise();
  cuttlefishDynamb.render(co2dynamb, co2cuttlefish, {});
  cuttlefishDynamb.render(pmdynamb, pmcuttlefish, {});
  cuttlefishDynamb.render(co2ndynamb, co2noisecuttlefish, {});
  co2json.textContent = JSON.stringify(co2dynamb, null, 2);
  pmjson.textContent = JSON.stringify(pmdynamb, null, 2);
  co2noisejson.textContent = JSON.stringify(co2ndynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}