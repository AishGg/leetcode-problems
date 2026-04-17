// brute force way

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        for(let j = i+1;j<nums.length;j++){
            for(let k = j+1;k<nums.length;k++){
                if(nums[i]+nums[j]+nums[k] == 0){
                    let temp = [nums[i],nums[j],nums[k]]
                    temp.sort((a,b)=> a-b)
                    console.log(temp)
                    set.add(temp.join(","))
                    console.log(set)
                }

                
            }
        }

    }

    for(let item of set){
        res.push(item.split(",").map(Number))
    }
    console.log(res)
    return res
};


// better way

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    let set = new Set()
    for(let i = 0;i<nums.length;i++){
        let map = new Map()
        for(let j = i+1;j<nums.length;j++){
            let k = -(nums[i] + nums[j])
            if(map.has(k)){
                let temp = [nums[i],nums[j],k]
                temp.sort((a,b)=> a-b)
                set.add(temp.join(","))
            }            
            map.set(nums[j],j)
        }

    }

    for(let item of set){
        res.push(item.split(",").map(Number))
    }
    console.log(res)
    return res
};

// optimal way
// using pointer approch
// i is constant others are moving 

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=> a-b)
    let res = []
    let n = nums.length
    for(let i = 0;i<nums.length;i++){
        if(nums[i] > 0) break
        if(i>0 && nums[i]==nums[i-1]) continue
        let j = i+1
        let k = n-1
        while(j<k){
            let sum = nums[i]+nums[j]+nums[k]

            if(sum<0) j++
            else if (sum>0) k--
            else{
                let temp = [nums[i],nums[j], nums[k]]
                res.push(temp)
                j++
                k--
                while(j<k && nums[j] == nums[j-1]) j++
                while(j<k && nums[k] == nums[k+1]) k--
            }
        }
    }
    return res
};