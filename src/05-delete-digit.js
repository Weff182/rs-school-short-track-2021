/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let finishNumb = 0;
  let newArr = n.toString().split('');
  for (let i = 0; i < n.toString().length; i++) {
    newArr = n.toString().split('');
    newArr.splice(i, 1);
    let value = newArr.join('');
    value = Number(value);
    if (i === 0 || finishNumb < value) {
      finishNumb = value;
    }
  }
  return finishNumb;
}

module.exports = deleteDigit;
