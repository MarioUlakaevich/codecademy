let raceNumber = Math.floor(Math.random() * 1000);
let authEarly = true;
let runnersAge = 18;

if (runnersAge >= 18 && authEarly) {
  raceNumber += 1000;
  console.log(`${raceNumber} will race at 9:30 am.`);
} else if (runnersAge >= 18 && !authEarly) {
  console.log(`${raceNumber} will race at 11:00 am.`);
} else {
  console.log(`${raceNumber} will race at 12:30 pm.`);
}