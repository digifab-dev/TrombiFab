import countriesData from '../assets/countries.json';

import Country from '../interfaces/country';

const countries: any = countriesData;

// Filtrer les données du pays pour ne retourner que le nom et les valeurs [lat,lng].
const filteredCountryData = countries.map((country: Country) => {
  return { 'name': country.COUNTRY, 'latlng': [parseFloat(country.latitude).toFixed(1),parseFloat(country.longitude).toFixed(1)] };
});

export const countriesWithLatLng = filteredCountryData;