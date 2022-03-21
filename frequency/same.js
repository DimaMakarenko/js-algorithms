// Write a function called "same", which accepts two arrays.
// The function should return true if every value in the 
// array has it's corresponding value squared in the second array. 
// The frequency if values must be the same.

// same([1,2,3], [4,1,9]) // true
// same([1,2,4], [9,1]) // false
// same([1,2,1], [4,1,4]) // false 

// 1 attempt O (n^2)
/*
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    for (let i = 0; i < arr1.length; i++) {
      let index = arr2.indexOf(arr1[i] ** 2);
  
      if (index === -1) {
        return false;
      }
      arr2.splice(index, 1);
    }
  
    return true;
  }
  */

// 2 attempt O(n)

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let elem in arr1) {
        frequencyCounter1[elem] = (frequencyCounter1[elem] || 0) + 1
    }
    for (let elem in arr2) {
        frequencyCounter2[elem] = (frequencyCounter2[elem] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    return true;
}