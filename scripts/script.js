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
let cellSize;

window.addEventListener('load', updateMeasures);
window.addEventListener('resize', updateMeasures);

function updateMeasures () {
  gHeight = window.innerHeight - measuresDiv.offsetHeight;
  gWidth = window.innerWidth;
  cellSize = Math.max(gHeight, gWidth)/100;
  heightP.textContent = `Grid Height = ${gHeight}px`;
  widthP.textContent = `Grid Width = ${gWidth}px`;
  cellSizeP.textContent = `Cell Size = ${cellSize}px`;
}

function getCellCount() {
  return grid.children.length;
}

drawBtn.addEventListener('click', (event) => {
  let cell = document.createElement('div');
  cell.classList.add('cell');
  cell.style.height = '10px';
  cell.style.width = '10px';
  grid.appendChild(cell);
  console.log(getCellCount());
  cellCountP.textContent = `Cell Count = ${getCellCount()}`;
});