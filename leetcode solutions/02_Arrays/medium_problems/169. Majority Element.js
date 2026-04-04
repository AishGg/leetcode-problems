
// brute way -simple loop  to count the valye 

var majorityElement = function(nums) {
    let count = 0
    for(let i = 0;i < nums.length;i++){
        count = 0
        for(let j=0; j<nums.length;j++){
            if(nums[j] = nums[i]){
                count++
            }
        }
        if(count > nums.length/2) return nums[i]
    }
};

// better approch using map / hashing

var majorityElement = function(nums) {
    let map = new Map()
    for(let i = 0;i < nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0)+1)
    }
    for(let [key, value] of map){
        if(value>nums.length/2) return key
    }
};


// optimal way -- using moore Voting Algorithum
// simple taking the element and if more same doing count++
// else count-- whenever count ==0 chnage the element and again doing the Process
// once loop is done checking again wiht the element is its exist more than n/2

var majorityElement = function(nums) {
    let count = 0
    let el = 0
    for(let i = 0;i < nums.length;i++){
        if(count == 0){
            count++
            el = nums[i] 
        }
        else if(nums[i]==el){
            count++
        }
        else{
            count--
        }
    }
    let count1 = 0
    for(let j =0;j<nums.length;j++){
        if(nums[j] == el) count1++
    }
    if(count1>nums.length/2) return el
};