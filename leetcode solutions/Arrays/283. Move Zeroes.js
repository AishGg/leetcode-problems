// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {

    temp = []
    let position_value = 0
    let zero_counter = 0

    for(let i=0; i<nums.length; i++){
        if(nums[i]==0){
            zero_counter++
        }
        else{
            nums[position_value] = nums[i]
            position_value++
        }
    }
    for(let i = position_value; i<nums.length; i++){
        nums[i] = 0
    }
};

