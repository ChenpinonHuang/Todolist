//get the element from the html document and set them in variables
let incompleteList = document.getElementById("incompletedBox");
let completedTasks = document.getElementById("completedBox");

function playSound() {
    let sound = document.getElementById("sound");
    sound.play();
}

//Create a function for add new event
let addNewLiTag = function (taskItem) {
    playSound();
    //Create new li tag
    let listItem = document.createElement("li");
    //Create new checkbox input
    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    //Create new label
    let label = document.createElement("label");
    //Create delete button
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    //set the text information to the lable
    label.innerText = taskItem;
    //Add new task in html document
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(deleteButton);
    return listItem;
}

//add new to-do event to the list
let addEvent = function () {
    //get inputBox element
    let input = document.getElementById("inputBox");
    //get the add new event button from html document
    let addButton = document.getElementById("addButton");
    //Create a new list item with the text from the inputBox:
    let listItem = addNewLiTag(input.value);
    if (input.value === "") {
        alert("Can not add null event to the list!");
    } else {
        //Add listItem to incompleted
        incompleteList.appendChild(listItem);
        eventsChecking(listItem, completeEvent);
    }
}

//add addEvent function to the addEventListener
addButton.addEventListener("click", addEvent);

//Delete the specific item
let deleteItem = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

//when checkbox is uncheck, add the item to completedBox
let completeEvent = function () {
    //get the on-change li element
    let listItem = this.parentNode;
    //set that li element to the completedBox
    completedTasks.appendChild(listItem);
    eventsChecking(listItem, incompleteEvent);
}

//when checkbox is uncheck, add the item to incompletedBox
let incompleteEvent = function () {
    let listItem = this.parentNode;
    incompleteList.appendChild(listItem);
    eventsChecking(listItem, completeEvent);
}

//according to the condition, choose delete, incompleteEvent or completeEvent function
let eventsChecking = function (listItem, checkBoxHandler) {
    //Get the checkBox item
    let checkBox = listItem.querySelector("input[type=checkbox]");
    let deleteButton = listItem.querySelector("button.delete");
    //add delete function to delete button.
    deleteButton.onclick = deleteItem;
    //add completeEvent or incompleteEvent function to checkBoxHandler.
    checkBox.onchange = checkBoxHandler;
}

//loop through each item in incompletedBox ul list items to check if check there is any checkbox is checked
let loopTheList = function(){
  for (let i = 0; i < incompleteList.children.length; i++) {
      eventsChecking(incompleteList.children[i], completeEvent);
  }
}

loopTheList();
