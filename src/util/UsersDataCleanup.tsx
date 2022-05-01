import persons from "../assets/persons.json"
/* NETTOYER LES DONNEES de persons.json pour faciliter les choses
POUR FAIRE DES DEMANDES DE RECHERCHE DE PAYS ET DE COORDONNÉES (LATITUDE, LONGITUDE).
(LATITUDE, LONGITUDE) ET DE LES COMPARER ET LES FAIRE CORRESPONDRE */

import Person from "../interfaces/person"

const people: any = persons

// Utilisation de l'uuid pour l'identifiant de la personne
// const normalizeIDs = () => {
//   people.forEach((person: Person, index: number) => {
//     person.id = index + 1
//   })
// }

// normalizeIDs()

// Suppression de toutes les parenthèses, espaces supplémentaires, symboles et autres éléments inutiles dans les noms de pays.
const allCountryNamesCleaned = people.map((person: Person) => {
  return (
    person.location.country
      //supprime les parenthèses et tout ce qui se trouve à l'intérieur des parenthèses.
      // si des personnes ont ajouté entre parenthèses (Disponible pour le travail à distance) ou similaire.
      ?.replace(/ *\([^)]*\) */g, "")
      // supprime tout ce qui n'est pas alphabet et lettres latines/autres éáíúçèk
      .replace(/[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+/g, "")
      // remplace 2 ou plusieurs espaces par un seul.
      .replace(/  +/g, " ")
      .trim()
 Sulayman
     .toLowerCase()

      .toLowerCase()
 main
  )
})

// Utilisation du commutateur pour corriger les noms de pays afin d'obtenir la latitude et la longitude correctes du pays.
// TODO : Mais des règles strictes devraient être établies pour l'ajout de noms de pays afin que cela ne soit pas nécessaire.
// Et la personne qui fusionne les pull requests pour l'ajout de nouveaux utilisateurs devrait s'assurer que les données sont propres avant de les fusionner.

// Ceci contiendra les noms de pays en double
// qui seront supprimés dans la fonction suivante - removeDuplicateCountryNames
const allCountryNamesFixedToMatchAPINames = allCountryNamesCleaned.map(
  (country: any) => {
    switch (country) {
      case "US":
        return "United States"
      case "USA":
        return "United States"
      case "United States":
        return "United States"
      case "United States Of America":
        return "United States"
      case "UAE":
        return "United Arab Emirates"
      case "UK":
        return "United Kingdom"
      case "INDIA":
        return "India"
      case "IN":
        return "India"
      case "RU":
        return "Russian Federation"
      case "Russia":
        return "Russian Federation"
      case "CH":
        return "China"
      case "Perú":
        return "Peru"
      case "SriLanka":
        return "Sri Lanka"
      case "NIGERIA":
        return "Nigeria"
      default:
        return country
    }
  }
)

// Cette fonction renvoie un objet contenant le nom du pays et le nombre de développeurs de ce pays.
// Elle ajoute le nombre de développeurs lorsqu'elle rencontre des noms de pays en double.

function removeDuplicateNames(countryArrayWithDuplicateValues: any) {
  let deduplicatedCountries = countryArrayWithDuplicateValues.reduce(
    (prev: any, curr: any) => {
      // console.log("prev", prev, "current", curr);
      prev[curr] = (prev[curr] || 0) + 1
      return prev
    },
    {}
  )

  return deduplicatedCountries
}
export const countriesWithNumOfDevsObj = removeDuplicateNames(
  allCountryNamesFixedToMatchAPINames
)
const cities = people.map((person: Person) => {
  return (
    person.location.city
      //supprime les parenthèses et tout ce qui se trouve à l'intérieur des parenthèses.
      // si des personnes ont ajouté entre parenthèses (Disponible pour le travail à distance) ou similaire.
      ?.replace(/ *\([^)]*\) */g, "")
      // supprime tout ce qui n'est pas alphabet et lettres latines/autres éáíúçèk
      .replace(/[^A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]+/g, "")
      // remplace 2 ou plusieurs espaces par un seul.
      .replace(/  +/g, " ")
      .trim()
      .toLowerCase()
  )
})
export const citiesWithNumOfDevsObj = removeDuplicateNames(cities)
