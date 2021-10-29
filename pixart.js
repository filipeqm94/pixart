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

for (let i = 0; i < 20; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  div.addEventListener("click", () => {
    div.style.backgroundColor = "green";
  });

  document.body.appendChild(div);
}
