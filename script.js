const toDoForm = document.querySelector("#todo-form");
const formData = document.querySelector("#new-todo");
const list = document.querySelector("#list");
const showDate = document.querySelector("#show-date-btn");
const dateDiv = document.querySelector("#date-div");
const completedList = document.querySelector("#completed")

toDoForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newListItem = document.createElement("li");
    
    const newButton = document.createElement("button");
    newButton.setAttribute("Class","Delete-button");
    newButton.innerText = "Delete";

    const completeButton = document.createElement("button");
    completeButton.setAttribute("Class","Complete-button");
    completeButton.innerText = "Completed";
    
    newListItem.innerText = event.target["new-todo"].value;
    list.appendChild(newListItem);
    newListItem.appendChild(newButton);
    newListItem.appendChild(completeButton);
    console.log(event);
    newButton.addEventListener("click", () =>{
        removeElement(newListItem);
    })
    console.log(event.node)
    const completedListItem = document.createElement("li");
    completeButton.addEventListener("click", () => {
        // Change colour to grey
            
        // Move item to new list
        completedListItem.innerText = event.target["new-todo"].value
        completedList.appendChild(completedListItem);

    })


})

const deleteButtonFunction = (newButton) => {

}

const removeElement = (element) => {
    element.remove()
}

const markAsComplete = () => {

}

showDate.addEventListener("click", (event) => {
    const newParagraph = document.createElement("p");
    const date = new Date();
    newParagraph.innerText= date;
    dateDiv.appendChild(newParagraph);
    console.log(newParagraph);
})





