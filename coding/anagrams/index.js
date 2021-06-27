// --- Directions
// Check to see if two provided strings are anagrams of eachother;
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider character, not spaces or punctuation.
// Consider capital letters to be the same as lower case
// --- Examples
// anagrams('rail safety', 'fairy tales') --> True
// anagrams('RAIL! SAFETY!', 'fairy tales') --> True
// anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // First solution
  // const aCharMap = buildCharMap(stringA);
  // const bCharMap = buildCharMap(stringB);

  // if (Object.keys(aCharMap).length !== Object.keys(bCharMap.length)) {
  //   return false;
  // }

  // for (const char in aCharMap) {
  //   if (Object.hasOwnProperty.call(aCharMap, char)) {
  //     const element = aCharMap[char];

  //     if (aCharMap[char] !== bCharMap[char]) {
  //       return false;
  //     }
  //   }
  // }

  // return true;


  // Second solution with helped function
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join();
}

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g)) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
}

module.exports = anagrams;
