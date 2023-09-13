const measuresDiv = document.querySelector('.measures');
const heightP = document.querySelector('.height');
const widthP = document.querySelector('.width');
const cellSizeP = document.querySelector('.cell-size');
const cellCountP = document.querySelector('.cell-count');
const drawBtn = document.getElementById('draw');

const grid = document.querySelector('.grid');
const cell = document.querySelector('.cell');

let gHeight;
let gWidth;
let cellSize = 30;

window.addEventListener('load', updateMeasures);
window.addEventListener('resize', updateMeasures);
drawBtn.addEventListener('click', fillGrid);

function updateMeasures () {
  gHeight = window.innerHeight - measuresDiv.offsetHeight;
  gWidth = window.innerWidth;
  heightP.textContent = `Grid Height = ${gHeight}px`;
  widthP.textContent = `Grid Width = ${gWidth}px`;
  cellSizeP.textContent = `Cell Size = ${cellSize}px`;
}

function fillGrid() {
  let cellQty = (gHeight/cellSize) * (gWidth/cellSize);
  for (let i = 0; i < cellQty; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.style.height = `${cellSize}px`;
    cell.style.width = `${cellSize}px`;
    grid.appendChild(cell);
    cellCountP.textContent = `Cell Count = ${getCellCount()}`;
  }
}

function getCellCount() {
  return grid.children.length;
}

function clearGrid() {
   
}