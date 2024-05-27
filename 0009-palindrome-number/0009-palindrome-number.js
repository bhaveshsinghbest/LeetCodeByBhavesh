/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

       // Step 1: Convert the given integer to a string to make it easier to reverse
    const original = x.toString();
    // Step 2: Reverse the string using JavaScript's array methods
    const reversed = original.split('').reverse().join('');
    // Step 3: Compare the original and reversed strings. If they are equal, the number is a palindrome
    return original === reversed;
    
};