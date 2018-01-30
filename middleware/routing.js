export default function ({ route, store }) {
  const ProjectTitle = store.state.projectTitle

  let formatTitle = []

  for (let i = 0; i < ProjectTitle.length; i++) {
    formatTitle.push(ProjectTitle[i].replace(/\s+/g, ''))
  }

  const currentPathName = route.name ? route.name : formatTitle[0]

  let indexOfCurrentProject = formatTitle.indexOf(currentPathName)

  let pathToSecondNextProject
  let pathToNextProject
  let pathToCurrentProject
  let pathToPreviousProject

  let currentProjectTitle

  pathToPreviousProject = formatTitle[indexOfCurrentProject - 1] || formatTitle[formatTitle.length - 1]
  pathToCurrentProject = formatTitle[indexOfCurrentProject]
  pathToNextProject = formatTitle[indexOfCurrentProject + 1] || formatTitle[0]
  pathToSecondNextProject = formatTitle[indexOfCurrentProject + 2] || formatTitle[0]

  currentProjectTitle = ProjectTitle[indexOfCurrentProject]

  /*
  **********
  * NEED REFACTORING WITH ACTION
  **********
  */

  store.state.pathToPreviousProject = pathToPreviousProject
  store.state.pathToCurrentProject = pathToCurrentProject
  store.state.pathToNextProject = pathToNextProject
  store.state.pathToSecondNextProject = pathToSecondNextProject

  store.state.counterProject = indexOfCurrentProject

  currentProjectTitle = currentProjectTitle.toUpperCase()

  store.state.currentProjectTitle = currentProjectTitle
}
