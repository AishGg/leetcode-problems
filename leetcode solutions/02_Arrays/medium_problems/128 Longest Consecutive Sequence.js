// brute force

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let largest_seq = 0
    for(let i =0;i<nums.length;i++){
        
        let x = nums[i]
        let count = 1
        while(nums.includes(x+1)==true){
            x = x+1
            count++
        }
        largest_seq = Math.max(count, largest_seq)
    }
    return largest_seq
};

// better way 
// we will sort the array first then look

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    nums.sort((a,b)=> a-b)
    let last_small = -Infinity
    let count = 0
    let longest = 0
    for(let i = 0;i<nums.length;i++){
        if(nums[i] - 1 == last_small){
            count++
            last_small = nums[i]
        }
        else if(last_small != nums[i]){
            count = 1
            last_small = nums[i]
        }
        longest = Math.max(longest, count)
    }
    return longest
};

// optimal way

