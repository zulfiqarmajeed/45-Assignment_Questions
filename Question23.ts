// Conditional Tests: Write a series of conditional tests. Print a statemen
// t describing each test and your prediction for the results of each test.
// Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each
// line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and
// another 5 tests evaluate to False.

let car: string = 'subaru';

console.log("Is car == 'subaro'? I predict True.");
console.log(car == 'subaru');

console.log("Is car == 'honda'? I predict False.");
console.log(car == 'honda');

console.log("Is the length of car == 6? I predict True.");
console.log(car.length == 6);

console.log("Is car != 'Toyota'? I preditct True.");
console.log(car != 'Toyota');

console.log("Does car start with 'sub'? I predict True.");
console.log(car.startsWith('sub'));

console.log("Does car end with  'aru'? I predict True.");
console.log(car.endsWith('aru'));

console.log("Is the length of car > 5? I predict True");
console.log(car.length > 5);

console.log("Is car == 'Subaru' (case-sensitive)? I predict False.");
console.log(car === 'Subaru');

console.log("Is the type of car == 'string'? I predict True.");
console.log(typeof car === 'string');

console.log("Is car == undefined? I predict False.");
console.log(car == undefined);