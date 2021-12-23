import createNewToDoForm from "./newToDoForm.js"

const createCard = (project) => {
    const card = document.createElement("div")
    card.className = "card"
    card.setAttribute("style", "width: 18rem;")
    const header = document.createElement("div")
    header.className = "card-header"
    header.textContent = project.title
    card.append(header)
    const listGroup = document.createElement("ul")
    listGroup.className = "list-group list-group-flush"
    for(let i=0;i<project.list.length;i++){
        const listItem = document.createElement("li")
        listItem.className = "list-group-item"
        const listTitle = document.createElement("div")
        listTitle.className = "toDoTitle"
        listTitle.textContent = project.list[i].title
        const listDate = document.createElement("div")
        listDate.textContent = "Do it Before: (" + project.list[i].dueDate + ")"
        listDate.className = "dueDate"
        listItem.append(listTitle,listDate)
        listGroup.append(listItem)
    }
    card.append(listGroup)
    const cardBody = document.createElement("div")
    cardBody.className = "card-body"
    const addToDoButton = document.createElement("button")
    addToDoButton.className = "btn btn-primary"
    addToDoButton.textContent = 'Add new'
    addToDoButton.addEventListener("click", ()=>{
        const newForm = createNewToDoForm(project)
        console.log(newForm)
        const formContainer = document.querySelector("#todoForm")
        formContainer.textContent = ""
        formContainer.append(newForm)
    })

    cardBody.append(addToDoButton)
    card.append(cardBody)

    return card
}

export default createCard