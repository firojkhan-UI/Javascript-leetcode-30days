/**
 * You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true
 */
var searchMatrix = function(matrix, target) {
    let m = matrix[0].length; // column length
   let n = matrix.length; // row length
   
   let i = 0; // first row
   let j = m-1; // last column
   
   while(i<n && j>=0){ 
       if(matrix[i][j] == target){
           return true;
       }
       if(matrix[i][j] > target){
           // we'll be moving towards left if the value of target is smaller 
           j--;
       }else{
           // otherwise we'll be moving downwards if the target is greater than
           i++;
       }
   }
   return false;
};