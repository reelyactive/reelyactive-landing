// Constants
const UPDATE_MILLISECONDS = 15000;


// DOM elements
let tagcuttlefish = document.querySelector('#tagcuttlefish');
let tagjson = document.querySelector('#tagjson');
let aircuttlefish = document.querySelector('#aircuttlefish');
let airjson = document.querySelector('#airjson');


// Variables
let tagdynamb = {
    deviceId: "4007100007a9",
    deviceIdType: 2,
    acceleration: [ 0.1, -0.1, 0.9 ],
    pressure: 100044,
    relativeHumidity: 52,
    temperature: 21,
    txCount: 234,
    timestamp: Date.now()
};
let airdynamb = {
    deviceId: "400710000a17",
    deviceIdType: 2,
    carbonDioxideConcentration: 201,
    illuminance: 321,
    "pm2.5": 11.2,
    pressure: 101102,
    relativeHumidity: 52,
    temperature: 21,
    txCount: 123,
    volatileOrganicCompoundsConcentration: 3,
    timestamp: Date.now()
};


// Begin the simulation
update();


// Update the RuuviTag
function updateTag() {
  tagdynamb.acceleration[0] += (Math.random() - 0.5) / 2;
  tagdynamb.acceleration[1] += (Math.random() - 0.5) / 2;
  tagdynamb.acceleration[2] += (Math.random() - 0.5) / 2;
  tagdynamb.pressure += Math.round((Math.random() - 0.5) * 50);
  tagdynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  tagdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  tagdynamb.txCount = (++tagdynamb.txCount % 256);
  tagdynamb.timestamp = Date.now();
}


// Update the Ruuvi Air
function updateAir() {
  airdynamb.carbonDioxideConcentration +=
                                         Math.round((Math.random() - 0.5) * 10);
  airdynamb.illuminance += Math.round((Math.random() - 0.5) * 10);
  airdynamb['pm2.5'] += Math.round((Math.random() - 0.5) * 4) / 100;
  airdynamb.pressure += Math.round((Math.random() - 0.5) * 50);
  tagdynamb.relativeHumidity += Math.round((Math.random() - 0.5) * 2);
  tagdynamb.temperature += Math.round((Math.random() - 0.5) * 20) / 10;
  airdynamb.txCount = (++airdynamb.txCount % 256);
  airdynamb.volatileOrganicCompoundsConcentration +=
                                   Math.round((Math.random() - 0.5) * 20) / 100;
  airdynamb.timestamp = Date.now();
}


// Update the simulation
function update() {
  updateTag();
  updateAir();
  cuttlefishDynamb.render(tagdynamb, tagcuttlefish, {});
  cuttlefishDynamb.render(airdynamb, aircuttlefish, {});
  tagjson.textContent = JSON.stringify(tagdynamb, null, 2);
  airjson.textContent = JSON.stringify(airdynamb, null, 2);
  setTimeout(update, UPDATE_MILLISECONDS);
}