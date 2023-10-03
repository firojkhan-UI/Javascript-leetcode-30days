/**
 * Given an object or an array, return if it is empty.

An empty object contains no key-value pairs.
An empty array contains no elements.
You may assume the object or array is the output of JSON.parse.

 
var isEmpty = function(obj) {

    return Object.keys(obj).length === 0 ? true : false
};
Example 1:

Input: obj = {"x": 5, "y": 42}
Output: false
Explanation: The object has 2 key-value pairs so it is not empty.
 */
var isEmpty = function(obj) {

    return Object.keys(obj).length === 0 ? true : false
};