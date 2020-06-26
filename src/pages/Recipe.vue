<template>
  <div>
    <q-card v-if="!loading" class="recipe" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-7">
          {{ uuid }}
        </q-card-section>

        <q-img class="col-5" :src="api + (recipe.images.medium || '')" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
var api = 'http://' + process.env.API
export default {
  props: ['uuid'],
  computed: {
    recipe() {
      return this.$store.getters['onsale/recipe'][0]
    }
  },
  data() {
    return { api: api, loading: true }
  },
  mounted() {
    this.loading = true
    this.getOneRecipe(this.$route.params.uuid)
  },
  methods: {
    async getOneRecipe(uuid) {
      try {
        await this.$store.dispatch('onsale/recipe', uuid)
      } catch (error) {
        return
      } finally {
        this.loading = false
      }
    }
  }
}
</script>
<style scoped>
.recipe {
  width: 100%;
  max-width: 700px;
}
</style>
