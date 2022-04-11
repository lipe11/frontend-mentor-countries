<template>
  <div class="card shadow rounded" @click="$emit('select', country.id)">
    <img :src="country.flag" alt="flag" />
    <div class="details">
      <h2 class="title">{{ country.name }}</h2>
      <p><strong>Population:</strong> {{ country.population }}</p>
      <p><strong>Region:</strong> {{ country.region }}</p>
      <p><strong>Capital:</strong> {{ country.capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['select'],
  props: { country: Object },
}
</script>

<style lang="scss" scoped>
.card {
  background-color: var(--theme-element);
  max-width: 450px;
  &:hover {
    cursor: pointer;
  }
  &:active {
    position: relative;
    top: 3px;
    left: 1px;
    box-shadow: none;
  }
  & .details {
    font-size: 0.8em;
    line-height: 1.6;
    padding: 1em;
    & .title {
      font-size: 1.4em;
      margin-bottom: 0.4em;
    }
  }
}
</style>
