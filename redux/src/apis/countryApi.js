
// const countryApi = "I'm the api :P ";
// export default countryApi;


class CountryApi {
    static getAllCountries(){
        return fetch('https://restcountries.eu/rest/v2/all')
            .then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getCountriesByContinent(continent){
        return fetch('https://restcountries.eu/rest/v2/region/' + continent)
            .then(response => {
                return response.json();
            }).catch(error => {
                return error;
            });
    }
}


export default CountryApi;