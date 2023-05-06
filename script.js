const grid = document.querySelector(".grid");
const border = document.querySelector(".border");
const colorPicker = document.querySelector("#colorPicker");
const eraser = document.querySelector(".eraser");
const clear = document.querySelector(".clear");
const lines = document.querySelector(".lines");
const inputBox = document.querySelector("#inputBox");
const size = document.querySelector("#size");
let value = 32;
let isDragging = false;
let color = "black";

const setGrid = function () {
  grid.innerHTML = "";

  for (let i = 0; i < value * value; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${value}, 1fr)`;

    square.addEventListener("mousedown", () => (isDragging = true));
    square.addEventListener("mousemove", () =>
      isDragging ? (square.style.backgroundColor = color) : null
    );
    square.addEventListener(
      "click",
      () => (square.style.backgroundColor = color)
    );
    document.addEventListener("mouseup", () => (isDragging = false));

    grid.appendChild(square);
  }
};
setGrid();

lines.addEventListener("click", function () {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => square.classList.toggle("border"));
});

eraser.addEventListener("click", () => (color = "white"));
colorPicker.addEventListener("input", function () {
  const newColor = colorPicker.value;
  color = newColor;
});
clear.addEventListener("click", setGrid);

size.addEventListener("click", function () {
  if (inputBox.value > 100) {
    value = 100;
  } else if (inputBox.value < 1) {
    inputBox.value = 1;
  } else {
    value = inputBox.value;
  }
  setGrid();
});
