// Alien Colors #2: Choose a color for an alien as you did in Exercise 25,
// and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just
// earned 5 points for shooting the alien.

// • If the alien’s color isn’t green, print a statement that the player 
//just earned 10 points.

// • Write one version of this program that runs the if block and another
// that runs the else block.

let alienColour: string = 'green';

if (alienColour === 'green') {
    console.log('Congralations! You just earned 5 points for shotting down the green alien.');
} else {
    console.log('You just earned 10 points for shotting down the green alien.');
}

let alienColour1: string = 'Yellow';

if (alienColour1 === 'green') {
    console.log('Congralations! You just earnd 5 points for shooting down the green alien.');
} else {
    console.log('You just earned 10 points for shooting and alien of a different colour.')
}