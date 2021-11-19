// Constants
const CHALLENGES = [
  { count: 1, title: "Transitory competitive advantage" },
  { count: 2, title: "VUCA environment" },
  { count: 3, title: "Pressure on digital transformation" },
  { count: 4, title: "Limited capabilities and/or structural inertia" }
];
const CHALLENGES_UPDATE_MILLISECONDS = 2400;


// DOM elements
let challengeCount = document.querySelector('#challengeCount');
let challengeTitle = document.querySelector('#challengeTitle');


// Other variables
let currentChallengeIndex = 0;


// Start the text rotations
updateChallenge();


// Update the challenge periodically
function updateChallenge() {
  challengeCount.textContent = CHALLENGES[currentChallengeIndex].count;
  challengeTitle.textContent = CHALLENGES[currentChallengeIndex].title;
  currentChallengeIndex = (currentChallengeIndex + 1) % CHALLENGES.length;
  setTimeout(updateChallenge, CHALLENGES_UPDATE_MILLISECONDS);
}