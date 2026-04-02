// we are diving the k with the length of array so if its more than length 
// it would be on same position so only extras are counted
// if k= 15 and length of array is 7
// like  7 + 7 + 1

// below is the better way

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let n = nums.length
    k = k%n
    function reverse(start,end){
        while (start<end){
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }
    reverse(0, n-1)
    reverse(0, k-1)
    reverse(k, n-1)
};