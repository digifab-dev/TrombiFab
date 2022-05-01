import citiesData from "../assets/cities.json"

import City from "../interfaces/city"

const cities: any = citiesData

// Filtrer les données de la ville pour ne retourner que le nom et les valeurs [lat,lng].
const filteredCityData = cities.map((city: City) => {
  return {
    name: city.CITY,
    latlng: [
      parseFloat(city.latitude).toFixed(1),
      parseFloat(city.longitude).toFixed(1),
    ],
  }
})

export const citiesWithLatLng = filteredCityData
