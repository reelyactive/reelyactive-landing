// Constants
const OCCUPANCY_ANALYTICS = 'oa';
const ASSET_TRACKING = 'at';
const PERSONNEL_TRACKING = 'pt';
const ENVIRONMENTAL_SENSING = 'es';
const INTERACTION_DETECTION = 'id';
const USE_CASES_SEARCH_PARAMETER = 'use-cases';


// DOM elements
let casestudycards = document.querySelector('#casestudycards');
let filterOA = document.querySelector('#filterOccupancyAnalytics');
let filterAT = document.querySelector('#filterAssetTracking');
let filterPT = document.querySelector('#filterPersonnelTracking');
let filterES = document.querySelector('#filterEnvironmentalSensing');
let filterID = document.querySelector('#filterInteractionDetection');


// Monitor use case switches
filterOA.onchange = updateUseCases;
filterAT.onchange = updateUseCases;
filterPT.onchange = updateUseCases;
filterES.onchange = updateUseCases;
filterID.onchange = updateUseCases;


// Set initial visibility based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasUseCaseSearch = searchParams.has(USE_CASES_SEARCH_PARAMETER);

if(hasUseCaseSearch) {
  let useCases = searchParams.get(USE_CASES_SEARCH_PARAMETER).split(',');

  filterOA.checked = useCases.includes(OCCUPANCY_ANALYTICS);
  filterAT.checked = useCases.includes(ASSET_TRACKING);
  filterPT.checked = useCases.includes(PERSONNEL_TRACKING);
  filterES.checked = useCases.includes(ENVIRONMENTAL_SENSING);
  filterID.checked = useCases.includes(INTERACTION_DETECTION);

  filterByUseCase(useCases);
}


// Update case study visibility and the use case table
function updateUseCases(event) {
  let useCases = [];
  let searchString = new URLSearchParams();

  if(filterOA.checked) { useCases.push(OCCUPANCY_ANALYTICS); }
  if(filterAT.checked) { useCases.push(ASSET_TRACKING); }
  if(filterPT.checked) { useCases.push(PERSONNEL_TRACKING); }
  if(filterES.checked) { useCases.push(ENVIRONMENTAL_SENSING); }
  if(filterID.checked) { useCases.push(INTERACTION_DETECTION); }

  filterByUseCase(useCases);
  searchString.append(USE_CASES_SEARCH_PARAMETER, useCases);
  history.pushState(null, '', location.pathname + '?' + searchString +
                              location.hash);
}


// Update case study visibility to reflect the given list of use cases
function filterByUseCase(useCases) {
  for(let card of casestudycards.children) {
    let displayCard = false;
    let cardUseCases = [];
    let cardUseCasesAttribute = card.getAttribute('use-cases');

    if(cardUseCasesAttribute) {
      cardUseCases = cardUseCasesAttribute.split(',');
    }

    for(let useCase of useCases) {
      if(cardUseCases.includes(useCase)) {
        displayCard = true;
      }
    }

    card.hidden = !displayCard;
  }
}