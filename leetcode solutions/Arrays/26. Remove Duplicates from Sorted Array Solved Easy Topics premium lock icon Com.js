
// IN this problem we are keeing a count for unique number which
// is also hloding the posiiton where new unique element will be replaced


// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let unique_numbers = 1
    let n = nums.length
    for(let i=1;i<=n-2;i++){
        if(nums[i] !== nums[i+1]){
            unique_numbers++
            
        }
        nums[i] = nums[i+1]
        
    }
    return unique_numbers
    /* brute force
    let unique_numbers = 1
    let n = nums.length
    for(let i=0;i<=n-1;i++){
        if(nums[i] !== nums[unique_numbers-1]){
            nums[unique_numbers] = nums[i]
            unique_numbers++
        }
    }
    return unique_numbers
    */ 

    // ANOTHER WAY or optimal way

    // let unique_value_position = 0
    // for(let j=1; j<nums.length; j++){
    //     if(nums[unique_value_position] !== nums[j]){
    //         nums[unique_value_position+1] = nums[j]
    //         unique_value_position++
    //     }

    // }
    // return unique_value_position + 1

};