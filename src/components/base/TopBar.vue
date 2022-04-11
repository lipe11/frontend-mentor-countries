<template>
  <header class="top-bar shadow">
    <div class="row container">
      <h1 class="title">{{ title }}</h1>
      <IconButton
        class="no-padding"
        @click="$emit('toggle')"
        :solid-icon="dark"
        icon="moon"
        flat
        no-padding
      >
        Dark Mode
      </IconButton>
    </div>
  </header>
</template>

<script>
export default {
  emits: ['toggle'],
  props: { title: String, dark: Boolean },
}
</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';
.top-bar {
  background-color: var(--theme-element);
  position: sticky;
  top: 0;
  z-index: 1;
  & .row {
    min-height: 5em;
  }
  & .title {
    font-size: 1em;
    @media (min-width: $breakpoint-small) {
      font-size: 1.2em;
    }
  }
}
</style>
