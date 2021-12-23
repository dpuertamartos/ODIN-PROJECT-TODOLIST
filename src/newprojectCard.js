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
        listItem.textContent = project.list[i].title
        listGroup.append(listItem)
    }
    card.append(listGroup)
    return card
}

export default createCard