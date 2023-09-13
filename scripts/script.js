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
let cellSize = 30;
let cellQty;

window.addEventListener('load', loadGrid);
window.addEventListener('resize', loadGrid);
resetBtn.addEventListener('click', unloadGrid);

function loadGrid() {
  getMeasures();
  let cellQty = (gHeight/cellSize) * (gWidth/cellSize);
  if (grid.hasChildNodes()) {
    cellQty -= getCellCount();
  }
  for (let i = 0; i < cellQty; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    grid.appendChild(cell);
  }
  updateMeasures();
}

function getMeasures() {
  gHeight = window.innerHeight - measuresDiv.offsetHeight;
  gWidth = window.innerWidth;
}

function updateMeasures () {
  getMeasures();
  heightP.textContent = `Grid Height = ${gHeight}px`;
  widthP.textContent = `Grid Width = ${gWidth}px`;
  cellSizeP.textContent = `Cell Size = ${cellSize}px`;
  cellCountP.textContent = `Cell Count = ${getCellCount()}`
}

function getCellCount() {
  return grid.children.length;
}

function unloadGrid() {
  while (grid.hasChildNodes()) {
    grid.removeChild(grid.firstChild);
  }  
  updateMeasures();
}