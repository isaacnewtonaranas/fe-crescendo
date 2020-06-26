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
  async recipe(context, id) {
    try {
      const res = await Axios.get('/recipes/' + id)
      context.commit('recipe', res.data)
    } catch (error) {
      throw error
    }
  }
}
