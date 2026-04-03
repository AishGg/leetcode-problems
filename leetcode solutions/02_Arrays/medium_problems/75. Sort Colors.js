// brute way is using any sorting menthod

// better way is count the 0 2 and 2 and manually replace the value
// same we did with the probelm move sero to last

// optimal way ( Dutch national flag alogrithum )

// its like 0 to low-1 -- low to mid-1 -- mid to high -- high + 1to n-1

// we are solving the mid to high proportion 


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let low = 0 
    let mid = 0
    let high = nums.length-1
    while(mid<=high){
        if(nums[mid]==0){
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++
            mid++
        }
        else if(nums[mid]==1) mid++
        else{
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }

};