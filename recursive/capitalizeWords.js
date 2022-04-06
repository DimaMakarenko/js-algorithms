// Write a recursive function called capitalizeWords. 
// Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(array) {
  if (array.length === 0) return [];
  let chars = array[0].split("").map((char) => char.toUpperCase());

  return [chars.join("")].concat(capitalizeWords(array.slice(1)));
}

  // let words = ['i', 'am', 'learning', 'recursion'];
  // capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']