<template>
  <div class="two-col big-gap">
    <img :src="country.flag" class="shadow" />
    <CountryDetails
      :country="country"
      :borders="borders"
      @select="(id) => $emit('select', id)"
    />
    <img :src="worldMap" class="rounded shadow" v-if="hasSubregion" />
    <img :src="regionMap" class="rounded shadow" v-if="hasSubregion" />
  </div>
</template>

<script>
export default {
  emits: ['select'],
  props: { country: Object, findCountry: Function },
  computed: {
    hasSubregion() {
      return this.country.subregion !== 'none'
    },
    borders() {
      return this.country.borders.map((id) => ({
        id,
        name: this.findCountry(id).name,
      }))
    },
    worldMap() {
      return `/maps/${this.country.id}-w.png`
    },
    regionMap() {
      return `/maps/${this.country.id}-r.png`
    },
  },
}
</script>
