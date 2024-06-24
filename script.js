const toDoForm = document.querySelector("#todo-form");
const formData = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const showDate = document.querySelector("#show-date-btn");
const dateDiv = document.querySelector("#date-div");

// console.log(toDoForm);

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const newListItem = document.createElement("li");
    const newButton = document.createElement("button");
    newButton.setAttribute("Class","Delete-button");
    newButton.innerText = "Delete";
    newListItem.innerText = event.target["new-todo"].value;
    list.appendChild(newListItem);
    newListItem.appendChild(newButton);
    newButton.addEventListener("click", (event) =>{
        
    })
})


showDate.addEventListener("click", (event) => {
    const newParagraph = document.createElement("p");
    const date = new Date();
    newParagraph.innerText= date;
    dateDiv.appendChild(newParagraph);
    console.log(newParagraph);
})



