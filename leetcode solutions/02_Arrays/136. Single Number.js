// Example 1:

// Input: nums = [2,2,1]

// Output: 1

// this is brute force approch

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    

    for(let i = 0; i<nums.length; i++){
        let count = 0
        for(let j = 0;j<nums.length;j++){
            if(nums[i] == nums[j])
            count++
        }
        if(count==1) return nums[i]
    }
};

// optimal solution is using the xor 
// for optimla approch you can use xor

// Xor of same number is o 
// Xor with 0 and 2 result will 2 or any number 

// xor = 0
// for(let i = 0; i<arr.length; i++ {
//           xor = xor ^ arr[i]
// }
// return xor

// simple

// but read for all approches