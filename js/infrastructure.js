// Constants
const BLUETOOTH_LOW_ENERGY = 'ble';
const RAIN_RFID = 'rain';
const ENOCEAN = 'enocean';
const TECHNOLOGY_SEARCH_PARAMETER = 'technology';


// DOM elements
let infrastructurecards = document.querySelector('#infrastructurecards');
let filterBLE = document.querySelector('#filterBluetoothLowEnergy');
let filterRAIN = document.querySelector('#filterRAIN');
let filterEnOcean = document.querySelector('#filterEnOcean');


// Monitor technology switches
filterBLE.onclick = updateTechnology;
filterRAIN.onclick = updateTechnology;
filterEnOcean.onclick = updateTechnology;


// Set initial visibility based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasTechnologySearch = searchParams.has(TECHNOLOGY_SEARCH_PARAMETER);

if(hasTechnologySearch) {
  let technologies = searchParams.get(TECHNOLOGY_SEARCH_PARAMETER).split(',');

  filterBLE.checked = technologies.includes(BLUETOOTH_LOW_ENERGY);
  filterRAIN.checked = technologies.includes(RAIN_RFID);
  filterEnOcean.checked = technologies.includes(ENOCEAN);

  filterByTechnology(technologies);
}


// Update infrastructure visibility and the technology table
function updateTechnology(event) {
  let technologies = [];
  let searchString = new URLSearchParams();

  if(filterBLE.checked) { technologies.push(BLUETOOTH_LOW_ENERGY); }
  if(filterRAIN.checked) { technologies.push(RAIN_RFID); }
  if(filterEnOcean.checked) { technologies.push(ENOCEAN); }

  filterByTechnology(technologies);
  searchString.append(TECHNOLOGY_SEARCH_PARAMETER, technologies);
  history.pushState(null, '', location.pathname + '?' + searchString +
                              location.hash);
}


// Update infrastructure visibility to reflect the given list of technologies
function filterByTechnology(technologies) {
  for(let infrastructurecard of infrastructurecards.children) {
    let displayInfrastructure = false;
    let infrastructureTechnologies = [];
    let infrastructureTechnologiesAttribute =
                                 infrastructurecard.getAttribute('technology');

    if(infrastructureTechnologiesAttribute) {
      infrastructureTechnologies =
                                infrastructureTechnologiesAttribute.split(',');
    }

    for(let technology of technologies) {
      if(infrastructureTechnologies.includes(technology)) {
        displayInfrastructure = true;
      }
    }

    infrastructurecard.hidden = !displayInfrastructure;
  }
}