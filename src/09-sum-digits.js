/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function kek(m) {
  let n = m;
  n = n.toString().split('');
  for (let i = 0; i < n.length; i++) {
    n[i] = Number(n[i]);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const summ = n.reduce(reducer);
  return summ;
}
function getSumOfDigits(n) {
  const m = n.toString().split('');
  for (let i = 0; i < m.length; i++) {
    m[i] = Number(m[i]);
  }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let summ = m.reduce(reducer);
  for (let j = 1; j < 100; j++) {
    if (summ > 9) {
      summ = kek(summ);
    } else {
      j = 100;
    }
  }
  return summ;
}

module.exports = getSumOfDigits;
