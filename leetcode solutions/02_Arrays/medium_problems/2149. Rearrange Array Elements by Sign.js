// brute way

var rearrangeArray = function(nums) {
    let pos = []
    let neg = []
    for(let i =0;i<nums.length;i++){
        if(nums[i]>0) pos.push(nums[i])
        else neg.push(nums[i])
    }
    for(let i = 0;i<nums.length/2;i++){
        nums[2*i] = pos[i]
        nums[(2*i)+1] = neg[i]
    }

    return nums
};


// optimal way

var rearrangeArray = function(nums) {
    let posIndex = 0
    let negIndex = 1
    let arr = []
    for(let i =0;i<nums.length;i++){
        if(nums[i]>0) {
            arr.push(nums[posIndex])
            posIndex += 2
        }
        else {
            arr.push(nums[negIndex])
            negIndex += 2
        }
    }
    return arr
};