// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
// Time: O(N)

function sameFrequency(num1, num2) {
    const str1 = String(num1);
    const str2 = String(num2);

    if (str1.length !== str2.length) {
        return false;
    }

    const frequencyCounter1 = {};
    const frequencyCounter2 = {};

    for (let value of str1) { // O(n)
        frequencyCounter1[value] = (frequencyCounter1[value] || 0) + 1;
    }
    for (let value of str2) { // O(n)
        frequencyCounter2[value] = (frequencyCounter2[value] || 0) + 1;
    }


    for (let key in frequencyCounter1) { // O(n)
        if (frequencyCounter1[key] !== frequencyCounter2[key] || !(key in frequencyCounter2)) {
            return false;
        }
    }

    return true;
}