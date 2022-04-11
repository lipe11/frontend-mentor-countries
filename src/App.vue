<template>
  <TopBar
    title="Where in the world?"
    :dark="isThemeDark"
    @toggle="toggleTheme"
  />
  <main class="container page">
    <!-- grid view -->
    <template v-if="isHome">
      <nav class="toolbar">
        <SearchInput
          placeholder="Search for a country..."
          v-model="searchText"
          @clear="searchText = ''"
        />
        <DropdownButton
          placeholder="Filter by region"
          v-model="currentRegion"
          :items="regions"
        />
      </nav>
      <div class="grid">
        <CountryCard
          v-for="country in countries"
          :key="country.id"
          :country="country"
          @select="goToCountry"
        />
      </div>
    </template>
    <!-- details view -->
    <template v-else>
      <nav class="toolbar no-stretch">
        <IconButton icon="long-arrow-left" @click="goBack"> Back </IconButton>
      </nav>
      <CountryPage
        :country="currentCountry"
        :find-country="findCountry"
        @select="goToCountry"
      />
    </template>
  </main>
</template>

<script>
import useThemes from './composables/themes'
import useCountries from './composables/countries'
import { ref, onMounted } from 'vue'

export default {
  setup() {
    const isHome = ref(true)
    const $themes = useThemes()
    const $countries = useCountries()
    const goToCountry = function (id) {
      $countries.selectCountry(id)
      isHome.value = false
    }
    const goBack = function () {
      isHome.value = true
    }
    onMounted(() => $countries.loadCountries())
    return {
      isHome,
      isThemeDark: $themes.isDark,
      countries: $countries.countries,
      regions: $countries.regions,
      currentCountry: $countries.currentCountry,
      currentRegion: $countries.currentRegion,
      searchText: $countries.searchText,
      toggleTheme: $themes.toggleTheme,
      findCountry: $countries.findCountry,
      goToCountry,
      goBack,
    }
  },
}
</script>

<style lang="scss">
@import './assets/styles.scss';
</style>

<style lang="scss" scoped>
@import './assets/variables.scss';
.toolbar {
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding: 3em 0;
  &.no-stretch {
    align-items: flex-start;
  }
  @media (min-width: $breakpoint-medium) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 3em;
}
</style>
