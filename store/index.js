import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    projectTitle: [
      'jochen gerz',
      'mywings',
      'portfolio',
      'fidget cube',
      'maitre renard',
      'star wars',
      'heaven',
      'be the drop',
      'cher ami',
      'lab'
    ],
    projects: {
      jochengerz: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      mywings: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      portfolio: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      cherami: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      fidgetcube: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      maitrerenard: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      starwars: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      heaven: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      bethedrop: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      lab: {
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      }
    },
    pathToPreviousProject: '',
    pathToCurrentProject: '',
    pathToNextProject: '',
    counterProject: 0
  }
})

export default store
