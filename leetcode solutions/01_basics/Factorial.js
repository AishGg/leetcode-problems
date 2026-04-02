/**
 * @param {number} n
 * @returns {number}
 */

class Solution {
    factorial(n) {
        // code here
        let fac = 1
        function rec(num){
            if(num>n) return 1
            fac *= num
            rec(num+1)
        }
        rec(1)
        return fac
    }
}
