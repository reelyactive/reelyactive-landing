// Constants
const GET_STARTED_SEARCH_PARAMETER = 'get-started';
const CASE_STUDY_SEARCH_PARAMETER = 'case-study';
const NEWSLETTER_SEARCH_PARAMETER = 'newsletter';
const GET_STARTED_SUBJECT = 'Inquiry about getting started';
const CASE_STUDY_SUBJECT = 'Case study inquiry';
const NEWSLETTER_SUBJECT = 'Sign me up for reelyActive news!';
const ACTION_INTRO_CALL = 'can we set up an intro call?';
const ACTION_SIGN_UP = 'kindly sign me up.';


// DOM elements
let emailSales = document.querySelector('#email-sales');
let emailSupport = document.querySelector('#email-support');
let emailInfo = document.querySelector('#email-info');
let emailSample = document.querySelector('#email-sample');
let emailSubject = document.querySelector('#email-subject');
let emailTopic = document.querySelector('#email-topic');
let emailAction = document.querySelector('#email-action');


// Set display based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasGetStartedSearch = searchParams.has(GET_STARTED_SEARCH_PARAMETER);
let hasCaseStudySearch = searchParams.has(CASE_STUDY_SEARCH_PARAMETER);
let hasNewsletterSearch = searchParams.has(NEWSLETTER_SEARCH_PARAMETER);


// Get Started
if(hasGetStartedSearch) {
  let getStarted = searchParams.get(GET_STARTED_SEARCH_PARAMETER);

  emailSales.hidden = false;
  emailSupport.hidden = true;
  emailInfo.hidden = true;
  emailSample.hidden = false;
  emailSubject.textContent = GET_STARTED_SUBJECT;
  emailTopic.textContent = 'getting started on a ' + getStarted + ' project';
  emailAction.textContent = ACTION_INTRO_CALL;
}

// Case study
else if(hasCaseStudySearch) {
  let caseStudy = searchParams.get(CASE_STUDY_SEARCH_PARAMETER);

  emailSales.hidden = false;
  emailSupport.hidden = true;
  emailInfo.hidden = true;
  emailSample.hidden = false;
  emailSubject.textContent = CASE_STUDY_SUBJECT;
  emailTopic.textContent = 'the ' + caseStudy + ' case study on your website';
  emailAction.textContent = ACTION_INTRO_CALL;
}

// Newsletter
else if(hasNewsletterSearch) {
  let newsletter = searchParams.get(NEWSLETTER_SEARCH_PARAMETER);

  emailSales.hidden = true;
  emailSupport.hidden = true;
  emailInfo.hidden = false;
  emailSample.hidden = false;
  emailSubject.textContent = NEWSLETTER_SUBJECT;
  emailTopic.textContent = 'your ' + newsletter + ' newsletter';
  emailAction.textContent = ACTION_SIGN_UP;
}