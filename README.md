# restcountries.eu
An API wrapper for `restcountries.eu` written in JavaScript!

# Installing
`npm i --save restcountries.eu`

[![NPM](https://nodei.co/npm/restcountries.eu.png)](https://nodei.co/npm/restcountries.eu/)

# Importing
```js
const Countries = require('restcountries.eu');
const countries = new Countries.REST();

```

# Methods
- all()
- allName()
- total()
- getCountryByName()
- getCountryByCode()
- getCountryByCurrency()
- getCountryByLanguage()
- getCountryByCapital()
- getCountryByCallingCode()
- getCountryByRegion()
- getCountryByRegionalBloc()
- getFlag()

# Example

```js
const Country = require('restcountries.eu');
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

```

# Regional Bloc
- EU (European Union)
- EFTA (European Free Trade Association)
- CARICOM (Caribbean Community)
- PA (Pacific Alliance)
- AU (African Union)
- USAN (Union of South American Nations)
- EEU (Eurasian Economic Union)
- AL (Arab League)
- ASEAN (Association of Southeast Asian Nations)
- CAIS (Central American Integration System)
- CEFTA (Central European Free Trade Agreement)
- NAFTA (North American Free Trade Agreement)
- SAARC (South Asian Association for Regional Cooperation)

# Example Response

```js
country.getCountryByName("Nepal").then(c => console.log(c));
```

Output:
```js
[
  {
    name: 'Nepal',
    topLevelDomain: [ '.np' ],
    alpha2Code: 'NP',
    alpha3Code: 'NPL',
    callingCodes: [ '977' ],
    capital: 'Kathmandu',
    altSpellings: [
      'NP',
      'Federal Democratic Republic of Nepal',
      'Loktāntrik Ganatantra Nepāl'
    ],
    region: 'Asia',
    subregion: 'Southern Asia',
    population: 28431500,
    latlng: [ 28, 84 ],
    demonym: 'Nepalese',
    area: 147181,
    gini: 32.8,
    timezones: [ 'UTC+05:45' ],
    borders: [ 'CHN', 'IND' ],
    nativeName: 'नेपाल',
    numericCode: '524',
    currencies: [ [Object] ],
    languages: [ [Object] ],
    translations: {
      de: 'Népal',
      es: 'Nepal',
      fr: 'Népal',
      ja: 'ネパール',
      it: 'Nepal',
      br: 'Nepal',
      pt: 'Nepal',
      nl: 'Nepal',
      hr: 'Nepal',
      fa: 'نپال'
    },
    flag: 'https://restcountries.eu/data/npl.svg',
    regionalBlocs: [ [Object] ],
    cioc: 'NEP'
  }
]
```

Error:
```js
{"status":404,"message":"Not Found"}
```