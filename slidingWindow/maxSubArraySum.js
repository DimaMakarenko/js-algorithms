// Write a function called maxSubArraySum which accepts an array of integers and a number called n. 
// The function should calculate the maximum sum of n consecutive elements in the array.

// 1. Attempt. A native solution 
// O (n^2)
/*
function maxSubArraySum(arr, n) {

    if (arr.length === 0) {
        return null;

    }

    let max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp = 0;

        for (let j = 0; j < n; j++) {
            temp += arr[i + j]
        }

        if (temp > max) {
            max = temp;
        }
    }
    return max;
}

console.log('maxSubArraySum', maxSubArraySum([1, 2, 3, 9, 6, 1, 2], 3));
*/

// 2 Attempt. 
// Time Complexity - O (n)

function maxSubArraySum(arr, n) {
    let max = 0;
    let temp = 0;

    if (arr.length < n) return null;

    for (let i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;

    for (let i = 0; i < arr.length; i++) {
        temp = temp - arr[i - n] + arr[i];
        max = Math.max(max, temp)
    }
    return max;
}