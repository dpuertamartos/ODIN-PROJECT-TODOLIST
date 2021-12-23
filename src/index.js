import toDo from "./todo.js"
import project from "./projects.js"
import newProjectCard from "./newprojectCard"
import createNewToDoForm from "./newToDoForm.js"
import css from "./style.css"

let projects = []

const createDefaultProject = () => {
    const defaultProject = new project("All tasks")
    projects.push(defaultProject)
}

const createToDo = (projectSelectedTitle) => {
    const titleForm = document.querySelector("#titleForm")
    const descriptionForm = document.querySelector("#descriptionForm")
    const dateForm = document.querySelector("#dateForm")
    const importantCheck = document.querySelector("#checkPriority")
    const newToDo = new toDo(titleForm.value, descriptionForm.value,
        dateForm.value, importantCheck.checked)
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

const handleNewForm = (project) => {
    const newForm = createNewToDoForm(project)
    console.log(newForm)
    const formContainer = document.querySelector("#todoForm")
    formContainer.textContent = ""
    formContainer.append(newForm) 
    const submitButton = document.querySelector(".submitToDo")
    const cancelButton = document.querySelector(".cancelSubmit")
    submitButton.addEventListener("click", ()=>{
        createToDo(project.title)
        console.log("created To Do")
        refreshToDo()
        formContainer.textContent = ""
    })
    cancelButton.addEventListener("click", ()=>{
        formContainer.textContent = ""
    })
}

const handleRemove = (title, index) =>{
    const projectToRemoveFrom = projects.filter(project => project.title === title)[0].list
    projectToRemoveFrom.splice(index,1)
    refreshToDo()
}

// refresh all the projects
const refreshToDo = () => {
    const content = document.querySelector("#content")
    content.textContent = ""
    projects.map(project => {
        const newProject = document.createElement("div")
        newProject.className = "col-4"
        const newCard = newProjectCard(project)
        newProject.append(newCard)
        content.append(newProject)
    })
}

const createProjectB = document.querySelector(".createProject")

createProjectB.addEventListener("click", ()=>{
    const projectTitleForm = document.querySelector("#projectTitleForm")
    createProject(projectTitleForm.value)
    projectTitleForm.value = ""
    refreshToDo()
})

createDefaultProject()
refreshToDo()

export {handleNewForm, handleRemove}