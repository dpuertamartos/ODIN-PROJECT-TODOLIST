{/* <div id="todoForm" class="container">
<div class="todoForm">
    <div class="mb-3">
      <label for="titleForm" class="form-label">Title</label>
      <input type="text" class="form-control" id="titleForm">
    </div>
    <div class="mb-3">
      <label for="descriptionForm" class="form-label">Description</label>
      <textarea class="form-control" id="descriptionForm" rows="3"></textarea>
    </div>
    <div class="mb-3">
        <label for="dateForm" class="form-label">Due date</label>
        <input type="date" class="form-control" id="dateForm">
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="checkPriority">
      <label class="form-check-label" for="checkPriority">High priority</label>
    </div>
    <button class="btn btn-primary submitToDo">Submit</button>
</div>
</div> */}

const createmb3 = () => {
    const newDiv = document.createElement("div")
    newDiv.className = "mb-3"
    return newDiv
}

const createToDoForm = (project) => {
    const form = document.createElement("div")
    form.className = "todoForm"
    const formTitle = createmb3()
    const title = document.createElement("h2")
    title.textContent = `Create TO DO for "${project.title}"`
    formTitle.append(title)
    const row1 = createmb3()
    const label1 = document.createElement("label")
    label1.className="form-label"
    label1.textContent="Title"
    const input1 = document.createElement("input")
    input1.setAttribute("type", "text")
    input1.setAttribute("id", "titleForm")
    input1.className="form-control"
    row1.append(label1,input1)
    const row2 = createmb3()
    const label2 = document.createElement("label")
    label2.className="form-label"
    label2.textContent="Description"
    const textarea2 = document.createElement("textarea")
    textarea2.setAttribute("rows", "3")
    textarea2.setAttribute("id", "descriptionForm")
    textarea2.className="form-control"
    row2.append(label2,textarea2)
    const row3 = createmb3()
    const label3 = document.createElement("label")
    label3.className="form-label"
    label3.textContent="Due Date"
    const input3 = document.createElement("input")
    input3.setAttribute("type", "date")
    input3.setAttribute("id", "dateForm")
    input3.className="form-control"
    row3.append(label3,input3)
    const row4 = createmb3()
    const label4 = document.createElement("label")
    label4.className="form-check-label"
    label4.textContent="High priority"
    const input4 = document.createElement("input")
    input4.setAttribute("type", "checkbox")
    input4.setAttribute("id", "checkPriority")
    input4.className="form-check-input"
    row4.append(input4, label4)
    const submitButton = document.createElement("button")
    submitButton.textContent = "Submit"
    submitButton.className = "btn btn-success submitToDo"
    const closeButton = document.createElement("button")
    closeButton.textContent = "Cancel"
    closeButton.className = "btn btn-dark cancelSubmit"

    form.append(formTitle,row1,row2,row3,row4,submitButton,closeButton)

    return form
}

export default createToDoForm