// Constants
const AMBIENT_DEVICES = [
  { count: "27.7 billion", name: "RAIN RFID tags", rate: "per year" },
  { count: "2 billion", name: "Bluetooth\u00ae platform devices",
    rate: "per year" },
  { count: "112 million", name: "Bluetooth\u00ae asset tracking devices",
    rate: "per year" },
  { count: "143 million", name: "Bluetooth\u00ae smartwatches",
    rate: "per year" },
  { count: "686 million", name: "Bluetooth\u00ae smart home devices",
    rate: "per year" },
  { count: "30 million", name: "Bluetooth\u00ae electronic shelf labels",
    rate: "per year" },
  { count: "5 thousand", name: "EnOcean self-powered wireless sensor variants",
    rate: "deployed" }
];
const AMBIENT_INFRASTRUCTURE = [
  { count: "~35 million", name: "Aruba access points (BLE-capable)", rate: "deployed" },
  { count: ">1 million", name: "Buildings with EnOcean wireless networks",
    rate: "deployed" },
  { count: "261 thousand", name: "RAIN RFID readers", rate: "per year" },
  { count: "178 thousand", name: "Bluetooth\u00ae RTLS implementations",
    rate: "deployed" }
];
const STATS_UPDATE_MILLISECONDS = 2400;


// DOM elements
let ambientdevicecount = document.querySelector('#ambientdevicecount');
let ambientdevicename = document.querySelector('#ambientdevicename');
let ambientdevicerate = document.querySelector('#ambientdevicerate');
let ambientinfrastructurecount =
                          document.querySelector('#ambientinfrastructurecount');
let ambientinfrastructurename =
                          document.querySelector('#ambientinfrastructurename');
let ambientinfrastructurerate =
                          document.querySelector('#ambientinfrastructurerate');


// Other variables
let currentDeviceIndex = 0;
let currentInfrastructureIndex = 0;


// Start the text rotations
updateStats();


// Update the stats periodically
function updateStats() {
  let ambientDevice = AMBIENT_DEVICES[currentDeviceIndex];
  let ambientInfrastructure =
                             AMBIENT_INFRASTRUCTURE[currentInfrastructureIndex];

  if(ambientdevicecount) {
    ambientdevicecount.textContent = ambientDevice.count;
  }
  if(ambientdevicename) {
    ambientdevicename.textContent = ambientDevice.name;
  }
  if(ambientdevicerate) {
    ambientdevicerate.textContent = ambientDevice.rate;
  }
  if(ambientinfrastructurecount) {
    ambientinfrastructurecount.textContent = ambientInfrastructure.count;
  }
  if(ambientinfrastructurename) {
    ambientinfrastructurename.textContent = ambientInfrastructure.name;
  }
  if(ambientinfrastructurerate) {
    ambientinfrastructurerate.textContent = ambientInfrastructure.rate;
  }

  currentDeviceIndex = (currentDeviceIndex + 1) % AMBIENT_DEVICES.length;
  currentInfrastructureIndex = (currentInfrastructureIndex + 1) %
                               AMBIENT_INFRASTRUCTURE.length;
  setTimeout(updateStats, STATS_UPDATE_MILLISECONDS);
}