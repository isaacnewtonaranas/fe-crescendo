import Axios from 'axios'

export default {
  async recipes() {
    try {
      const res = await Axios.get('/recipes')
      console.log(res)
    } catch (error) {
      throw error
    }
  }
}
