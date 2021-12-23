import toDo from "./todo.js"
import project from "./projects.js"
import css from "./style.css"

let toDoList = []
let projects = []

const createDefaultProject = () => {
    const defaultProject = new project("default")
    projects.push(defaultProject)
}

const createToDo = () => {
    const newToDo = new toDo(titleForm.value, descriptionForm.value,
        dateForm.value, importantCheck.checked)
    toDoList = toDoList.concat(newToDo)
    const defaultP = projects.filter(project => project.title === "default")[0].list
    defaultP.push(toDoList)   
}

const restartCreateForm = () => {
    titleForm.value = ""
    descriptionForm.value = ""
    dateForm.value = ""
    importantCheck.checked = false
}

const refreshToDo = () => {
    const content = document.querySelector("#content")
    content.textContent = ""
    toDoList.map(todo => {
        const newToDo = document.createElement("div")
        newToDo.className = "container"
        const titleDiv = document.createElement("div")
        titleDiv.textContent = todo.title
        const dateDiv = document.createElement("div")
        dateDiv.textContent = todo.dueDate
        newToDo.append(titleDiv, dateDiv)
        content.append(newToDo)
    })
}

// select all elements from the form and the button to use in the create
// and restart functions
const titleForm = document.querySelector("#titleForm")
const descriptionForm = document.querySelector("#descriptionForm")
const dateForm = document.querySelector("#dateForm")
const importantCheck = document.querySelector("#checkPriority")
const createButton = document.querySelector(".submitToDo")

createButton.addEventListener("click", ()=>{
    createToDo()
    console.log("TOTAL TODOS", toDoList)
    console.log("PROJECTS", projects)
    restartCreateForm()
    refreshToDo()
})

createDefaultProject()