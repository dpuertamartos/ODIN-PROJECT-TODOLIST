import toDo from "./todo.js"
import css from "./style.css"

let toDoList = []

const titleForm = document.querySelector("#titleForm")
const descriptionForm = document.querySelector("#descriptionForm")
const dateForm = document.querySelector("#dateForm")
const importantCheck = document.querySelector("#checkPriority")
const createButton = document.querySelector(".submitToDo")

const restartCreateForm = () => {
    titleForm.value = ""
    descriptionForm.value = ""
    dateForm.value = ""
    importantCheck.checked = false
}

createButton.addEventListener("click", ()=>{
    const newToDo = new toDo(titleForm.value, descriptionForm.value,
        dateForm.value, importantCheck.checked)
    toDoList = toDoList.concat(newToDo)
    console.log(toDoList)
    restartCreateForm()
})