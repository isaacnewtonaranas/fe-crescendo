import Axios from 'axios'

export default {
  async recipes(context) {
    try {
      const res = await Axios.get('/recipes')
      context.commit('recipes', res.data)
    } catch (error) {
      throw error
    }
  },
  async recipe(context, uuid) {
    try {
      const res = await Axios.get('/recipes?uuid=' + uuid)
      context.commit('recipe', res.data)
    } catch (error) {
      throw error
    }
  },
  async specials(context, ingredientId) {
    try {
      const res = await Axios.get('/specials?ingredientId=' + ingredientId)
      context.commit('recipe', res.data)
    } catch (error) {
      throw error
    }
  }
}
