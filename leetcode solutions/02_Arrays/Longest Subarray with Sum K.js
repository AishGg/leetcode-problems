// Given an array arr[] containing integers and an integer k, your task is to find the length of the longest subarray where 
// the sum of its elements is equal to the given value k. If there is no subarray with sum equal to k, return 0.

// Examples:

// Input: arr[] = [10, 5, 2, 7, 1, -10], k = 15
// Output: 6
// Explanation: Subarrays with sum = 15 are [5, 2, 7, 1], [10, 5] and [10, 5, 2, 7, 1, -10]. The length of the longest subarray with a sum of 15 is 6.

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */
class Solution {
    longestSubarray(arr, k) {
        // code here
        let presumhash = new Map()
        let sum = 0
        let maxlen = 0
        for(let i=0 ;i<arr.length;i++){
            sum += arr[i];
            if(sum == k){
                maxlen = Math.max(maxlen, i+1)
            }
            let rem = sum - k
            if(presumhash.has(rem)){
                let len = i - presumhash.get(rem)
                maxlen = Math.max(maxlen, len)
                
            }
            if(!presumhash.has(sum)){
                presumhash.set(sum, i)
            }
        }
        return maxlen
    }
}


// a optimal approch for the subaray with only positives using two pointer method

function longestSubarraywithPositivesONly(arr, k) {
    let sum =0
    let left = 0
    let right = 0
    let maxlen = 0
    while(right<arr.length){

        while(left<=right && sum > k){
            sum -= arr[left]
            left++
        }
        if(sum == k){
            maxlen = Math.max(maxlen, right-left+1)
        }
        right++
        if(right<n) sum += arr[right]
    }
    
}