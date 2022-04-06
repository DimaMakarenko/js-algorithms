// Write a recursive function called "isPalindrome" which returns true 
// if the string passed to it is a palindrome (reads the same forward and backward). 
// Otherwise it returns false.

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    if (str.length <= 1) return true;
    if (str[0] !== str[str.length - 1]) {
      return false;
    }
    let withoutFirst = str.slice(1);
    let withoutLast = withoutFirst.slice(0, -1);
  
    return isPalindrome(withoutLast);
  }