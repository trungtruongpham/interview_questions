// --- Directions
// Given a string, return the character that is most
// commnonly used in the string.
// --- Examples
// maxChar("abccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let max = 0;
  let maxChar = "";
  const charMap = {};

  for (let char of str) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char] += 1;
    }
  }

  for (const char in charMap) {
    if (Object.hasOwnProperty.call(charMap, char)) {
      const element = charMap[char];

      if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
      }
    }
  }

  return maxChar;
}

module.exports = maxChar;
