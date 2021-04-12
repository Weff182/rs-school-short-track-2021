/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const newArr = new Array(3);
  for (let i = 0; i < newArr.length; i++) {
    if (i === 0 || i === 1 || i === 2) {
      newArr[i] = new Array(3);
    }
  }
  let num = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      num = 0;
      if (i > 0 && matrix[i - 1][j] === true) {
        num++;
      }
      if (i > 0 && j > 0 && matrix[i - 1][j - 1] === true) {
        num++;
      }
      if (j > 0 && matrix[i][j - 1] === true) {
        num++;
      }
      if (i < matrix.length - 1 && matrix[i + 1][j] === true) {
        num++;
      }
      if (i < matrix.length - 1 && j < matrix[0].length - 1 && matrix[i + 1][j + 1] === true) {
        num++;
      }
      if (j < matrix[0].length - 1 && matrix[i][j + 1] === true) {
        num++;
      }
      if (i < matrix.length - 1 && j > 0 && matrix[i + 1][j - 1] === true) {
        num++;
      }
      if (j < matrix.length - 1 && i > 0 && matrix[i - 1][j + 1] === true) {
        num++;
      }
      newArr[i][j] = num;
    }
  }
  return newArr;
}

module.exports = minesweeper;
