/**
 * Write a file docstring here
 Node.js program that calculates how many coins pacman collects based on an input file
 containing initial parameters of grid size, starting position, cartesian movement
 string, and a list of walls
 * Author: Yin Song
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
const fs = require('fs');
const { initialize, createGrid, traverse } = require('./utility');
/**
 *
 * @param {String} inputFile
 * @return {}
 */
function pacman(inputFile) {
  //create initial variables
  const [gridDims, startPos, movement, walls] = initialize(inputFile);
  console.log(gridDims, startPos, movement, walls);

  const grid = createGrid(gridDims, walls);
  console.log(grid);
  const [finalXPos, finalYPos, coinsCollected] = traverse(
    grid,
    startPos,
    movement
  );
  return [finalXPos, finalYPos, coinsCollected];
}
console.log(pacman('simple.txt'));
//console.log(pacman('edge.txt'));

module.exports.pacman = pacman;
