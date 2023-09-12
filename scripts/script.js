const grid = document.querySelector('.grid');
const runBtn = document.getElementById('run-btn');

runBtn.addEventListener('click', (event) => {
  console.log(`Height: ${window.innerHeight}`);
  console.log(`Width: ${window.innerWidth}`);
});