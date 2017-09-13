import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    description: []
  },
  mutations: {
    saveData (state, data) {
      // state.description = []
      console.log('data', data)
      state.description.push(data)
    }
  }
})

export default store
