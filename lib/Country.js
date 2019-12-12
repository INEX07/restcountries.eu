const lib = require("./module/search");

class Country {

    /**
     * Get all countries
     *  @example <Country>.all().then(c => console.log(c));
     */

    all() {
        return lib.all();
    } 

    /**
     * Get total countries
     *  @example <Country>.total().then(c => console.log(c));
     */

    total() {
        return lib.total();
    } 

    /**
     * Get the name of all countries
     *  @example <Country>.allName().then(c => console.log(c));
     */

    allName() {
        return lib.allName();
    } 

    /**
     * Search country by name
     * @param {String} string
     * @example <Country>.getCountryByName("Nepal").then(c => console.log(c));
     */
    getCountryByName(string) {
        if (!string) throw new TypeError("Country name not specified!");
        return lib.searchByName(string);
    }

    /**
     * Search country by code
     * @param {String} string
     * @example <Country>.getCountryByCode("np").then(c => console.log(c));
     */
    getCountryByCode(string) {
        if (!string) throw new TypeError("Country code not specified!");
        return lib.searchByCode(string);
    }

    /**
     * Search country by currency
     * @param {String} string
     * @example <Country>.getCountryByCurrency("npr").then(c => console.log(c));
     */
    getCountryByCurrency(string) {
        if (!string) throw new TypeError("Country currency not specified!");
        return lib.searchByCurrency(string);
    }

    /**
     * Search country by language
     * @param {String} string
     * @example <Country>.getCountryByLanguage("nep").then(c => console.log(c));
     */
    getCountryByLanguage(string) {
        if (!string) throw new TypeError("Language not specified!");
        return lib.searchByLanguage(string);
    }

    /**
     * Search country by capital city
     * @param {String} string
     * @example <Country>.getCountryByCapital("Kathmandu").then(c => console.log(c));
     */
    getCountryByCapital(string) {
        if (!string) throw new TypeError("Capital City not specified!");
        return lib.searchByCapital(string);
    }

    /**
     * Search country by calling code
     * @param {String} string
     * @example <Country>.getCountryByCallingCode("977").then(c => console.log(c));
     */
    getCountryByCallingCode(string) {
        if (!string) throw new TypeError("Calling code not specified!");
        return lib.searchByCallingCode(string);
    }

    /**
     * Search country by region
     * @param {String} string
     * Regions: Africa, Americas, Asia, Europe, Oceania
     * @example <Country>.getCountryByRegion("asia").then(c => console.log(c));
     */
    getCountryByRegion(string) {
        if (!string) throw new TypeError("Region not specified!");
        return lib.searchByRegion(string);
    }

    /**
     * Search country by regional bloc
     * @param {String} string
     * Regional Bloc: EU, EFTA, CARICOM, PA, AU, USAN, EEU, AL, ASEAN, CAIS, CEFTA, NAFTA, SAARC
     * @example <Country>.getCountryByRegionalBloc("saarc").then(c => console.log(c));
     */
    getCountryByRegionalBloc(string) {
        if (!string) throw new TypeError("Regional Bloc not specified!");
        return lib.searchByRegionalBloc(string);
    }

    /**
     * Get flag of a country
     * @param {String} string Country Name
     * @example <Country>.getFlag("Nepal").then(c => console.log(c));
     */
    getFlag(string) {
        if (!string) throw new TypeError("Country name maynot be empty!");
        return lib.searchFlag(string);
    }

}

module.exports = Country;