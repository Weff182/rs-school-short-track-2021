/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = [];
  const n = 1;
  for (let i = 0; i < names.length; i++) {
    if (newArr.indexOf(names[i]) === -1) {
      newArr.push(names[i]);
    } else {
      let m = `${names[i]}(${n})`;
      for (let j = 1; j < 100; j++) {
        if (newArr.indexOf(m) === -1) {
          newArr.push(m);
          j = 100;
        } else {
          m = `${names[i]}(${n + j})`;
        }
      }
    }
  }
  return newArr;
}

module.exports = renameFiles;
