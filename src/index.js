import toDo from "./todo.js"
import css from "./style.css"

let toDoList = []
const first = new toDo("title1", "description1", "15/10/2022", "high")
toDoList.push(first)

const createButton = document.querySelector(".submitToDo")
const titleForm = document.querySelector("#titleForm")
const descriptionForm = document.querySelector("#descriptionForm")
createButton.addEventListener("click", ()=>{
    titleForm.value = "probando"
    console.log("hola")

})