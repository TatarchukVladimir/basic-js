const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const reverseArr = domains.map(val => val.split('.').reverse());
  const result = {};

  reverseArr.map(el => {
      let dns = '';
      for (let i = 0; i < el.length; i++) {
          dns += `.${el[i]}`;
          if (result[dns]) {
              result[dns] += 1;
          } else {
              result[dns] = 1;
          }
      }
  });

  return result
}

module.exports = {
  getDNSStats
};
