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
                <q-item-label
                  class="specials"
                  v-if="findSpecial(specials, ingredient)"
                >
                  <div class="chip">
                    <q-chip>
                      <q-avatar
                        :icon="getIcon(findSpecial(specials, ingredient).type)"
                        color="red"
                        text-color="white"
                      />
                      {{ findSpecial(specials, ingredient).type.toUpperCase() }}
                    </q-chip>
                  </div>
                  <div>
                    <b>{{ findSpecial(specials, ingredient).title }}</b>
                  </div>
                  <div>
                    {{ findSpecial(specials, ingredient).text }}
                  </div>
                  <div v-if="findSpecial(specials, ingredient).geo">
                    <a
                      class="geo"
                      :href="
                        '//www.google.com/maps/search/' +
                          findSpecial(specials, ingredient).geo
                      "
                    >
                      <q-btn label="Go Now" color="red" />
                    </a>
                  </div>
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
                  {{ i + 1 }}. {{ direction.instructions }}
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
    },
    specials() {
      return this.$store.getters['onsale/specials']
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
        await this.$store.dispatch('onsale/specials', uuid)
      } catch (error) {
        return
      } finally {
        this.loading = false
      }
    },
    findSpecial(special, ingredient) {
      return special.find(spc => spc.ingredientId == ingredient.uuid)
    },
    getIcon(type) {
      switch (type) {
        case 'event':
          return 'location_on'
          break
        case 'local':
          return 'location_on'
          break
        case 'promocode':
          return 'qr_code'
          break
        case 'sale':
          return 'label'
          break
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
.geo {
  text-decoration: none;
}
.specials {
  padding: 10px;
}
.specials div {
  margin-bottom: 7px;
}
.specials .chip {
  margin-left: -7px;
}
</style>
