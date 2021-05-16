const fs = require('fs');

//the function initialize reads the input file and
//returns array initial variables for the Grid, the start Position
//the movement and wall locations where the values are integers
function initialize(inputFile) {
  const initializeData = fs.readFileSync(inputFile, 'utf8');
  let initDataArray = initializeData.trim().split('\r\n');
  const gridDims = initDataArray[0].split(' ').map((elem) => parseInt(elem));
  const startPos = initDataArray[1].split(' ').map((elem) => parseInt(elem));
  const movement = initDataArray[2];
  const walls = new Map();
  initDataArray.slice(3).forEach((elem) => walls.set(elem, true));
  return [gridDims, startPos, movement, walls];
}

//based on the grid dimensions and walls, create a grid populated with 1
//for coins and x for walls.
function createGrid(gridDims, walls) {
  let grid = [];
  //since we will only be using .push we have to build
  //this grid backwards starting with the last row
  for (let y = gridDims[1] - 1; y >= 0; y--) {
    let row = [];
    for (let x = 0; x < gridDims[0]; x++) {
      if (walls.has(`${x} ${y}`)) {
        row.push('x');
      } else {
        row.push(1);
      }
    }
    grid.push(row);
  }
  return grid;
}

function traverse(grid, startPos, movement) {}

module.exports = { initialize, createGrid, traverse };
