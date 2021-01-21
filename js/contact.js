// Constants
const CASE_STUDY_SEARCH_PARAMETER = 'case-study';
const CASE_STUDY_SUBJECT = 'Case study inquiry';


// DOM elements
let emailSales = document.querySelector('#email-sales');
let emailSupport = document.querySelector('#email-support');
let emailInfo = document.querySelector('#email-info');
let emailSample = document.querySelector('#email-sample');
let emailSubject = document.querySelector('#email-subject');
let emailTopic = document.querySelector('#email-topic');


// Set display based on URL search parameters, if any
let searchParams = new URLSearchParams(location.search);
let hasCaseStudySearch = searchParams.has(CASE_STUDY_SEARCH_PARAMETER);


// Case study
if(hasCaseStudySearch) {
  let caseStudy = searchParams.get(CASE_STUDY_SEARCH_PARAMETER);

  emailSales.hidden = false;
  emailSample.hidden = false;
  emailSubject.textContent = CASE_STUDY_SUBJECT;
  emailTopic.textContent = caseStudy + ' case study';
}