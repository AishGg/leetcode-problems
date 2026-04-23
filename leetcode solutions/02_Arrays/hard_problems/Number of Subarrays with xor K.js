// https://www.geeksforgeeks.org/problems/count-subarray-with-given-xor/1

// Given an array of integers arr[] and a number k, count the number of subarrays having XOR of their elements as k.

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    subarrayXor(arr, k) {
        // code here
        let mpp = new Map()
        let xr = 0
        let count = 0
        mpp.set(0,1)
        for(let i =0;i<arr.length;i++){
            xr = xr ^ arr[i]
            let x = xr ^ k
            if(mpp.has(x)){
                count += mpp.get(x)
            }
            
            mpp.set(xr, (mpp.get(xr) || 0) + 1)
            
        }
        return count
    }
}