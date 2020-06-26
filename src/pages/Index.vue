<template>
  <q-page class="q-pa-md row q-gutter-md justify-center">
    <MenuItem />
    <MenuItem />
    <MenuItem />
    <MenuItem />
  </q-page>
</template>

<script>
export default {
  components: {
    MenuItem: () => import('../components/MenuItem')
  },
  async mounted() {
    try {
      await this.$store.dispatch('onsale/recipes')
    } catch (error) {
      return
    }
  }
}
</script>
