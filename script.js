const grid = document.querySelector(".grid");
let size = 10;
let isDragging = false;

for (let i = 0; i < size; i++) {
  const square = document.createElement("div");
  square.style.width = "50px";
  square.style.height = "50px";
  square.style.backgroundColor = "red";

  document.addEventListener("mousedown", function () {
    isDragging = true;
  });

  square.addEventListener("mousemove", function () {
    isDragging ? (square.style.backgroundColor = "blue") : null;
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  grid.appendChild(square);
}
