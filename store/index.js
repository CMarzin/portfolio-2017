import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    pathToPreviousProject: '',
    pathToCurrentProject: '',
    pathToNextProject: '',
    counterProject: 0,
    currentProjectTitle: '',
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
        color: 'red',
        description: 'Made in berlin lol'
      },
      mywings: {
        color: 'yellow',
        description: 'Red bull give you wings'
      },
      portfolio: {
        color: 'blue',
        description: 'My previous portfolio x)'
      },
      fidgetcube: {
        color: 'red',
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.'
      },
      maitrerenard: {
        color: 'yellow',
        description: 'Poem editor made in 2 weeks'
      },
      starwars: {
        color: 'blue',
        description: 'This project has been made during an intensive week. The theme was Star Wars. I developped the blue visualizer, entirely in DOM which had to react to frequency of the sound.'
      },
      heaven: {
        color: 'red',
        description: 'I worked on this during my internship at Cher Ami (Lyon during 3 months). I realized the menu animation and participated to the integration of the site.'
      },
      bethedrop: {
        color: 'yellow',
        description: 'When we started the fidget cube project, there were an ongoing financing campaign on Kickstarter. For this project I created the cube on Cinema 4D, made the slider and integrated several pages and the menu. To enjoy the best experience, it is better to open the website on an android phone with Chrome or Firefox because the API vibrations unfortunaly didn\'t work on IOS by now'
      },
      cherami: {
        color: 'blue',
        description: 'During 3 months, I had my internship at Cher Ami in Lyon. My first project consisted of making some changes on several pages of their website (about/contact). I was in charge to integrate new animations like the loader and the opening animation for the videos.'
      },
      lab: {
        color: 'red',
        description: 'Some projects made for fun'
      }
    }
  }
})

export default store
