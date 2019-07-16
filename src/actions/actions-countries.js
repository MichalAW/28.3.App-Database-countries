 export const GET_COUNTRIES = 'GET_COUNTRIES';
 export const GET_COUNTRY = 'GET_COUNTRY';
 export const DELETE_COUNTRY = 'DELETE_COUNTRY';
 export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES';
 export const SET_CONTINENT = 'SET_CONTINENT';

 // List of all avaible countries:
export function getCountries() {
    return {
        type: GET_COUNTRIES
    };
 }

 // get particular country
export function getCountry(id) {
    return {
        type: GET_COUNTRY,
        id
    }
}

 // delete country
 export function deleteCountry(id) {
     return {
         type: DELETE_COUNTRY,
         id
     };
 }

// search countires
export function searchCountries(searchText) {
    return {
        type: SEARCH_COUNTRIES,
        searchText
    }
}

// add continent to country
export function setContinent(name) {
    return {
        type: SET_CONTINENT,
        name
    }
}