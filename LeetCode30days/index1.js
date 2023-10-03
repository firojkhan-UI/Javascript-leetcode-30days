var removeDuplicates = function(nums) {
    // Approach 1:
 //     const set = new Set()
 //     //  let res = []
 //     for(let i = 0; i < nums.length; i++) {
 //         set.add(nums[i])
 //     }
 //    nums = [...set]
     
 
     // Approach 2:
     for(let i = 0; i < nums.length-1; i++) {
         if(nums[i] === nums[i+1]) {
             nums.splice(i+1,1)
             i--;
         }
     }
 };