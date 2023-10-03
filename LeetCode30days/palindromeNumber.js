/**
 * Given an integer x, return true if x is a 
palindrome
, and false otherwise.

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
 */
var isPalindrome = function(x) {
    let s = x.toString()
    let l = s.length-1;
    for(let i = 0; i <= l; i++) {
        if(s[i] !== s[l]) {
            return false
        }
        l--;
    }
    return true;
};