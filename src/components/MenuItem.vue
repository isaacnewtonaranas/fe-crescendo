<template>
  <q-card class="menu-item">
    <q-img :src="api + recipe.images.medium" />

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="restaurant_menu"
        class="absolute"
        style="top: 0; right: 12px; transform: translateY(-50%);"
        :to="{ name: 'recipe', params: { uuid: recipe.uuid } }"
      />

      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">
          {{ recipe.title }}
        </div>
        <div
          class="col-auto text-grey text-caption q-pt-md row no-wrap items-center"
        >
          <q-icon name="watch_later" />&nbsp;
          {{ recipe.prepTime + recipe.cookTime }} mins
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pt-none">
      <div class="text-subtitle1">
        {{ recipe.description }}
      </div>
      <div class="text-caption text-grey">Serving: {{ recipe.servings }}</div>
    </q-card-section>

    <q-separator />

    <q-card-actions>
      <q-btn flat round icon="read_more" />
      <q-btn flat color="primary">
        Read More
      </q-btn>
    </q-card-actions>
  </q-card>
</template>
<script>
var api = 'http://' + process.env.API
export default {
  props: {
    recipe: {
      required: true
    }
  },
  data() {
    return {
      api: api,
      stars: 4
    }
  }
}
</script>
<style scoped>
.menu-item {
  width: 100%;
  max-width: 300px;
}
</style>
