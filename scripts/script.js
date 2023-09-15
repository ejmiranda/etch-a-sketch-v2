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

  // Center vertically by making the top and bottom margins equal.
  grid.style.marginTop = `${(gHeight - grid.offsetHeight) / 2}px`;

  updateMeasures();
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
    cell.style.backgroundColor = 'rgb(255, 255, 255)';
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
  // grid.style.marginTop comes in this format: '9px';
  let marginTop = +grid.style.marginTop.slice(0, grid.style.marginTop.length - 2);
  heightP.textContent = `Grid Height = ${gHeight - (marginTop * 2)}px`;
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
  let RGBString;
  let RGBArray = getRGBArrayFromString(cell.style.backgroundColor);
  if (RGBArray[0] === 0 && RGBArray[1] === 0 && RGBArray[2] === 0) {
    return;
  } else if (RGBArray[0] === 255 && RGBArray[1] === 255 && RGBArray[2] === 255) {
    let red = getRandomIntInclusive(0, 254);
    let green = getRandomIntInclusive(0, 254);
    let blue = getRandomIntInclusive(0, 254);
    RGBString = `rgb(${red}, ${green}, ${blue})`; 
  } else {
    RGBString = `rgb(${RGBArray[0]-25.50}, ${RGBArray[1]-25.50}, ${RGBArray[2]-25.50})`; 
  }
  cell.style.backgroundColor = RGBString;
}

function getRGBArrayFromString(RGBstring) {
  let RGBStringArray = RGBstring.slice(4, RGBstring.length - 1).split(", ");
  return RGBStringArray.map(Number); 
}

// From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min); 
}