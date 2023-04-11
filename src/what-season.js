const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length) throw new Error('Invalid date!');
  const month = date.getMonth();
  return (month < 2 || month > 10) ? 'winter'
                  : (month > 7) ? 'autumn'
                  : (month > 4) ? 'summer'
                  : 'spring'
  ;
}

module.exports = {
  getSeason
};
