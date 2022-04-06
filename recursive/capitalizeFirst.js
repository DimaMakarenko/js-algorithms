// Write a recursive function called "capitalizeFirst".
//  Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(array) {
    if (array.length === 0) return [];

    let chars = array[0].split("");
    chars[0] = chars[0].toUpperCase();

    return [chars.join("")].concat(capitalizeFirst(array.slice(1)));
}

  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']