// brute
//using three loops

var maxSubArray = function(nums) {
    let max = 0
    for(let i = 0;i<nums.length;i++){
        for(let j = i;j<nums.length;j++){
            let sum = 0
            for(let k = i; k<=j;k++){
                sum += nums[k]

            }
            max = Math.max(sum, max)
        }
    }
    return max
};


// better way is just like as we know we are adding again and again
// so keep the sum, its a little confusing try to undestand

var maxSubArray = function(nums) {
    let max = 0
    for(let i = 0;i<nums.length;i++){
        let sum = 0
        for(let j = i;j<nums.length;j++){
            sum += nums[j]
            max = Math.max(sum, max)
        }
    }
    return max
};


// optimal way using kadane's algorithum
// in which we add every element and of its less than 0 we left that element behid

var maxSubArray = function(nums) {
    let sum = 0
    let max = -Infinity  // as minium number as can be
    for(let i = 0;i<nums.length;i++){
        sum += nums[i]
        if(sum > max){
            max = sum
        }
        if(sum<0){
            sum = 0
        }
    }
    return max
};


// also if you want to print the subarray
// just a little change in code


var maxSubArray = function(nums) {
    let sum = 0
    let max = -Infinity
    let anstart = -1
    let ansend = -1
    for(let i = 0;i<nums.length;i++){
        let start =0
        if(sum==0) start = i
        sum += nums[i]
        if(sum > max){
            max = sum
            anstart = start
            ansend = i
        }
        if(sum<0){
            sum = 0
        }
    }
    return max
};
