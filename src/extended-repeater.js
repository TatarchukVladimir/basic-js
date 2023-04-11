const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result;
  let additionRepeat = [];
  let repeat = [];
  let additionStr;
  let strAndAddition;
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = (options.addition !== undefined) ? '' + options.addition : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  for (let i = 0; i < additionRepeatTimes; i++) {
      additionRepeat.push(addition);
  }
  additionStr = additionRepeat.join(additionSeparator);
  strAndAddition = str + additionStr;
  
  for (let i = 0; i < repeatTimes; i++) {
      repeat.push(strAndAddition);
  }
  result = repeat.join(separator);

  return result;
}

module.exports = {
  repeater
};
