// Think of something you could store in a array. For example, you could
// make a list of mountains, rivers, countries, cities, languages, or
// anything else you’d like. Write a program that creates a list containing
// these items.

let countries: string[] = ['United States', 'Canada', 'United Kingdom', 'Germany', 'Japan'];

console.log('List of countries:');
for (let country of countries) {
    console.log(country);
}