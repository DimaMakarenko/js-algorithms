// Given an array, the simplest way to search for an value 
// is to look at every element in the array 
// and check if it's the value we want 

// Search methods on array in JS: indexOf, includes, find, findIndex


// Time Complexity - O (n)
function linearSearch(array, num) {
  let index = -1;
  array.forEach((element, ind) => {
    if (element === num) {
      index = ind
    }
  });
  return index;
}

console.log(linearSearch([1, 2, 3], 2));
