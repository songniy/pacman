/* this file houses all the helper functions to use for pacman.js
Author: Yin Song*/

const fs = require('fs');

/**
 *
 * @param {String} inputFile
 * @returns {array} containing initial variables broken out of the input file
 */
function initialize(inputFile) {
  /*the function reads the input file and
  returns an array of initial variables for the Grid, the start Position
  the movement and wall locations where the values are integers*/
  const initializeData = fs.readFileSync(inputFile, 'utf8');
  let initDataArray = initializeData.trim().split('\r\n');
  const gridDims = initDataArray[0].split(' ').map((elem) => parseInt(elem));
  const startPos = initDataArray[1].split(' ').map((elem) => parseInt(elem));
  const movement = initDataArray[2];
  const walls = new Map();
  initDataArray.slice(3).forEach((elem) => walls.set(elem, true));
  return [gridDims, startPos, movement, walls];
}

/**
 *
 * @param {Array} gridDims should have length 2. Possible future add to check for data validity
 * @param {Map} walls we only add walls if the walls appear in the grid
 * @returns {Array} 2d array where 1's are coins and 'x' are walls
 */
function createGrid(gridDims, walls) {
  /*the function returns a matrix based on the grid dimensions and walls.
   where 1's are for coins and 'x' are for walls.*/
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

/**
 *
 * @param {Array} grid the initial grid for pacman to traverse
 * @param {Array} startPos the start position in x,y coordinates
 * @param {String} movement the String defining how pacman moves
 */
function traverse(grid, startPos, movement) {
  /* The function traverse the grid based on the start position and movement.
  It returns the final position and the total coins collected */
  let xPos = -1;
  let yPos = -1;
  let coins = 0;
  let initialX = startPos[0];
  let initialY = grid.length - 1 - startPos[1];
  let initialPos = grid[initialY][initialX];

  //edge case if we start in a wall
  if (initialPos === 'x') {
    return [xPos, yPos, coins];
  } else {
  }
}

module.exports = { initialize, createGrid, traverse };
