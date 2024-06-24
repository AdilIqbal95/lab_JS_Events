const toDoForm = document.querySelector("#todo-form");
const formData = document.querySelector("#new-todo");
const list = document.querySelector("#list");

// console.log(toDoForm);

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event);
    const newListItem = document.createElement("li");
    newListItem.innerText = event.target["new-todo"].value;
    list.appendChild(newListItem);
})





const createListElement = () => {

}