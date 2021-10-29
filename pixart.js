//variables
const setColorBtn = document.querySelector("#set-color");
const color = document.querySelector("#color-field");
const brush = document.querySelector(".brush");

//functions
function setColor(event) {
  event.preventDefault();
  brush.style.backgroundColor = color.value;
  color.value = "";
}

//script

setColorBtn.addEventListener("click", setColor);
