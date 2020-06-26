<template>
  <q-page class="q-pa-md row q-gutter-md justify-center">
    <MenuItem :recipe="recipe" v-for="(recipe, i) in recipes" :key="i" />
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
  mounted() {
    this.getAllRecipes()
  },
  methods: {
    async getAllRecipes() {
      try {
        await this.$store.dispatch('onsale/recipes')
      } catch (error) {
        return
      }
    }
  }
}
</script>
