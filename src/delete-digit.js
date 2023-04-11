const { NotImplementedError } = require('../extensions/index.js');

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
  const result = n.toString().split('');
  let min = Math.min(...result);
  
  if (result.indexOf(min.toString()) == result.length - 1) {
    if (result[0] < result[1]) {
      delete result[0];
    } else {
      delete result[1];
    }
  } else {
    delete result[result.indexOf(min.toString())];
  }
  
  return +(result.join(''));
}

module.exports = {
  deleteDigit
};
