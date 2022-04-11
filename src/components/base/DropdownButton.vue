<template>
  <div class="dropdown">
    <button class="row shadow" @click="opened = !opened">
      {{ label }}
      <Icon name="angle-down" />
    </button>
    <ul class="dropdown-content panel" :class="{ opened }">
      <li @click="select(null)">All</li>
      <li v-for="(item, i) in items" :key="i" @click="select(item)">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue'],
  props: { placeholder: String, modelValue: String, items: Array },
  data: () => ({ opened: false }),
  methods: {
    select(item) {
      this.$emit('update:modelValue', item)
      this.opened = false
    },
  },
  computed: {
    label() {
      return this.modelValue || this.placeholder
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  & button {
    min-width: 12rem;
  }
}
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 12rem;
  top: 3em;
  & li {
    line-height: 2.2;
    cursor: pointer;
  }
  &.opened {
    display: block !important;
  }
}
</style>
