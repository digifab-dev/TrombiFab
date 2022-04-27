import React, { useEffect, useState } from "react"
import {
  MapContainer as LeafletMap,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet"

import {
  countriesWithNumOfDevsObj,
  citiesWithNumOfDevsObj,
} from "../util/UsersDataCleanup"

import { countriesWithLatLng } from "../util/CountriesDataFilter"
import { citiesWithLatLng } from "../util/CitiesDataFilter"

// Tableau des noms de pays et du nombre de développeurs dans ces pays.
/* Nécessaire de faire correspondre les noms de pays de countriesWithNumOfDevsObj avec 
noms de pays récupérés dans l'API pour obtenir leur latitude et leur longitude pour les marqueurs */
const countryNamesAndNumOfDevsArr = Object.entries(countriesWithNumOfDevsObj)
const cityNamesAndNumOfDevsArr = Object.entries(citiesWithNumOfDevsObj)

let centerLatLngArr: any = []

function SimpleMap({ zoom = 3 }) {
  const [allCountriesLatLang, setAllCountriesLatLang] = useState([])
  useEffect(() => {
    setAllCountriesLatLang(countriesWithLatLng)
  }, [])
  const [allCitiesLatLang, setAllCitiesLatLang] = useState([])
  useEffect(() => {
    setAllCitiesLatLang(citiesWithLatLng)
  }, [])

  let countriesLatLngArr: any = allCountriesLatLang.map(({ name, latlng }) => ({
    name,
    latlng,
  }))
  let citiesLatLngArr: any = allCitiesLatLang.map(({ name, latlng }) => ({
    name,
    latlng,
  }))

  let finalArrayWithCityAndLatLng: any = []
  function finalCityAndLocationArray() {
    for (let i = 0; i < cityNamesAndNumOfDevsArr.length; i++) {
      for (let j = 0; j < citiesLatLngArr.length; j++) {
        if (
          cityNamesAndNumOfDevsArr[i][0].toLowerCase() ===
          citiesLatLngArr[j].name.toLowerCase()
        ) {
          finalArrayWithCityAndLatLng.push({
            city: citiesLatLngArr[j].name,
            latlng: citiesLatLngArr[j].latlng,
            numberOfDevs: cityNamesAndNumOfDevsArr[i][1],
          })
        }
      }
    }

    return finalArrayWithCityAndLatLng
  }
  let finalArrayWithCountryAndLatLng: any = []
  function finalCountryAndLocationArray() {
    for (let i = 0; i < countryNamesAndNumOfDevsArr.length; i++) {
      for (let j = 0; j < countriesLatLngArr.length; j++) {
        if (
          countryNamesAndNumOfDevsArr[i][0].toLowerCase() ===
          countriesLatLngArr[j].name.toLowerCase()
        ) {
          finalArrayWithCountryAndLatLng.push({
            country: countriesLatLngArr[j].name,
            latlng: countriesLatLngArr[j].latlng,
            numberOfDevs: countryNamesAndNumOfDevsArr[i][1],
          })
        }
      }
    }

    return finalArrayWithCountryAndLatLng
  }
  finalCountryAndLocationArray()
  finalCityAndLocationArray()

  // NE PAS SUPPRIMER CE CODE COMMENTÉ CI-DESSOUS
  // On peut en avoir besoin pour vérifier les entrées répétées inattendues, ce qui est plus facile avec les pays triés.
  /*
  let sorterFunction = finalArrayWithCountryAndLatLng.sort(function(a, b) {
    var nameA = a.country.toUpperCase(); // ignorer les majuscules et les minuscules
    var nameB = b.country.toUpperCase(); // ignorer les majuscules et les minuscules
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
  console.log(sorterFunction);
  */

  const markersArrayCities = finalArrayWithCityAndLatLng.map(
    ({ city, latlng }: any) => {
      return (
        <Marker key={city} position={[latlng[0], latlng[1]]}>
          <Popup>{city}</Popup>
        </Marker>
      )
    }
  )
  const markersArray = finalArrayWithCountryAndLatLng.map(
    ({ country, latlng, numberOfDevs }: any) => {
      let numberOfDevsText =
        numberOfDevs === 1
          ? numberOfDevs + " Développeur de " + country
          : numberOfDevs + " Développeurs de " + country
      return (
        <Marker key={country} position={[latlng[0], latlng[1]]}>
          <Tooltip>{numberOfDevsText}</Tooltip>
          <Popup>{numberOfDevsText}</Popup>
        </Marker>
      )
    }
  )

  const center: any =
    centerLatLngArr.length > 0
      ? [centerLatLngArr[0].lat, centerLatLngArr[0].lng]
      : [55.378052, -3.435973]

  return (
    <div style={{ height: "90vh", width: "100%", margin: 0 }}>
      <LeafletMap
        center={center}
        zoom={zoom}
        minZoom={1}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
      >
        <TileLayer
          attribution='&amp;copy <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markersArray}
        {markersArrayCities}
      </LeafletMap>
    </div>
  )
}

export default SimpleMap
