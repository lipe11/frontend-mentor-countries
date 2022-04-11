<template>
  <button class="row" :class="buttonStyles" @click="$emit('click')">
    <Icon :name="icon" :solid="solidIcon" v-if="icon" />
    <slot></slot>
  </button>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    icon: String,
    solidIcon: { type: Boolean, default: true },
    small: { type: Boolean, default: false },
    flat: { type: Boolean, default: false },
    bordered: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
  },
  computed: {
    buttonStyles() {
      return [
        this.small ? 'small' : null,
        this.flat ? 'flat' : null,
        this.bordered ? 'bordered' : null,
        this.noPadding ? 'no-padding' : null,
      ].filter((n) => n)
    },
  },
}
</script>

<style scoped>
button.row {
  gap: 1.5ch;
}
.small {
  padding: 0.5em 1em;
}
.flat {
  box-shadow: none;
}
.bordered {
  border: 1px solid var(--theme-input);
}
.no-padding {
  padding-right: 0;
  padding-left: 0;
}
</style>
