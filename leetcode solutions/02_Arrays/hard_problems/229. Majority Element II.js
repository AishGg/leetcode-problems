// this is similar to majority element 1
// one thing to notice that list will aways contain 2 elements not more than that
// example  array size of 5 will have element n/3 which is 1.6 and element should appear atleast 2 times
// total length is 5 only 2 + 2 = 4 as we are clear

// brute way -- using loops which is n*3 time complexity
// bettwe way - using hasmap and loop through it which takes n*2 
// optimla way in which only one loop used for hashing and checking condiiton 

// solution to the problem it takes N tc and N sc 
// we can improve the sc if all elments are unique like [1,2,3,4] check below approch
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ls = []
    let map = new Map()
    let min = parseInt(nums.length/3) + 1 
    for(let i = 0;i<nums.length;i++){
        map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        if(map.get(nums[i]) == min){
             ls.push(nums[i])
        }
        if(ls.length == 2) break
    }
    return ls
};

// more optimal or best approch for reducing time complexity

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ls = []
    let count1 = 0
    let count2 = 0 
    let el1 = -Infinity
    let el2 = -Infinity
    for(let i = 0;i<nums.length;i++){
        if(count1==0 && nums[i] != el2){
            count1 = 1
            el1 = nums[i]
        }
        else if(count2 == 0 && nums[i] != el1){
            count2 = 1
            el2 = nums[i]
        }
        else if(nums[i] == el1) count1++
        else if(nums[i] == el2) count2++
        else count1--, count2--
    }

    count1 = 0, count2 = 0
    for(let i = 0;i<nums.length;i++){
        if(el1==nums[i]) count1++
        if(el2 == nums[i]) count2++

    }
    let min = parseInt(nums.length/3) + 1
    if(count1>=min) ls.push(el1)
    if(count2>=min) ls.push(el2)

    return ls

};