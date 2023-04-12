const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    let newKey = '';
    let index = 0;

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        
        if (this.alphabet.indexOf(str[i]) == -1) {
            res += str[i];
            newKey += ' ';
            continue
          }
        newKey += key[index % key.length]
        index++;
        res += this.alphabet[(this.alphabet.length + this.alphabet.indexOf(str[i]) + this.alphabet.indexOf(newKey[i])) % this.alphabet.length];
    }
    return (this.modification) ? res : res.split('').reverse().join('')
  }

  decrypt(str, key) {
    if (!str || !key) throw new Error('Incorrect arguments!');
    let a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let res = '';
    let newKey = '';
    let index = 0;

    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < str.length; i++) {
        
        if (this.alphabet.indexOf(str[i]) == -1) {
            res += str[i];
            newKey += ' ';
            continue
          }
        newKey += key[index % key.length]
        index++;
        res += this.alphabet[(this.alphabet.length + this.alphabet.indexOf(str[i]) - this.alphabet.indexOf(newKey[i])) % this.alphabet.length];
    }
    return (this.modification) ? res : res.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
