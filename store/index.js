import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    stateMenu: false,
    pathToPreviousProject: '',
    pathToCurrentProject: '',
    pathToNextProject: '',
    pathToSecondNextProject: '',
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
      'cher ami'
    ],
    projects: {
      jochengerz: {
        color: 'red',
        description: 'I worked on this project at Edenspiekermann, mainly on the filter part. For more information: ',
        img: 'gerz2.jpg',
        links: {
          moreInformation: 'https://www.edenspiekermann.com/projects/jochen-gerz/',
          seeWebsite: 'jochengerz.eu/works'
        }
      },
      mywings: {
        color: 'yellow',
        description: 'I was working on this platform during my time at Edenspiekermann. I was doing mostly maintenance and sometimes working on new functionality.',
        img: 'mywings.jpg',
        links: {
          moreInformation: 'https://www.edenspiekermann.com/projects/red-bull-mywings/',
          seeWebsite: 'http://mywings.redbull.com/fr-fr/'
        }
      },
      portfolio: {
        color: 'blue',
        description: 'It’s my previous portfolio. The hardest part was the compatibility of the svg mask with all browser. Like this one I made the design and the coding part.',
        img: 'portfolio.jpg',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/portfolio-2017/'
        }
      },
      fidgetcube: {
        color: 'red',
        description: 'For this project I created the cube on Cinema 4D, made the slider and integrated several pages and the menu. To enjoy the best experience, it is better to open the website on an android phone with Chrome or Firefox because the API vibrations unfortunaly didn\'t work on IOS by now',
        img: 'fidget1.jpg',
        links: {
          seeWebsite: 'https://suongkevintan.github.io/hetic-p2019-11/'
        }
      },
      maitrerenard: {
        color: 'yellow',
        description: 'It was a fun school project made in a weeks with some friends at school. The goal is to write a poem and the editor validate if your poem respect some guidelines (Alexandrine, …).',
        img: 'maitrerenard.jpg',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/maitre-renard/public/'
        }
      },
      starwars: {
        color: 'blue',
        description: 'This project has been made during an intensive week. The theme was Star Wars. I developped the blue visualizer, entirely in DOM which had to react to frequency of the sound.',
        img: 'starwars.jpg',
        links: {
          seeWebsite: 'http://corentinmarzin.fr/lab/star-wars/'
        }
      },
      heaven: {
        color: 'red',
        description: 'I worked on this during my internship at Cher Ami (Lyon during 3 months). I realized the menu animation and participated to the integration of the site.',
        img: 'heaven.jpg',
        links: {
          seeWebsite: 'https://heaven.fr/'
        }
      },
      bethedrop: {
        color: 'yellow',
        description: 'This is the second project I made during my internship at Cher Ami (Lyon during 3 months). I made the fallback version of the website in the case of the WEBGL version was not available.',
        img: 'bethedrop.jpg',
        links: {
          seeWebsite: 'https://www.jeanpaulgaultier.com/fr-fr/bethedrop/?fallback=true'
        }
      },
      cherami: {
        color: 'blue',
        description: 'During 3 months, I had my internship at Cher Ami in Lyon. My first project consisted of making some changes on several pages of their website (about/contact). I was in charge to integrate new animations like the loader and the opening animation for the videos.',
        img: 'cherami.jpg',
        links: {
          seeWebsite: 'http://cher-ami.tv'
        }
      }
    }
  }
})

export default store
