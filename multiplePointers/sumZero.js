// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero of undefined if a pair does not exist
// [-3, -2, -1, 0, 1, 2, 3] => [-3, 3]
// [-2, -1, 1, 2] => [-2, 2]
// [1, 2, 3] => undefined


// 1 attempt. Partial implementation
// Time complexity - O(n ^ 2)
// Space Complexity - O(1)
// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }
// console.log('sumZero', sumZero([-3, -2, -1, 0, 1, 2, 3]))


// 2 attempt
// Time complexity - O(n)
// Space Complexity - O(1)
function sumZero(arr) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        const sum = arr[startIndex] + arr[endIndex];
        if (sum === 0) {
            return [arr[startIndex], arr[endIndex]];
        } else if (sum > 0) {
            endIndex--;
        }
        else {
            startIndex++;
        }
    }

    return undefined;
}

console.log('sumZero', sumZero([-4, -2, -1, 0, 1, 2, 3]))

