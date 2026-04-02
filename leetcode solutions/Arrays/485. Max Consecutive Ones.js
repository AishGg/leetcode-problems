// Example 1:

// Input: nums = [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0
    let counter = 0
    for(let i = 0; i < nums.length;i++){
        if(nums[i] == 1) counter++
        else{
            if(counter > max) max = counter
            counter = 0
        }
        

    }
    if(counter > max) return counter
    return max
}