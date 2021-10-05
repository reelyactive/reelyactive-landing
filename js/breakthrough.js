// Constants
const CASE_STUDIES = [
  {
    quote: "Incredibly, the pilot itself was realised within a week—and during the COVID-19 pandemic at that!",
    source: "Georges Bendavid, JGH",
    image: "../images/case-studies-jgh-clsc-metro-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'AT' ],
    url: "../case-studies/jgh-clsc-metro/"
  },
  {
    quote: "We're now able to automatically collect personnel journeys for the US Army, even for studies as short as a few days.",
    source: "Max Jones, KFS LLC",
    image: "../images/case-studies-usarmy-drum-hood-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'PT' ],
    url: "../case-studies/usarmy-drum-hood/"
  }
];
const CASE_STUDY_TYPING_MILLISECONDS = 4800;
const CASE_STUDY_HOLD_MILLISECONDS = 4800;


// DOM elements
let caseStudyImage = document.querySelector('#caseStudyImage');
let quote = document.querySelector('#quote');
let source = document.querySelector('#source');
let badgeCommunity = document.querySelector('#badgeCommunity');
let badgeBreakthrough = document.querySelector('#badgeBreakthrough');
let badgeBeyond = document.querySelector('#badgeBeyond');
let badgeOA = document.querySelector('#badgeOA');
let badgeAT = document.querySelector('#badgeAT');
let badgePT = document.querySelector('#badgePT');
let badgeES = document.querySelector('#badgeES');
let badgeID = document.querySelector('#badgeID');
let caseStudyButton = document.querySelector('#caseStudyButton');
let caseStudiesButton = document.querySelector('#caseStudiesButton');


// Other variables
let currentCaseStudyIndex = 0;
let currentQuoteCharacter = -1;
let currentSourceCharacter = -1;
let caseStudyIndexes = createRandomIndexList(CASE_STUDIES);

// Start the text rotations
updateCaseStudy();


// Update the case study one character at a time
function updateCaseStudy() {
  let caseStudy = CASE_STUDIES[caseStudyIndexes[currentCaseStudyIndex]];
  let nextCharacterMilliseconds = Math.round(CASE_STUDY_TYPING_MILLISECONDS /
                                             (caseStudy.quote.length + 1));
  let isNewCaseStudy = (currentQuoteCharacter === -1) &&
                       (currentSourceCharacter === -1);
  let isQuoteComplete = (currentQuoteCharacter >= (caseStudy.quote.length - 1));
  let isSourceComplete = (currentSourceCharacter >=
                          (caseStudy.source.length - 1));
  let isCaseStudyComplete = (isQuoteComplete && isSourceComplete);

  if(isNewCaseStudy) {
    quote.textContent = '';
    source.textContent = '';
    caseStudyImage.setAttribute('src', caseStudy.image);
    badgeCommunity.hidden = true;
    badgeBreakthrough.hidden = true;
    badgeBeyond.hidden = true;
    badgeOA.hidden = true;
    badgeAT.hidden = true;
    badgePT.hidden = true;
    badgeES.hidden = true;
    badgeID.hidden = true;
    caseStudyButton.hidden = true;
    caseStudiesButton.hidden = true;
  }

  if(isCaseStudyComplete) {
    switch(caseStudy.plan) {
      case 'Community': badgeCommunity.hidden = false; break;
      case 'Breakthrough': badgeBreakthrough.hidden = false; break;
      case 'Beyond': badgeBeyond.hidden = false; break;
    }
    caseStudy.useCases.forEach(function(useCase) {
      switch(useCase) {
        case 'OA': badgeOA.hidden = false; break;
        case 'AT': badgeAT.hidden = false; break;
        case 'PT': badgePT.hidden = false; break;
        case 'ES': badgeES.hidden = false; break;
        case 'ID': badgeID.hidden = false; break;
      }
    });
    if(caseStudy.url) {
      caseStudyButton.setAttribute('href', caseStudy.url);
      caseStudyButton.hidden = false;
    }
    currentCaseStudyIndex = (currentCaseStudyIndex + 1) % CASE_STUDIES.length;
    currentQuoteCharacter = -1;
    currentSourceCharacter = -1;
    caseStudiesButton.hidden = false;

    return setTimeout(updateCaseStudy, CASE_STUDY_HOLD_MILLISECONDS);
  }

  if(!isQuoteComplete) {
    quote.textContent += caseStudy.quote[++currentQuoteCharacter];
  }
  if(!isSourceComplete) {
    source.textContent += caseStudy.source[++currentSourceCharacter];
  }

  setTimeout(updateCaseStudy, nextCharacterMilliseconds);
}


// Create a random index list from the given array
function createRandomIndexList(sourceArray) {
  let indexList = [];
  let randomIndex;

  sourceArray.forEach(function(value, index) {
    while(indexList.length <= index) {
      randomIndex = Math.floor(Math.random() * sourceArray.length);
      if(!indexList.includes(randomIndex)) {
        indexList.push(randomIndex);
      }
    }
  });

  return indexList;
}