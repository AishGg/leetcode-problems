// for two sum there are total three ways 
// brute -> better -> optimal 

// brute one 


function twosum(nums, k){
    for(let i = 0;i <=nums.length;i++){
        for(let j = 0;j <nums.length;j++){
            if(nums[i]==nums[j]) continue
            if(nums[i]+nums[j] == k){
                return [i,j]
            }
        }
    }
}
// in brute use can start the inner loop from i+1 which will remove the line 10 
// just a little difference compare to tc n*n


// Better way

// sing hashing 

// In the below program we are using map and checking if going
// on every element does it add to the reminder for the sum 
// else logic is simple just read it 

var twoSum = function(nums, target) {
    let map = new Map()
   
    for(let i = 0;i<nums.length;i++){
        let a = nums[i]
        let rem = target - a
        if(map.has(rem)){
            return [map.get(rem), i]
        }
        if(!map.has(rem)){
            map.set(nums[i],i)
        }
        
    }
    
};

// optimal way without using hash 
// using the two pointer approch

// like take one pointer in left and other in right 
// as we know it is sorted 
// so 1 3 5 7 9 11 

// target is 15 
// 1. 1 + 11 = 12 less than target so inrease from left
// 2. 3 + 11 = 14 again less
// 3. 5 + 11 = 16 more so decreaase from right 
// 4. 5 + 9 = 13 less so inrease from left
// 5. 7 + 9 = 15


    // let left = 0
    // let right = 0
    // let arr = nums.sort((a,b) => a-b)
    // while(left<right){
    //     let sum = arr[left] + arr[right]
    //     if(sum== target){
    //         return [left, right]
    //     }
    // }
    
    // this is better if array is sorted if not then using input modification rember


