// Constants
const MIDDLEWARE_DIFFERENTIATIONS = [ 'technology-agnostic', 'vendor-agnostic',
                                      'application-agnostic' ];
const HEADLINE_BOLD_IDS = [ 'headlineWho', 'headlineWhat', 'headlineWhere',
                            'headlineHow' ];
const CASE_STUDIES = [
  {
    quote: "How many square feet of office real estate do we need to accommodate our transition to non-assigned seating?",
    source: "Serge Bendahan, Desjardins",
    image: "images/case-studies-desjardins-dtm-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'OA' ],
    url: "case-studies/desjardins-dtm/"
  },
  {
    quote: "How quickly can we pilot an asset tracking solution in one of our healthcare facilities?",
    source: "Georges Bendavid, JGH",
    image: "images/case-studies-jgh-clsc-metro-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'AT' ],
    url: "case-studies/jgh-clsc-metro/"
  },
  {
    quote: "How can we improve our maintenance operations based on how soldiers actually spend their work day?",
    source: "US Army",
    image: "images/case-studies-usarmy-drum-hood-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'PT' ],
    url: "case-studies/usarmy-drum-hood/"
  },
  {
    quote: "What is the volume, speed and composition of pedestrian, cyclist and motorist traffic along a specific route?",
    source: "Xavier Prudent, Civilia",
    image: "images/case-studies-civilia-traffic-investigation-icon.jpg",
    plan: "Community",
    useCases: [ 'OA' ],
    url: "case-studies/civilia-traffic-investigation/"
  },
  {
    quote: "For how long do guests visit the museum and where do they spend their time?",
    source: "Brigitte Belleville, MCQ",
    image: "images/case-studies-mcq-personas-icon.jpg",
    plan: "Community",
    useCases: [ 'ID' ],
    url: "case-studies/mcq-personas/"
  },
  {
    quote: "How does where and with whom an individual spends their day affect their wellness and performance at work?",
    source: "Karel Mundnich, USC",
    image: "images/case-studies-usc-tiles-2018-icon.jpg",
    plan: "Beyond",
    useCases: [ 'PT', 'ES', 'ID' ],
    url: "case-studies/usc-tiles-2018/"
  },
  {
    quote: "What are the foot traffic patterns across our outdoor projection sites?",
    source: "Montreal en Histoires",
    image: "images/case-studies-montrealenhistoires-citememoire-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'OA' ],
    url: "case-studies/montrealenhistoires-citememoire/"
  },
  {
    quote: "How can we create a social distancing and contact tracing business solution in time to meet market demand?",
    source: "Videotron Affaires",
    image: "images/case-studies-videotron-radius-icon.jpg",
    plan: "Breakthrough",
    useCases: [ 'ID' ],
    url: "case-studies/videotron-radius/"
  }
];
const HEADLINE_BOLD_UPDATE_MILLISECONDS = 1200;
const MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS = 1800;


// DOM elements
let middlewareDifferentiation =
                           document.querySelector('#middlewareDifferentiation');


// Other variables
let currentHeadlineBoldIndex = 0;
let currentDifferentiationIndex = 0;

// Start the text rotations
updateHeadlineBold();
updateMiddlewareDifferentiation();


// Update the headline bold element periodically
function updateHeadlineBold() {
  HEADLINE_BOLD_IDS.forEach((id, index) => {
    let element = document.getElementById(id);
    if(index === currentHeadlineBoldIndex) {
      element.setAttribute('class', 'fw-bold');
    }
    else {
      element.setAttribute('class', '');
    }
  });
  currentHeadlineBoldIndex = (currentHeadlineBoldIndex + 1) %
                             HEADLINE_BOLD_IDS.length;
  setTimeout(updateHeadlineBold,
             HEADLINE_BOLD_UPDATE_MILLISECONDS)
}

// Update the middleware differentiation periodically
function updateMiddlewareDifferentiation() {
  middlewareDifferentiation.textContent =
                       MIDDLEWARE_DIFFERENTIATIONS[currentDifferentiationIndex];
  currentDifferentiationIndex = (currentDifferentiationIndex + 1) %
                                MIDDLEWARE_DIFFERENTIATIONS.length;
  setTimeout(updateMiddlewareDifferentiation,
             MIDDLEWARE_DIFFERENTIATION_UPDATE_MILLISECONDS);
}


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