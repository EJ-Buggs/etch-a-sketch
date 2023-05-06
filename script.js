const grid = document.querySelector(".grid");
let size = 256;
let isDragging = false;

for (let i = 0; i < size; i++) {
  const square = document.createElement("div");
  square.style.width = "100%";
  square.style.height = "100%";
  square.style.backgroundColor = "white";

  document.addEventListener("mousedown", function () {
    isDragging = true;
  });

  square.addEventListener("mousemove", function () {
    isDragging ? (square.style.backgroundColor = "black") : null;
  });

  square.addEventListener("click", function () {
    square.style.backgroundColor = "black";
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
  });

  grid.appendChild(square);
}

grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(16, 1fr)";
grid.style.gridTemplateRows = "repeat(16, 1fr)";
