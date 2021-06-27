// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) -> [[1.2], [3,4]]
// chunk([1,2,3,4,5], 2) -> [[1,2], [3,4], [5]]
// chunk([1,2,3,4,5,6,7,8], 3) -> [[1,2,3],[4,5,6],[7,8]]

function chunk(array, size) {
  const chunked = [];

  // Original solution
  //   for (let element of array) {
  //     const last = chunked[chunked.length - 1];

  //     if (!last || last.length === size) {
  //       chunked.push([element]);
  //     } else {
  //       last.push(element);
  //     }
  //   }


  //Solution with slice function
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;
