<template>
  <div class="row justify-center">
    <q-card v-if="!loading" class="recipe col-12" flat bordered>
      <div class="row">
        <q-img class="col-md-5" :src="api + (recipe.images.full || '')" />
        <q-card-section class="col-12 col-md-7">
          <h4>{{ recipe.title }}</h4>
          <div>
            {{ recipe.description }}
          </div>
          <div>Servings: {{ recipe.servings }}</div>
          <div>Preparation Time: {{ recipe.prepTime }} mins</div>
          <div>Cook Time: {{ recipe.cookTime }} mins</div>
          <div>Posted: {{ recipe.postDate }}</div>
          <div>Modified: {{ recipe.editDate }}</div>
          <q-separator class="q-my-lg" />
          <h6>Ingredients</h6>
          <q-list bordered separator>
            <q-item v-for="(ingredient, i) in recipe.ingredients" :key="i">
              <q-item-section>
                <q-item-label overline>
                  {{ ingredient.amount }}
                  {{ ingredient.measurement }}
                </q-item-label>
                <q-item-label>
                  {{ ingredient.name }}
                </q-item-label>
                <q-item-label>
                  <q-chip
                    class="glossy"
                    square
                    color="red"
                    text-color="white"
                    icon="location_on"
                  >
                    Bookmark
                  </q-chip>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-separator class="q-mt-lg q-mb-sm" />
          <h6>Directions</h6>
          <q-list bordered separator>
            <q-item v-for="(direction, i) in recipe.directions" :key="i">
              <q-item-section>
                <q-item-label v-if="direction.optional" overline>
                  Optional
                </q-item-label>
                <q-item-label>
                  {{ direction.instructions }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </div>
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
h4,
h6 {
  margin: 0px;
}
</style>
