
// first checking if every upcoming element is 
//  greater than previous element 
// second if any place its not great keeping a count and 
// if counter is more than one that means its not sorted and returning false
// if only drop once then checking last element should be smaller than first to become true
//  using % n so we can check the last element with first


// Example 1:

// Input: nums = [3,4,5,1,2]
// Output: true
// Explanation: [1,2,3,4,5] is the original sorted array.
// You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let drop_count = 0
    let n = nums.length
    for(let i=0;i<=n-1;i++){
        if(nums[i]>nums[(i+1) % n]){
            drop_count++
        }
    }
    if(drop_count <=1) return true
    else return false
};