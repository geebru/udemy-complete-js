// Variables and data types
// var firstName = 'Greg';
// console.log(firstName);

// var lastName = 'Bruening';
// var age = 30;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Front-end developer';
// console.log(job);





// Variable mutation and type coercion
// var firstName = 'Greg';
// var age = 30;

// // Type coercion
// console.log(firstName + ' ' + age);

// var job, isMarried;
// job = 'Front-end developer';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'thirty five';
// job = 'stay-at-home dad';

// alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);





// Basic operators
// var currentYear, yearGreg, yearBrenna;

// // Math operators
// currentYear = 2018;
// ageGreg = 30;
// ageBrenna = 26;

// birthYearGreg = currentYear - ageGreg;
// birthYearBrenna = currentYear - ageBrenna;

// console.log(birthYearGreg);
// console.log(currentYear + 2);
// console.log(currentYear * 2);
// console.log(currentYear / 10);

// // Logical operators
// var isGregOlder = ageGreg > ageBrenna;
// console.log(isGregOlder);

// // typeof operator
// console.log(typeof isGregOlder);
// console.log(typeof ageGreg);
// console.log(typeof 'Greg is older than Brenna.');

// var x;
// console.log(typeof x);





// Operator precedence
// var currentYear, birthYearGreg, fullAge, isFullAge;

// currentYear = 2018;
// birthYearGreg = 1988;
// fullAge = 21;

// // Multiple operators
// isFullAge = currentYear - birthYearGreg >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageGreg = currentYear - birthYearGreg;
// var ageBrenna = 26;
// var averageAge = (ageGreg + ageBrenna) / 2;
// console.log(averageAge);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6;
// console.log(x, y);

// // More!
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);





// Coding challenge
// var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markLarger;

// markMass = 90.7; // 200 lbs
// markHeight = 1.8; // 6 ft
// johnMass = 79.3; // 175 lbs
// johnHeight = 1.5; // 5 ft

// markBMI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnHeight * johnHeight);
// console.log(markBMI, johnBMI);

// markLarger = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + markLarger);





// If / else statements
// var firstName = 'Greg';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//   console.log(firstName + ' is married.');
// } else {
//   console.log(firstName + ' is single.');
// }

// var isMarried = true;
// if (isMarried) {
//   console.log(firstName + ' is married.');
// } else {
//   console.log(firstName + ' is single.');
// }

// var markMass, markHeight, johnMass, johnHeight, markBMI, johnBMI, markLarger;

// markMass = 90.7; // 200 lbs
// markHeight = 1.8; // 6 ft
// johnMass = 79.3; // 175 lbs
// johnHeight = 1.5; // 5 ft

// markBMI = markMass / (markHeight * markHeight);
// johnBMI = johnMass / (johnHeight * johnHeight);

// if (markBMI > johnBMI) {
//   console.log('Mark has a higher BMI than John.')
// } else {
//   console.log('John has a higher BMI than Mark.');
// }





// Boolean logic
// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//   console.log(firstName + ' is a child.');
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + ' is a young adult.');
// } else {
//   console.log(firstName + ' is an adult.');
// }





// Ternary operator and switch statements
// var firstName = 'John';
// var age = 16;

// age >= 21 ? console.log(firstName + ' drinks whiskey.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 21 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 21) {
//   var drink = 'beer';
// } else {
//   var drink = 'juice';
// }

// var job = 'instructor';
// switch (job) {
//   case 'teacher':
//   case 'instructor':
//     console.log(firstName + ' teaches children how to code.');
//     break;
//   case 'driver':
//     console.log(firstName + ' drives an Uber in New York.');
//     break;
//   case 'designer':
//     console.log(firstName + ' designs beautiful websites.');
//     break;
//   default:
//     console.log(firstName + ' does something else.');
// }

// age = 30;
// switch (true) {
//   case age < 13:
//     console.log(firstName + ' is a boy.');
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + ' is a teenager.');
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + ' is a young adult.');
//     break;
//   default:
//     console.log(firstName + ' is an adult.');
// }





// Truthy Falsy
// var height;

// if (height) {
//   console.log('Variable is defined');
// } else {
//   console.log('Variable is NOT defined');
// }

// height = 23;

// height ? console.log('Defined') : console.log('Undefined');

// if (height == '23') {
//   console.log('The == operator does type coercion!');
// }

// if (height === '23') {
//   console.log('The === operator does NOT do type coercion!');
// }





// Coding Challenge #2
// var teamAverageJohn, teamAverageMike, teamAverageMary;

// teamAverageJohn = (95 + 128 + 113) / 3;
// teamAverageMike = (116 + 94 + 126) / 3;
// teamAverageMary = (97 + 134 + 105) / 3;

// console.log(teamAverageJohn, teamAverageMike, teamAverageMary);

// switch (true) {
//   case teamAverageJohn > teamAverageMike && teamAverageJohn > teamAverageMary:
//     console.log('John\'s team has the highest average.');
//     break;
//   case teamAverageMike > teamAverageJohn && teamAverageMike > teamAverageMary:
//     console.log('Mike\'s team has the highest average.');
//     break;
//   case teamAverageMary > teamAverageJohn && teamAverageMary > teamAverageMike:
//     console.log('Mary\'s team has the highest average.');
//     break;
//   case teamAverageJohn === teamAverageMike && teamAverageJohn != teamAverageMary:
//     console.log('John and Mike\'s teams have the same average.');
//     break;
//   case teamAverageMike === teamAverageMary && teamAverageMike != teamAverageJohn:
//     console.log('Mike and Mary\'s teams have the same average.');
//     break;
//   case teamAverageJohn === teamAverageMary && teamAverageMike != teamAverageMary:
//     console.log('John and Mary\'s teams have the same average.');
//     break;
//   default:
//     console.log('We\'re all winners here.');
//     break;
// }





// Functions
// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1988);
// var ageMike = calculateAge(1921);
// var ageMary = calculateAge(1975);
// console.log(ageJohn,ageMike,ageMary);

// function yearsUntilRetirement(year,firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   if (retirement > 0 ) {
//     console.log(firstName + ' retires in ' + retirement + ' years.');
//   } else {
//     console.log(firstName + ' is already retired! Congrats!');
//   }
// }

// yearsUntilRetirement(1988,'Greg');
// yearsUntilRetirement(1929,'Jane');
// yearsUntilRetirement(2005,'Bertha');





// Function statements and expressions
var whatDoYouDo = function(job,firstName) {
  
}