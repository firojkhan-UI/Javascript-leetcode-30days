/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
Example 1:
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]

 */
var spiralOrder = function (matrix) {

    let top = 0, left = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
    let ans = [];
    while (true) {
        for (let i = left; i <= right; i++) {
            ans.push(matrix[top][i]);
        }
        top++;
        if (left > right || top > bottom) break;
        for (let i = top; i <= bottom; i++) {
            ans.push(matrix[i][right]);
        }
        right--;
        if (left > right || top > bottom) break;
        for (let i = right; i >= left; i--) {
            ans.push(matrix[bottom][i]);
        }
        bottom--;
        if (left > right || top > bottom) break;
        for (let i = bottom; i >= top; i--) {
            ans.push(matrix[i][left]);
        }
        left++;
        if (left > right || top > bottom) break;
    }
    return ans;
};