// Implement function called countUniqueValues, 
// which accepts a sorter array and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.
// [1,1,2,3,4,5,6] => 6
// [1,1,1,1,2,2] => 2
// [] => 0

function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }

    if (arr.length === 1) {
        return 1;
    }

    let lastIndex = 0;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        if (arr[lastIndex] !== arr[i]) {
            count++;
            lastIndex = i;
        }
    }

    return count;
}

console.log('countUniqueValues', countUniqueValues([1, 1, 1, 1, 2, 2]))