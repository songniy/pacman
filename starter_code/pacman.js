const fs = require('fs');
const { initialize, createGrid, traverse } = require('./utility');
/**
 * Write a file docstring here
 *
 * Author: Your Name
 */

/**
 * Use the function below to format your input/output arguments. Be sure not change the order of the elements in the output array.
 * Remember that code organization is very important to us, so we encourage the use of helper fuctions/separate files as you see fit.
 * Input:
 *      1. inputFile (String) = contains the name of a text file you need to read that is in the same directory, includes the ".txt" extension
 *         (ie. "input.txt")
 * Output:
 *      1. array containing the final x position of Pacman, final y position of Pacman, and total number of
 *         coins collected in that order (ie. [finalXPos, finalYPos, coinsCollected])
 */
function pacman(inputFile) {
  //create initial variables
  const [gridDims, startPos, movement, walls] = initialize(inputFile);
  console.log(gridDims, startPos, movement, walls);
  let finalXPos = -1;
  let finalYPos = -1;
  let coinsCollected = 0;

  //edge case where we do not have a valid starting position or it is outside
  //the grid
  if (gridDims.length !== 2 || startPos.length !== 2) {
    return [finalXPos, finalYPos, coinsCollected];
  } else if (startPos[1] > gridDims[1] || startPos[0] > gridDims[0]) {
    return [finalXPos, finalYPos, coinsCollected];
  }

  const grid = createGrid(gridDims, walls);

  //return [finalXPos, finalYPos, coinsCollected];
}
console.log(pacman('simple.txt'));
//console.log(pacman('edge.txt'));

module.exports.pacman = pacman;
