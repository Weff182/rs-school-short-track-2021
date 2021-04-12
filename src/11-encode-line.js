/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let a = str;
  a = a.split('');
  let m = 1;
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== a[i + 1]) {
      newArr.push(m);
      newArr.push(a[i]);
      m = 1;
    } else {
      m += 1;
    }
  }
  newArr = newArr.filter((el) => el !== 1).join('');
  return newArr;
}

module.exports = encodeLine;
