const fetch = require("node-fetch");
const base = "https://restcountries.eu/rest/v2/";

module.exports = {
    searchByName: function (name) {
        return new Promise(function (resolve, reject) {
            fetch(base + `name/${name}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByCode: function (code) {
        return new Promise(function (resolve, reject) {
            fetch(base + `alpha/${code}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByCurrency: function (currency) {
        return new Promise(function (resolve, reject) {
            fetch(base + `currency/${currency}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByLanguage: function (language) {
        return new Promise(function (resolve, reject) {
            fetch(base + `lang/${language}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByCapital: function (capital) {
        return new Promise(function (resolve, reject) {
            fetch(base + `capital/${capital}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByCallingCode: function (code) {
        return new Promise(function (resolve, reject) {
            fetch(base + `callingcode/${code}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByRegion: function (region) {
        return new Promise(function (resolve, reject) {
            fetch(base + `region/${region}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    searchByRegionalBloc: function (region) {
        return new Promise(function (resolve, reject) {
            fetch(base + `regionalbloc/${region}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    all: function () {
        return new Promise(function (resolve, reject) {
            fetch(base + `all`)
                .then(res => res.json())
                .then(body => {
                    resolve(body);
                });
        })
    },
    total: function () {
        return new Promise(function (resolve, reject) {
            fetch(base + `all`)
                .then(res => res.json())
                .then(body => {
                    resolve(body.length);
                });
        })
    },
    searchFlag: function (name) {
        return new Promise(function (resolve, reject) {
            fetch(base + `name/${name}`)
                .then(res => res.json())
                .then(body => {
                    resolve(body[0].flag);
                });
        })
    },
    allName: function () {
        return new Promise(function (resolve, reject) {
            fetch(base + `all`)
                .then(res => res.json())
                .then(body => {
                    resolve(body.map(m => m.name));
                });
        })
    },
}