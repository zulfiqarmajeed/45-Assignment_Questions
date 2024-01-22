// Your Own Array: Think of your favorite mode of transportation, such as
// a motorcycle or a car, and make a list that stores several examples.
// Use your list to print a series of statements about these items, such 
// as “I would like to own a Honda motorcycle.”

let favoritemotorcycle: string[] = ["motorcycle","car","bicycle","scotter"];
for (let i = 0; i < favoritemotorcycle.length; i++) {
    let condtion = (`I would like to own a ${favoritemotorcycle[i]}.`);
    console.log(condtion);
}