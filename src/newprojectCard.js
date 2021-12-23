import {handleNewForm, handleRemove} from "./index.js"
import checked from "./checked.png"
import unchecked from "./unchecked.png"
import removeImage from "./remove.png"

const createCard = (project) => {
    const card = document.createElement("div")
    card.className = "card"
    card.setAttribute("style", "width: 100%;")
    const header = document.createElement("div")
    header.className = "card-header"
    header.textContent = project.title
    card.append(header)
    const listGroup = document.createElement("ul")
    listGroup.className = "list-group list-group-flush"
    for(let i=0;i<project.list.length;i++){
        const listItem = document.createElement("li")
        listItem.className = "list-group-item container"
        const listItemSub = document.createElement("div")
        listItemSub.className="row"
        const listItemRight = document.createElement("div")
        listItemRight.className = "col-2"
        const listItemLeft = document.createElement("div")
        listItemLeft.className = "col-10"
        const listTitle = document.createElement("div")
        listTitle.className = "toDoTitle"
        listTitle.textContent = project.list[i].title
        const listDate = document.createElement("div")
        listDate.textContent = "Do it Before: (" + project.list[i].dueDate + ")"
        listDate.className = "dueDate"
        const checkBox = new Image()
        if(project.list[i].checked===true){
            checkBox.src=checked
        }
        else{
            checkBox.src=unchecked
        }
        checkBox.className = "img-fluid"
        checkBox.addEventListener("click", ()=>{
            project.list[i].checked=!project.list[i].checked
            if(checkBox.src===checked){
                checkBox.src=unchecked
            }
            else{
                checkBox.src=checked
            }
        })

        listItemLeft.addEventListener("click", ()=>{
            console.log("expand")
            const expanded = listItemLeft.querySelector(".expanded")
            if(expanded===null){
                const listExpanded = document.createElement("div")
                listExpanded.className = "expanded"
                const listDescription = document.createElement("p")
                listDescription.textContent = "Description: " + project.list[i].description
                const removeButtonImage = new Image()
                removeButtonImage.src=removeImage 
                removeButtonImage.className="img-fluid"
                const removeButton = document.createElement("div")
                const removeButtonText = document.createElement("span")
                removeButtonText.textContent = "Remove"
                removeButton.append(removeButtonImage, removeButtonText)
                removeButton.addEventListener("click", () => {
                    handleRemove(project.title, i)
                })
                listExpanded.append(listDescription, removeButton)
                listItemLeft.append(listExpanded)
            }
            else{
                listItemLeft.removeChild(expanded)
            }
        })
        listItemRight.append(checkBox)
        listItemLeft.append(listTitle,listDate)
        listItemSub.append(listItemLeft, listItemRight)
        listItem.append(listItemSub)
        listGroup.append(listItem)
    }
    card.append(listGroup)
    const cardBody = document.createElement("div")
    cardBody.className = "card-body"
    const addToDoButton = document.createElement("button")
    addToDoButton.className = "btn btn-primary"
    addToDoButton.textContent = 'Add new'
    addToDoButton.addEventListener("click", ()=>{
        handleNewForm(project)
    })

    cardBody.append(addToDoButton)
    card.append(cardBody)

    return card
}

export default createCard