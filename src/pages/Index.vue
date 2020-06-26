<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-full.svg" />
  </q-page>
</template>

<script>
export default {
  async mounted() {
    try {
      await this.$store.dispatch('onsale/recipes')
    } catch (error) {
      return
    }
  }
}
</script>
