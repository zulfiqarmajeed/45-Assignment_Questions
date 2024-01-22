// City Names: Write a function called city_country() that takes in the
// name of a city and its country. The function should return a string
// formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the
// value that’s returned.

function describe_city(city: string, country: string = 'Unknown'): void {
    console.log(`${city} is in ${country}.`);
}

describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Tokyo');