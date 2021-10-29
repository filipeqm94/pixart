//variables
const setColorBtn = document.querySelector("#set-color");
const color = document.querySelector("#color-field");
const brushes = document.querySelectorAll(".brushes");

let colorSave = "";

//functions
function setColor(event) {
  event.preventDefault();

  /* BONUS */
  let tempColor = brushes[0].style.backgroundColor;
  brushes[0].style.backgroundColor = color.value;
  brushes[2].style.backgroundColor = brushes[1].style.backgroundColor;
  brushes[1].style.backgroundColor = tempColor;

  colorSave = color.value;
  color.value = "";
}

//script

setColorBtn.addEventListener("click", setColor);

for (let i = 0; i < 8000; i++) {
  const div = document.createElement("div");
  div.classList.add("square");

  div.addEventListener("mouseover", () => {
    div.style.backgroundColor = colorSave;
  });

  document.body.appendChild(div);
}
