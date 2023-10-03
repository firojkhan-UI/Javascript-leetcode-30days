/**
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
var twoSum = function(nums, target) {
    let res = []
    let x = 0;
    const hasMap = new Map()
    for(let i = 0; i < nums.length; i++) {
        if(hasMap.has(nums[i])) {
            hasMap.set(nums[i],hasMap.get(nums[i])+1)
        }
        else {
            hasMap.set(nums[i], 1)
        }
    }
    for(let i = 0; i < nums.length; i++) {
        x = target - nums[i]
        if(hasMap.has(x)) {
            if(x === nums[i] && hasMap.get(x) >= 2) {
                res.push(i)
            }
            else if(x !== nums[i]) {
                res.push(i)
            }
        }

    }
    return res;
};