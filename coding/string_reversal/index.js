// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse('apple') === 'leppa'
// reverse('hello') === 'olleh'
// reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // 1st solution
  // const result = str.split("").reverse().join("");

  // 2nd solution
  // let result = '';

  // for (let character of str) {
  //   result = character + result;
  // }

  // 3rd solution
  const result = str.split("").reduce((rev, char) => char + rev, "");

  return result;
}

module.exports = reverse;
