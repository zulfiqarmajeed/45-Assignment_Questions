// Magicians: Make a array of magician’s names. Pass the array to a
// function called show_magicians(), which prints the name of each magician
// in the array.

function show_magicians(magicians: string[]): void {
    console.log('Magicians:');
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicianNames: string[] = ['David Coppirfield', 'Harry Houdini', 'Derren Brown', 'Peen & Teller'];

show_magicians(magicianNames);Q