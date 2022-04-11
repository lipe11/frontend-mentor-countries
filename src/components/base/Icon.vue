<template>
  <i :class="iconStyles"></i>
</template>

<script>
export default {
  props: {
    name: String,
    solid: { type: Boolean, default: true },
  },
  computed: {
    iconStyles() {
      const fillClass = this.solid ? 'fa-solid' : 'fa-regular'
      const iconClass = `fa-${this.name}`
      return [fillClass, iconClass].join(' ')
    },
  },
}
</script>
