const SWEEP_ITERATIONS = 30;
const SWEEP_ITERATION_MILLISECONDS = 30;

let hourHand = document.getElementById("hourHand");
let minuteHand = document.getElementById("minuteHand");
let secondHand = document.getElementById("secondHand");

let hourAngle = 225;
let minuteAngle = 135;
let secondAngle = 0;

function displayTime() {
  let now = new Date();
  let isMinuteReset = (now.getMinutes() === 0) && (now.getSeconds() === 0);
  let isHourReset = ((now.getHours() % 12) === 0) && isMinuteReset;

  if(isHourReset) { sweepHours(); }
  else {
    hourHand.style.transform = 'rotate(' + calculateHourAngle(now) + 'deg)';
  }

  if(isMinuteReset) { sweepMinutes(); }
  else {
    minuteHand.style.transform = 'rotate(' + calculateMinuteAngle(now) + 'deg)';
  }

  secondHand.style.transform = 'rotate(' + calculateSecondAngle(now) + 'deg)';
}

function sweepSeconds() {
  let now = new Date();
  let secondAngleIncrement = (calculateSecondAngle(now) - secondAngle) /
                             SWEEP_ITERATIONS;

  sweepSecondsIteration(SWEEP_ITERATIONS, secondAngleIncrement);
}

function sweepMinutes() {
  let now = new Date();
  let minuteAngleIncrement = ((360 + calculateMinuteAngle(now)) - minuteAngle) /
                       SWEEP_ITERATIONS;

  sweepMinutesIteration(SWEEP_ITERATIONS, minuteAngleIncrement);
}

function sweepHours() {
  let now = new Date();
  let hourAngleIncrement = ((360 + calculateHourAngle(now)) - hourAngle) /
                           SWEEP_ITERATIONS;

  sweepHoursIteration(SWEEP_ITERATIONS, hourAngleIncrement);
}

function sweepSecondsIteration(iteration, secondAngleIncrement) {
  secondAngle += secondAngleIncrement;
  secondHand.style.transform = 'rotate(' + secondAngle + 'deg)';

  if(--iteration > 0) {
    setTimeout(sweepSecondsIteration, SWEEP_ITERATION_MILLISECONDS,
               iteration, secondAngleIncrement);
  }
}

function sweepMinutesIteration(iteration, minuteAngleIncrement) {
  minuteAngle -= minuteAngleIncrement;
  minuteHand.style.transform = 'rotate(' + minuteAngle + 'deg)';

  if(--iteration > 0) {
    setTimeout(sweepMinutesIteration, SWEEP_ITERATION_MILLISECONDS,
               iteration, minuteAngleIncrement);
  }
}

function sweepHoursIteration(iteration, hourAngleIncrement) {
  hourAngle += hourAngleIncrement;
  hourHand.style.transform = 'rotate(' + hourAngle + 'deg)';

  if(--iteration > 0) {
    setTimeout(sweepHoursIteration, SWEEP_ITERATION_MILLISECONDS,
               iteration, hourAngleIncrement);
  }
}

function calculateHourAngle(currentTime) {
  return 225 + (90 * (currentTime.getHours() % 12) / 12);
}

function calculateMinuteAngle(currentTime) {
  return 135 - (90 * (currentTime.getMinutes() / 60));
}

function calculateSecondAngle(currentTime) {
  return 6 * currentTime.getSeconds();
}

sweepHours();
sweepMinutes();
sweepSeconds();
setInterval(displayTime, 1000);