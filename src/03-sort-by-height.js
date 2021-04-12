/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function compareNumbers(a, b) {
  return a - b;
}

function sortByHeight(arr) {
  if (arr.indexOf(-1) === -1) {
    return arr.sort(compareNumbers);
  }
  let myArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      myArr.push(arr[i]);
    }
  }
  myArr = myArr.sort(compareNumbers);
  const finishArr = [];
  let cm = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      finishArr.push(arr[j]);
    } else {
      finishArr.push(myArr[cm]);
      cm += 1;
    }
  }
  return finishArr;
}

module.exports = sortByHeight;
