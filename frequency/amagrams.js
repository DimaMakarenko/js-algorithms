// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed be rearranging the letters of another, such as cinema, formed from iceman.

// O(3n) => O(n)

function validAnagrams(str1, str2) {
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