// Constants
const BLUETOOTH_LOW_ENERGY = 'ble';
const RAIN_RFID = 'rain';
const ENOCEAN = 'enocean';
const TECHNOLOGY_SEARCH_PARAMETER = 'technology';
const TABLE_COLUMNS = [ 'vendor', 'model', 'technologies', 'links' ];


// DOM elements
let devicetablebody = document.querySelector('#devicetablebody');
let filterBLE = document.querySelector('#filterBluetoothLowEnergy');
let filterRAIN = document.querySelector('#filterRAIN');
let filterEnOcean = document.querySelector('#filterEnOcean');


// Variables
let devices = {};
let filters = { technologies: [ BLUETOOTH_LOW_ENERGY, RAIN_RFID, ENOCEAN ] };


// Monitor technology switches
filterBLE.onclick = updateTechnology;
filterRAIN.onclick = updateTechnology;
filterEnOcean.onclick = updateTechnology;


// Set initial visibility based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasTechnologySearch = searchParams.has(TECHNOLOGY_SEARCH_PARAMETER);

if(hasTechnologySearch) {
  filters.technologies =
                       searchParams.get(TECHNOLOGY_SEARCH_PARAMETER).split(',');

  filterBLE.checked = filters.technologies.includes(BLUETOOTH_LOW_ENERGY);
  filterRAIN.checked = filters.technologies.includes(RAIN_RFID);
  filterEnOcean.checked = filters.technologies.includes(ENOCEAN);
}

// Fetch the list of devices
fetch('list.json')
  .then((response) => {
    if(!response.ok) { throw new Error('GET returned ' + response.status); }
    return response.json();
  })
  .then((result) => {
    devices = result;
    renderDeviceTableRows(devices, devicetablebody, TABLE_COLUMNS, filters);
  })
  .catch((error) => { console.log(error); });


// Update infrastructure visibility and the technology table
function updateTechnology(event) {
  filters.technologies = [];
  let searchString = new URLSearchParams();

  if(filterBLE.checked) { filters.technologies.push(BLUETOOTH_LOW_ENERGY); }
  if(filterRAIN.checked) { filters.technologies.push(RAIN_RFID); }
  if(filterEnOcean.checked) { filters.technologies.push(ENOCEAN); }

  renderDeviceTableRows(devices, devicetablebody, TABLE_COLUMNS, filters);
  searchString.append(TECHNOLOGY_SEARCH_PARAMETER, filters.technologies);
  history.pushState(null, '', location.pathname + '?' + searchString +
                              location.hash);
}
