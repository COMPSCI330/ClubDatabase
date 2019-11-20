var nameinput = document.getElementById("name");
var titles = [];
var titleInput = document.getElementById("title");
var messageBox = document.getElementById("display");

function insert() {
  if (nameinput.value){
  titles.push(nameinput.value + ": ");
  titles.push(titleInput.value + "<br>");
  clearAndShow();
}
else{
  titles.push(titleInput.value + "<br>");
  clearAndShow();
}}

function clearAndShow() {
  titleInput.value = "";
  nameinput.value = "";
  messageBox.innerHTML = ""
  messageBox.innerHTML += " " + titles.join(" ");
}
