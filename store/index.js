import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    projectTitle: [
      'jochen gerz',
      'mywings',
      'portfolio',
      'fidget cube',
      'maitre-renard',
      'star wars',
      'heaven',
      'be the drop',
      'cher ami',
      'lab'
    ],
    pathToPreviousProject: '',
    pathToNextProject: '',
    counterProject: 0
  }
})

export default store
