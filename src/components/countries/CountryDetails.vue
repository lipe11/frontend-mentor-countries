<template>
  <div class="info">
    <h1 class="title">{{ country.name }}</h1>
    <div class="details">
      <div>
        <p><strong>Native Name:</strong> {{ country.nativeName }}</p>
        <p><strong>Population:</strong> {{ country.population }}</p>
        <p><strong>Region:</strong> {{ country.region }}</p>
        <p><strong>Sub Region:</strong> {{ country.subregion }}</p>
        <p><strong>Capital:</strong> {{ country.capital }}</p>
      </div>
      <div>
        <p><strong>Top Level Domain:</strong> {{ country.domain }}</p>
        <p><strong>Currencies:</strong> {{ country.currencies }}</p>
        <p><strong>Languages:</strong> {{ country.languages }}</p>
      </div>
    </div>
    <div class="borders">
      <strong>Border Countries:</strong>
      <div class="row" v-if="borders.length">
        <IconButton
          v-for="country in borders"
          @click="$emit('select', country.id)"
          small
          flat
          bordered
        >
          {{ country.name }}
        </IconButton>
      </div>
      <p v-else>none</p>
    </div>
  </div>
</template>

<script>
export default {
  props: { country: Object, borders: Array },
}
</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';
.info {
  @media (min-width: $breakpoint-large) {
    padding: 1em 0;
    font-size: 0.9rem;
    padding: 1em;
  }
}
.details {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2em;
  margin: 1.5em 0;
  line-height: 1.8;
  @media (min-width: $breakpoint-medium) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: $breakpoint-large) {
    line-height: 1.6;
  }
  & .title {
    font-size: 1.8em;
  }
}
.borders {
  display: flex;
  flex-direction: column;
  gap: 1ch;
  & .row {
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 1ch;
    & button {
      background-color: transparent;
    }
  }
}
</style>
