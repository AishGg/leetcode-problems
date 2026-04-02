
/**
 * @param {number} n
 * @returns {void}
 */

class Solution {
    printTillN(n) {
        let arr = []
        function rec(num){
            if(num>n) return
            arr.push(num)
            rec(num+1)
        }
        rec(1)
        console.log(arr.join(" "))
    }
}
