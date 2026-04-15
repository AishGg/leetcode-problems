// it similar to the Longest subarray with sum k 
// same brute better and optimal approch 
         
    //   brute     better    optimal
// From  N*N*N --> N*N -->      O(N) same for space

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let presumhash = new Map()
    presumhash.set(0,1)
    let sum = 0
    let count = 0
    for(let i = 0;i<nums.length;i++){
        sum += nums[i]
        let rem = sum - k
        if(presumhash.has(rem)) {
            count += presumhash.get(rem)
        }
        
        presumhash.set(sum, (presumhash.get(sum) || 0) + 1)
    
    }
    return count
};

