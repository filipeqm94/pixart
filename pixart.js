//variables
const setColorBtn = document.querySelector("#set-color");
const color = document.querySelector("#color-field");
const brush = document.querySelector(".brush");

//functions
function setColor(event) {
  event.preventDefault();
  brush.style.backgroundColor = color.value;
}

//script

setColorBtn.addEventListener("click", setColor);

for (let i = 0; i < 8000; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = color.value;
  });

  document.body.appendChild(div);
}
