// https://www.geeksforgeeks.org/problems/sum-of-series2811/1

/**
 * @param {number} n
 * @returns {number}
 */
class Solution {
    findSum(n) {
        // code here
        let sum = 0
        function rec(num){
            if(num>n) return 0
            sum += num
            rec(num+1)
        }
        rec(1)
        return sum
    }
}
