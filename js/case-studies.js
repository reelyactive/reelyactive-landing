// Constants
const OCCUPANCY_ANALYTICS = 'oa';
const ASSET_TRACKING = 'at';
const PERSONNEL_TRACKING = 'pt';
const ENVIRONMENTAL_SENSING = 'es';
const INTERACTION_DETECTION = 'id';
const ELASTIC_STACK = 'elastic';
const PARETO_ANYWHERE = 'pa';
const PARETO_CLASSIC = 'pc';
const REEL = 'reel';
const OWL_IN_ONE = 'oio';
const MINEW_G1 = 'minew-g1';
const MOBILE = 'mobile';
const DIRACT = 'diract';
const MINEW_E8 = 'minew-e8';
const MINEW_S1 = 'minew-s1';
const PUCKJS = 'puckjs';
const BESPOKE = 'bespoke';
const USE_CASES_SEARCH_PARAMETER = 'use-cases';
const SOFTWARE_SEARCH_PARAMETER = 'software';
const MIDDLEWARE_SEARCH_PARAMETER = 'middleware';
const INFRASTRUCTURE_SEARCH_PARAMETER = 'infrastructure';
const DEVICES_SEARCH_PARAMETER = 'devices';
const TOTAL_USE_CASES = 5;
const TOTAL_SOFTWARE = 2;
const TOTAL_MIDDLEWARE = 2;
const TOTAL_INFRASTRUCTURE = 3;
const TOTAL_DEVICES = 6;


// DOM elements
let casestudycards = document.querySelector('#casestudycards');
let filterOA = document.querySelector('#filterOccupancyAnalytics');
let filterAT = document.querySelector('#filterAssetTracking');
let filterPT = document.querySelector('#filterPersonnelTracking');
let filterES = document.querySelector('#filterEnvironmentalSensing');
let filterID = document.querySelector('#filterInteractionDetection');
let filterElasticStack = document.querySelector('#filterElasticStack');
let filterBespokeSoftware = document.querySelector('#filterBespokeSoftware');
let filterPA = document.querySelector('#filterParetoAnywhere');
let filterPC = document.querySelector('#filterParetoClassic');
let filterReel = document.querySelector('#filterReel');
let filterOwlInOne = document.querySelector('#filterOwlInOne');
let filterMinewG1 = document.querySelector('#filterMinewG1');
let filterMobile = document.querySelector('#filterMobile');
let filterDirAct = document.querySelector('#filterDirAct');
let filterMinewE8 = document.querySelector('#filterMinewE8');
let filterMinewS1 = document.querySelector('#filterMinewS1');
let filterPuckJS = document.querySelector('#filterPuckJS');
let filterBespokeDevice = document.querySelector('#filterBespokeDevice');
let usecasesSearch = document.querySelector('#usecasesSearch');
let softwareSearch = document.querySelector('#softwareSearch');
let middlewareSearch = document.querySelector('#middlewareSearch');
let infrastructureSearch = document.querySelector('#infrastructureSearch');
let devicesSearch = document.querySelector('#devicesSearch');


// Monitor each filter
filterOA.onchange = updateUseCases;
filterAT.onchange = updateUseCases;
filterPT.onchange = updateUseCases;
filterES.onchange = updateUseCases;
filterID.onchange = updateUseCases;
filterElasticStack.onchange = updateSoftware;
filterBespokeSoftware.onchange = updateSoftware;
filterPA.onchange = updateMiddleware;
filterPC.onchange = updateMiddleware;
filterReel.onchange = updateInfrastructure;
filterOwlInOne.onchange = updateInfrastructure;
filterMinewG1.onchange = updateInfrastructure;
filterMobile.onchange = updateDevices;
filterDirAct.onchange = updateDevices;
filterMinewE8.onchange = updateDevices;
filterMinewS1.onchange = updateDevices;
filterPuckJS.onchange = updateDevices;
filterBespokeDevice.onchange = updateDevices;


// Set initial visibility based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasUseCaseSearch = searchParams.has(USE_CASES_SEARCH_PARAMETER);
let hasSoftwareSearch = searchParams.has(SOFTWARE_SEARCH_PARAMETER);
let hasMiddlewareSearch = searchParams.has(MIDDLEWARE_SEARCH_PARAMETER);
let hasInfrastructureSearch = searchParams.has(INFRASTRUCTURE_SEARCH_PARAMETER);
let hasDevicesSearch = searchParams.has(DEVICES_SEARCH_PARAMETER);
let selectedUseCases = [ OCCUPANCY_ANALYTICS, ASSET_TRACKING,
                         PERSONNEL_TRACKING, ENVIRONMENTAL_SENSING,
                         INTERACTION_DETECTION ];
let selectedSoftware = [ ELASTIC_STACK, BESPOKE ];
let selectedMiddleware = [ PARETO_ANYWHERE, PARETO_CLASSIC ];
let selectedInfrastructure = [ REEL, OWL_IN_ONE, MINEW_G1 ];
let selectedDevices = [ MOBILE, DIRACT, MINEW_E8, MINEW_S1, PUCKJS, BESPOKE ];

if(hasUseCaseSearch) {
  selectedUseCases = searchParams.get(USE_CASES_SEARCH_PARAMETER).split(',');

  filterOA.checked = selectedUseCases.includes(OCCUPANCY_ANALYTICS);
  filterAT.checked = selectedUseCases.includes(ASSET_TRACKING);
  filterPT.checked = selectedUseCases.includes(PERSONNEL_TRACKING);
  filterES.checked = selectedUseCases.includes(ENVIRONMENTAL_SENSING);
  filterID.checked = selectedUseCases.includes(INTERACTION_DETECTION);
}

if(hasSoftwareSearch) {
  selectedSoftware = searchParams.get(SOFTWARE_SEARCH_PARAMETER).split(',');

  filterElasticStack.checked = selectedSoftware.includes(ELASTIC_STACK);
  filterBespokeSoftware.checked = selectedSoftware.includes(BESPOKE);
}

if(hasMiddlewareSearch) {
  selectedMiddleware = searchParams.get(MIDDLEWARE_SEARCH_PARAMETER).split(',');

  filterPA.checked = selectedMiddleware.includes(PARETO_ANYWHERE);
  filterPC.checked = selectedMiddleware.includes(PARETO_CLASSIC);
}

if(hasInfrastructureSearch) {
  selectedInfrastructure =
                   searchParams.get(INFRASTRUCTURE_SEARCH_PARAMETER).split(',');

  filterReel.checked = selectedInfrastructure.includes(REEL);
  filterOwlInOne.checked = selectedInfrastructure.includes(OWL_IN_ONE);
  filterMinewG1.checked = selectedInfrastructure.includes(MINEW_G1);
}

if(hasDevicesSearch) {
  selectedDevices = searchParams.get(DEVICES_SEARCH_PARAMETER).split(',');

  filterMobile.checked = selectedDevices.includes(MOBILE);
  filterDirAct.checked = selectedDevices.includes(DIRACT);
  filterMinewE8.checked = selectedDevices.includes(MINEW_E8);
  filterMinewS1.checked = selectedDevices.includes(MINEW_S1);
  filterPuckJS.checked = selectedDevices.includes(PUCKJS);
  filterBespokeDevice.checked = selectedDevices.includes(BESPOKE);
}

filterSelected();


// Update case study visibility and the use case checkboxes
function updateUseCases(event) {
  selectedUseCases = [];

  if(filterOA.checked) { selectedUseCases.push(OCCUPANCY_ANALYTICS); }
  if(filterAT.checked) { selectedUseCases.push(ASSET_TRACKING); }
  if(filterPT.checked) { selectedUseCases.push(PERSONNEL_TRACKING); }
  if(filterES.checked) { selectedUseCases.push(ENVIRONMENTAL_SENSING); }
  if(filterID.checked) { selectedUseCases.push(INTERACTION_DETECTION); }

  filterSelected();
  updateSearchString();
}


// Update case study visibility and the software checkboxes
function updateSoftware(event) {
  selectedSoftware = [];

  if(filterElasticStack.checked) { selectedSoftware.push(ELASTIC_STACK); }
  if(filterBespokeSoftware.checked) { selectedSoftware.push(BESPOKE); }

  filterSelected();
  updateSearchString();
}


// Update case study visibility and the middleware checkboxes
function updateMiddleware(event) {
  selectedMiddleware = [];

  if(filterPA.checked) { selectedMiddleware.push(PARETO_ANYWHERE); }
  if(filterPC.checked) { selectedMiddleware.push(PARETO_CLASSIC); }

  filterSelected();
  updateSearchString();
}


// Update case study visibility and the infrastructure checkboxes
function updateInfrastructure(event) {
  selectedInfrastructure = [];

  if(filterReel.checked) { selectedInfrastructure.push(REEL); }
  if(filterOwlInOne.checked) { selectedInfrastructure.push(OWL_IN_ONE); }
  if(filterMinewG1.checked) { selectedInfrastructure.push(MINEW_G1); }

  filterSelected();
  updateSearchString();
}


// Update case study visibility and the devices checkboxes
function updateDevices(event) {
  selectedDevices = [];

  if(filterMobile.checked) { selectedDevices.push(MOBILE); }
  if(filterDirAct.checked) { selectedDevices.push(DIRACT); }
  if(filterMinewE8.checked) { selectedDevices.push(MINEW_E8); }
  if(filterMinewS1.checked) { selectedDevices.push(MINEW_S1); }
  if(filterPuckJS.checked) { selectedDevices.push(PUCKJS); }
  if(filterBespokeDevice.checked) { selectedDevices.push(BESPOKE); }

  filterSelected();
  updateSearchString();
}


// Filter the cards by the selected parameters
function filterSelected() {
  let isAllUseCases = (selectedUseCases.length >= TOTAL_USE_CASES);
  let isAllSoftware = (selectedSoftware.length >= TOTAL_SOFTWARE);
  let isAllMiddleware = (selectedMiddleware.length >= TOTAL_MIDDLEWARE);
  let isAllInfrastructure = (selectedInfrastructure.length >=
                             TOTAL_INFRASTRUCTURE);
  let isAllDevices = (selectedDevices.length >= TOTAL_DEVICES);

  usecasesSearch.hidden = isAllUseCases;
  softwareSearch.hidden = isAllSoftware;
  middlewareSearch.hidden = isAllMiddleware;
  infrastructureSearch.hidden = isAllInfrastructure;
  devicesSearch.hidden = isAllDevices;

  for(let card of casestudycards.children) {
    let displayCard = true;

    if(!isAllUseCases) {
      displayCard &= isSelectedAttribute(card, USE_CASES_SEARCH_PARAMETER,
                                         selectedUseCases);
    }
    if(!isAllSoftware) {
      displayCard &= isSelectedAttribute(card, SOFTWARE_SEARCH_PARAMETER,
                                         selectedSoftware);
    }
    if(!isAllMiddleware) {
      displayCard &= isSelectedAttribute(card, MIDDLEWARE_SEARCH_PARAMETER,
                                         selectedMiddleware);
    }
    if(!isAllInfrastructure) {
      displayCard &= isSelectedAttribute(card, INFRASTRUCTURE_SEARCH_PARAMETER,
                                         selectedInfrastructure);
    }
    if(!isAllDevices) {
      displayCard &= isSelectedAttribute(card, DEVICES_SEARCH_PARAMETER,
                                         selectedDevices);
    }

    card.hidden = !displayCard;
  }
}


// Determine if the given attribute is among the given selected
function isSelectedAttribute(card, attributeName, selected) {
  let attribute = card.getAttribute(attributeName);

  if(attribute) {
    let attributes = attribute.split(',');

    for(let selection of selected) {
      if(attributes.includes(selection)) {
        return true;
      }
    }
  }

  return false;
}


// Update the search string
function updateSearchString() {
  let searchString = new URLSearchParams();
  let isAllUseCases = (selectedUseCases.length >= TOTAL_USE_CASES);
  let isAllSoftware = (selectedSoftware.length >= TOTAL_SOFTWARE);
  let isAllMiddleware = (selectedMiddleware.length >= TOTAL_MIDDLEWARE);
  let isAllInfrastructure = (selectedInfrastructure.length >=
                             TOTAL_INFRASTRUCTURE);
  let isAllDevices = (selectedDevices.length >= TOTAL_DEVICES);

  if(!isAllUseCases) {
    searchString.append(USE_CASES_SEARCH_PARAMETER, selectedUseCases);
  }
  if(!isAllSoftware) {
    searchString.append(SOFTWARE_SEARCH_PARAMETER, selectedSoftware);
  }
  if(!isAllMiddleware) {
    searchString.append(MIDDLEWARE_SEARCH_PARAMETER, selectedMiddleware);
  }
  if(!isAllInfrastructure) {
    searchString.append(INFRASTRUCTURE_SEARCH_PARAMETER,
                        selectedInfrastructure);
  }
  if(!isAllDevices) {
    searchString.append(DEVICES_SEARCH_PARAMETER, selectedDevices);
  }

  history.pushState(null, '', location.pathname + '?' + searchString +
                              location.hash);
}