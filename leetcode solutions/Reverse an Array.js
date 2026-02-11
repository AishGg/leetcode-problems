// https://www.geeksforgeeks.org/problems/reverse-an-array/1

/**
 * @param {number[]} arr
 * @returns {void}
 */

class Solution {
    reverseArray(arr) {
        // code here
        function swap(a,b,arr){
            let c = arr[a]
            arr[a]=arr[b]
            arr[b]=c
        }
        function rec(l,r){
            if(l>=r) return 
            swap(l,r, arr)
            rec(l+1,r-1)
        }
        rec(0,arr.length-1)
        
    }
}