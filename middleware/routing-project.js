export default function ({ route, store }) {
  const ProjectTitle = store.state.projectTitle
  let currentPathName = route.name

  let formatTitle = []
  for (let i = 0; i < ProjectTitle.length; i++) {
    formatTitle.push(ProjectTitle[i].replace(/\s+/g, ''))
  }

  let indexOfCurrentProject = formatTitle.indexOf(currentPathName)
  /* eslint-disable */
  let indexOfNextProject
  let indexOfPreviousProject
  let pathToNextProject
  let pathToCurrentProject
  let pathToPreviousProject
  /* eslint-enable */

  if (currentPathName === 'index') {
    indexOfPreviousProject = formatTitle.length - 1
    indexOfCurrentProject = 0
    indexOfNextProject = indexOfCurrentProject + 1
    pathToPreviousProject = formatTitle[indexOfPreviousProject]
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]
  } else if (indexOfCurrentProject === formatTitle.length - 1) {
    indexOfPreviousProject = indexOfCurrentProject - 1
    indexOfNextProject = 0
    // first project === path to home
    pathToNextProject = '/'
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToPreviousProject = formatTitle[indexOfPreviousProject]
  } else if (indexOfCurrentProject === 1) {
    indexOfNextProject = indexOfCurrentProject + 1
    pathToPreviousProject = '/'
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]
  } else {
    indexOfNextProject = indexOfCurrentProject + 1
    indexOfPreviousProject = indexOfCurrentProject - 1
    pathToPreviousProject = formatTitle[indexOfPreviousProject]
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]
  }

  /*
  **********
  * NEED REFACTORING WITH ACTION
  **********
  */

  store.state.pathToPreviousProject = pathToPreviousProject
  store.state.pathToCurrentProject = pathToCurrentProject
  store.state.pathToNextProject = pathToNextProject
  store.state.counterProject = indexOfCurrentProject
}
