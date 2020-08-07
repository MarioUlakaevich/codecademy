//create variable for my age
var myAge = 24;
//create new variable 
let earlyYears = 2;
earlyYears *= 10.5;
// new variable for 2 years ago
let laterYears = myAge - 2;
laterYears *= 4;
//print earlyYears and laterYears
console.log(earlyYears);
console.log(laterYears);
//new variable stores earlyYears and laterYears
var myAgeInDogYears = earlyYears + laterYears;
//my name in lower case
var myName = 'Marat'.toLowerCase();
//print the message
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);