function ToDo(title, description, dueDate, priority, notes=""){
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.notes = notes
    this.checked = false

    this.changeCheck = () => {
        this.checked = !this.checked   
    }
}

export default ToDo;