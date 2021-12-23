import toDo from "./todo.js"
import project from "./projects.js"
import newProjectCard from "./newprojectCard"
import css from "./style.css"

let toDoList = []
let projects = []

const createDefaultProject = () => {
    const defaultProject = new project("default")
    projects.push(defaultProject)
}

const createToDo = (projectSelectedTitle) => {
    const newToDo = new toDo(titleForm.value, descriptionForm.value,
        dateForm.value, importantCheck.checked)
    toDoList = toDoList.concat(newToDo)
    const defaultP = projects.filter(project => project.title === projectSelectedTitle)[0].list
    defaultP.push(newToDo)   
}

const createProject = (title) => {
    const newProject = new project(title)
    projects.push(newProject)
}

const restartCreateForm = () => {
    titleForm.value = ""
    descriptionForm.value = ""
    dateForm.value = ""
    importantCheck.checked = false
}

// refresh all the projects
const refreshToDo = () => {
    const content = document.querySelector("#content")
    content.textContent = ""
    projects.map(project => {
        const newProject = document.createElement("div")
        newProject.className = "col"
        const newCard = newProjectCard(project)
        newProject.append(newCard)
        content.append(newProject)
    })
}

// select all elements from the form and the button to use in the create
// and restart functions
/* const titleForm = document.querySelector("#titleForm")
const descriptionForm = document.querySelector("#descriptionForm")
const dateForm = document.querySelector("#dateForm")
const importantCheck = document.querySelector("#checkPriority")
const createButton = document.querySelector(".submitToDo") */
const createProjectB = document.querySelector(".createProject")

/* createButton.addEventListener("click", ()=>{
    createToDo()
    console.log("TOTAL TODOS", toDoList)
    console.log("PROJECTS", projects)
    restartCreateForm()
    refreshToDo()
}) */

createProjectB.addEventListener("click", ()=>{
    const projectTitleForm = document.querySelector("#projectTitleForm")
    createProject(projectTitleForm.value)
    projectTitleForm.value = ""
    refreshToDo()
})

createDefaultProject()
refreshToDo()