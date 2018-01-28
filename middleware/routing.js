export default function ({ route, store }) {
  const ProjectTitle = store.state.projectTitle
  const currentPathName = route.name

  let formatTitle = []

  for (let i = 0; i < ProjectTitle.length; i++) {
    formatTitle.push(ProjectTitle[i].replace(/\s+/g, ''))
  }

  let indexOfCurrentProject = formatTitle.indexOf(currentPathName)
  let indexOfNextProject
  let indexOfPreviousProject

  let pathToNextProject
  let pathToCurrentProject
  let pathToPreviousProject

  let currentProjectTitle

  const ifPageIndex = currentPathName === 'index'
  const ifLastProject = indexOfCurrentProject === formatTitle.length - 1
  const ifSecondProject = indexOfCurrentProject === 1

  if (ifPageIndex) {
    indexOfPreviousProject = formatTitle.length - 1
    indexOfCurrentProject = 0
    indexOfNextProject = indexOfCurrentProject + 1

    pathToPreviousProject = formatTitle[indexOfPreviousProject]
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]

    currentProjectTitle = ProjectTitle[indexOfCurrentProject]
  } else if (ifLastProject) {
    indexOfPreviousProject = indexOfCurrentProject - 1
    indexOfNextProject = 0

    // first project === path to home
    pathToNextProject = '/'
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToPreviousProject = formatTitle[indexOfPreviousProject]

    currentProjectTitle = ProjectTitle[indexOfCurrentProject]
  } else if (ifSecondProject) {
    indexOfNextProject = indexOfCurrentProject + 1

    pathToPreviousProject = '/'
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]

    currentProjectTitle = ProjectTitle[indexOfCurrentProject]
  } else {
    indexOfNextProject = indexOfCurrentProject + 1
    indexOfPreviousProject = indexOfCurrentProject - 1

    pathToPreviousProject = formatTitle[indexOfPreviousProject]
    pathToCurrentProject = formatTitle[indexOfCurrentProject]
    pathToNextProject = formatTitle[indexOfNextProject]

    currentProjectTitle = ProjectTitle[indexOfCurrentProject]
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

  store.state.currentProjectTitle = currentProjectTitle.toUpperCase()
}
