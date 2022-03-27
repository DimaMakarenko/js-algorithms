// Given a sorted array of integers, write a function called "search",
// that accepts a value and return the index where the value passed to the function is located.
// if the value is not found, return -1

// 1. Attempt
// Time Complexity O(n)

function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }

    return -1;
}


// 2. Attempt
// Binary search
// Time Complexity O(Log(N))
function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min <= max) {
        let middle = Math.floor((min + max) / 2);

        if (arr[middle] < value) {
            min = middle + 1;
        }
        else if (arr[middle] > value) {
            max = middle - 1;
        }
        else {
            return middle;
        }
    }
    return -1;
}
