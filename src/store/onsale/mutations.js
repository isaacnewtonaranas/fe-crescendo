export default {
  recipes: (state, payload) => {
    state.recipes = payload
  },
  recipe: (state, payload) => {
    state.recipe = payload
  },
  specials: (state, payload) => {
    state.specials = payload
  }
}
