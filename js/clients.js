// DOM elements
let clientcards = document.querySelector('#clientcards');
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


// Update client visibility and the use case table
function updateUseCases(event) {
  let useCases = [];

  if(filterOA.checked) { useCases.push('oa'); }
  if(filterAT.checked) { useCases.push('at'); }
  if(filterPT.checked) { useCases.push('pt'); }
  if(filterES.checked) { useCases.push('es'); }
  if(filterID.checked) { useCases.push('id'); }

  filterByUseCase(useCases);
}


// Update client visibility to reflect the given list of use cases
function filterByUseCase(useCases) {
  for(let clientcard of clientcards.children) {
    let displayClient = false;
    let clientUseCases = [];
    let clientUseCasesAttribute = clientcard.getAttribute('use-cases');

    if(clientUseCasesAttribute) {
      clientUseCases = clientUseCasesAttribute.split(',');
    }

    for(let useCase of useCases) {
      if(clientUseCases.includes(useCase)) {
        displayClient = true;
      }
    }

    clientcard.hidden = !displayClient;
  }
}