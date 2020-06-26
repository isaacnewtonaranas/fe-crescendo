<template>
  <q-page class="q-pa-md row q-gutter-md justify-center">
    <MenuItem />
  </q-page>
</template>

<script>
export default {
  components: {
    MenuItem: () => import('../components/MenuItem')
  },
  computed: {
    recipes() {
      return this.$store.getters['onsale/recipes']
    }
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
