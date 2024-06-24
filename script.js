const toDoForm = document.querySelector("#todo-form");
const formData = document.querySelector("#new-todo");
const list = document.querySelector("#list");


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
    
})

// const deleteButton = document.querySelector(".Delete-button");
// deleteButton.addEventListener("click", () =>{
//     console.log("button clicked");
// })

window.addEventListener("DOMContentLoaded", (event) =>{
    const deleteButton = document.querySelector(".Delete-button");
    if (deleteButton){
        deleteButton.addEventListener("click", () =>{
                console.log("button clicked");
            })
    }else {
        console.log("Not Working.")
    }

})