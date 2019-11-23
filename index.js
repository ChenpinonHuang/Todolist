//define the variable
var oButton = document.getElementById('button');
var oShowbox = document.getElementById('showbox');
var i = 1; //set the id index

oButton.addEventListener("click",addName,false);


//function
function addName(){
  var oLi = document.createElement("li");
  var myInput =document.getElementById("input").value;
  var newTag = '<input type="checkbox" id=' + i + '>' + myInput +
              '<button class="RemoveButton">Delete</button>';
  oLi.appendChild(newTag);
  oShowbox.appendChild(oLi);
}

//error
function changeStyle(e) {
  alert("1");
  oShowbox.appendChild(e.target);
  //object.setAttribute("text-decoration","line-through");
}
