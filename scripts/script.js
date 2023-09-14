const measuresDiv = document.querySelector('.measures');
const heightP = document.querySelector('.height');
const widthP = document.querySelector('.width');
const cellSizeP = document.querySelector('.cell-size');
const cellCountP = document.querySelector('.cell-count');
const resetBtn = document.getElementById('reset');

const grid = document.querySelector('.grid');
const cell = document.querySelector('.cell');

let gHeight;
let gWidth;
let cellSize = 20;
let cellQty;

window.addEventListener('load', loadGrid);
window.addEventListener('resize', loadGrid);
resetBtn.addEventListener('click', resetGrid);

function loadGrid() {
  getMeasures();
  let cellQty = Math.floor(gHeight/cellSize) * Math.floor(gWidth/cellSize);
  if (grid.hasChildNodes()) {
    cellQty -= getCellCount();
  }
  if (cellQty > 0) {
    addCells(cellQty);
  } else {
    removeCells(cellQty);
  }
  updateMeasures();

  // Center vertically by making the top and bottom margins equal.
  grid.style.marginTop = `${(gHeight - grid.offsetHeight) / 2}px`;

}

function getMeasures() {
  gHeight = window.innerHeight - measuresDiv.offsetHeight;
  gWidth = window.innerWidth;
}

function getCellCount() {
  return grid.children.length;
}

function addCells(cellQty) {
  for (let i = 0; i < cellQty; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    cell.style.backgroundColor = `rgb(255, 255, 255)`;
    cell.addEventListener('mouseover', (event) => {
      colorCell(event.target);
    });
    grid.appendChild(cell);
  }
}

function removeCells(cellQty) {
  for (let i = 0; i < (cellQty * -1); i++) {
    grid.removeChild(grid.lastChild);
  }
}

function updateMeasures () {
  heightP.textContent = `Grid Height = ${gHeight}px`;
  widthP.textContent = `Grid Width = ${gWidth}px`;
  cellSizeP.textContent = `Cell Size = ${cellSize}px`;
  cellCountP.textContent = `Cell Count = ${getCellCount()}`
}

function resetGrid() {
  unloadGrid();
  loadGrid();
}

function unloadGrid() {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }
}

function colorCell(cell) {
  console.log(cell.style.backgroundColor.green);
  // cell.style.backgroundColor = `rgb(155, 102, 102)`;
}