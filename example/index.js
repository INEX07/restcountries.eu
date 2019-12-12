const Country = require('../index');
const country = new Country.REST();

// fetch all countries
country.all().then(c => {
    console.log(c);
});

// fetch all countries name
country.allName().then(c => console.log(c));

// fetch country by name
country.getCountryByName("Nepal").then(c => console.log(c));

// fetch flag
country.getFlag("Nepal").then(c => console.log(c)); // returns .svg format

// total countries
country.total().then(c => console.log(`There are ${c} countries!`));