const API_URL = 'https://restcountries.com/v3.1/all'

import {
  compare,
  extractNumber,
  extractString,
  extractProperty,
  extractValues,
  extractUnique,
} from './_helpers.js'

import { ref, computed } from 'vue'

function mapCountriesApiV3(country) {
  return {
    id: country.cca3,
    name: extractString(country.name.common),
    population: extractNumber(country.population),
    nativeName: extractProperty(country.name.nativeName, 'common')[0],
    region: extractString(country.region),
    subregion: extractString(country.subregion),
    capital: extractString(country.capital && country.capital[0]),
    domain: extractString(country.tld && country.tld[0]),
    currencies: extractProperty(country.currencies, 'name').join(', '),
    languages: extractValues(country.languages).join(', '),
    borders: country.borders || [],
    flag: country.flags.png,
  }
}

export default function () {
  const currentRegion = ref(null)
  const currentCountry = ref({})
  const countries = ref([])
  const regions = ref([])
  const searchText = ref('')

  const loadCountries = async function () {
    try {
      const response = await fetch(API_URL)
      const data = await response.json()
      countries.value = data.map(mapCountriesApiV3).sort(compare)
      regions.value = extractUnique(countries.value, 'region').sort()
    } catch (err) {
      console.error(err.message)
    }
  }

  const findCountry = function (id) {
    return countries.value.find((e) => e.id === id)
  }

  const selectCountry = function (id) {
    currentCountry.value = findCountry(id)
  }

  const countriesByRegion = computed(() => {
    if (currentRegion.value) {
      return countries.value.filter((country) => {
        return country.region === currentRegion.value
      })
    } else {
      return countries.value
    }
  })

  const searchedCountries = computed(() => {
    if (searchText.value.length) {
      return countriesByRegion.value.filter((country) => {
        const terms = searchText.value.toLowerCase().split(' ')
        return terms.every((term) =>
          country.name.toLocaleLowerCase().includes(term)
        )
      })
    } else {
      return countriesByRegion.value
    }
  })

  return {
    countries: searchedCountries,
    regions,
    currentCountry,
    currentRegion,
    searchText,
    loadCountries,
    findCountry,
    selectCountry,
  }
}
