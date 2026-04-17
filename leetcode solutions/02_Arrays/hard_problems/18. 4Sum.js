// brute force way
// using four loop which takes n*4 time complexity

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = []
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                for(let l = k+1;l<nums.length;l++){
                    let sum = nums[i]+nums[j]
                    sum += nums[k]
                    sum += nums[l]
                    if(sum == target){
                        let temp = [nums[i],nums[j],nums[k], nums[l]].sort((a,b)=> a-b)
                        set.add(temp.join(","))
                    }
                }

                
            }
        }

    }
    for(let item of set){
        res.push(item.split(",").map(Number))
    }
    return res
}



// better approch
// same as 3 sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length
    let res = []
    let set = new Set()
    for(let i = 0;i<n;i++){
        for(let j = i+1;j<n;j++){
            let map = new Map()
            for(let k = j+1;k<n;k++){
                let l = target-(nums[i]+nums[j]+nums[k])
                if(map.has(l)){
                    let temp = [nums[i], nums[j], nums[k], l].sort((a,b)=>a-b)
                    set.add(temp.join(","))
                }
                map.set(nums[k], k)
            }
        }
    }
    for(let item of set){
        res.push(item.split(",").map(Number))
    }
    return res
}


// optimal way to solve
// keepping i and j fixed and moving k from j+1 and l from end

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length
    nums.sort((a,b)=>a-b)
    let res = []
    for(let i=0;i<n;i++){
        if(i>0 && nums[i]==nums[i-1]) continue
        for(let j = i+1;j<n;j++){
            if(j>i+1 && nums[j]==nums[j-1]) continue
            let k = j+1
            let l = n-1
            while(k<l){
                let sum = nums[i]+nums[j]
                sum += nums[k]
                sum += nums[l]
                if(sum < target) k++
                else if(sum > target) l--
                else {
                    let temp = [nums[i], nums[j], nums[k], nums[l]]
                    res.push(temp)
                    k++
                    l--
                    while(k<l && nums[k] == nums[k-1]) k++
                    while(k<l && nums[l] == nums[l+1]) l--
                }
            }
        }
    }
    return res
}