<template>
  <div class="search-input">
    <Icon name="magnifying-glass" />
    <Icon
      name="xmark"
      @click="$emit('clear')"
      :class="{ visible: closeButtonVisible }"
    />
    <input
      type="text"
      :placeholder="placeholder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  emits: ['update:modelValue', 'clear'],
  props: ['modelValue', 'placeholder'],
  computed: {
    closeButtonVisible() {
      return !!this.modelValue.length
    },
  },
}
</script>

<style lang="scss" scoped>
.search-input {
  position: relative;
  & input {
    padding-left: 4em;
  }
  & > *:nth-child(1) {
    position: absolute;
    top: 0.75em;
    left: 1em;
  }
  & > *:nth-child(2) {
    position: absolute;
    top: 0.75em;
    right: 1em;
    visibility: hidden;
    &:hover {
      cursor: pointer;
    }
  }
}
.visible {
  visibility: visible !important;
}
</style>
