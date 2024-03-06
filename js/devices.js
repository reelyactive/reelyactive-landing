// Constants
const OCCUPANCY_ANALYTICS = 'oa';
const ASSET_TRACKING = 'at';
const PERSONNEL_TRACKING = 'pt';
const ENVIRONMENTAL_SENSING = 'es';
const INTERACTION_DETECTION = 'id';
const USE_CASES_SEARCH_PARAMETER = 'use-cases';
const TABLE_COLUMNS = [ 'vendor', 'model', 'technologies', 'useCases',
                        'dynambProperties', 'links' ];


// DOM elements
let devicetablebody = document.querySelector('#devicetablebody');
let filterOA = document.querySelector('#filterOccupancyAnalytics');
let filterAT = document.querySelector('#filterAssetTracking');
let filterPT = document.querySelector('#filterPersonnelTracking');
let filterES = document.querySelector('#filterEnvironmentalSensing');
let filterID = document.querySelector('#filterInteractionDetection');


// Variables
let devices = {};
let filters = { useCases: [ OCCUPANCY_ANALYTICS, ASSET_TRACKING,
                            PERSONNEL_TRACKING, ENVIRONMENTAL_SENSING,
                            INTERACTION_DETECTION ] };

// Monitor use case switches
filterOA.onclick = updateUseCases;
filterAT.onclick = updateUseCases;
filterPT.onclick = updateUseCases;
filterES.onclick = updateUseCases;
filterID.onclick = updateUseCases;


// Set initial visibility based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasUseCaseSearch = searchParams.has(USE_CASES_SEARCH_PARAMETER);

if(hasUseCaseSearch) {
  filters.useCases = searchParams.get(USE_CASES_SEARCH_PARAMETER).split(',');

  // filterOA.checked = useCases.includes(OCCUPANCY_ANALYTICS);
  filterAT.checked = filters.useCases.includes(ASSET_TRACKING);
  filterPT.checked = filter.suseCases.includes(PERSONNEL_TRACKING);
  filterES.checked = filters.useCases.includes(ENVIRONMENTAL_SENSING);
  filterID.checked = fitlers.useCases.includes(INTERACTION_DETECTION);
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


// Update client visibility and the use case table
function updateUseCases(event) {
  filters.useCases = [];
  let searchString = new URLSearchParams();

  // if(filterOA.checked) { filters.useCases.push(OCCUPANCY_ANALYTICS); }
  if(filterAT.checked) { filters.useCases.push(ASSET_TRACKING); }
  if(filterPT.checked) { filters.useCases.push(PERSONNEL_TRACKING); }
  if(filterES.checked) { filters.useCases.push(ENVIRONMENTAL_SENSING); }
  if(filterID.checked) { filters.useCases.push(INTERACTION_DETECTION); }

  renderDeviceTableRows(devices, devicetablebody, TABLE_COLUMNS, filters);
  searchString.append(USE_CASES_SEARCH_PARAMETER, filters.useCases);
  history.pushState(null, '', location.pathname + '?' + searchString +
                              location.hash);
}
