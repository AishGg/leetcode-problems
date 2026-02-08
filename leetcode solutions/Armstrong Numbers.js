// https://www.geeksforgeeks.org/problems/armstrong-numbers2727/1

// User function Template for javascript

/**
 * @param {number} n
 * @returns {boolean}
 */

class Solution {
    armstrongNumber(n) {
        // code here
        let number = n
        let count_digits = 0  // counting digits for n doesn't exceed
        let result = 0
        while(number > 0){
            let reminder = number%10
            result = result + Math.pow(reminder, 3)
            count_digits++
            number = Math.floor(number/10)
        }
        if(count_digits < 3 || count_digits > 3){
            return false
        }
        if(result==n){  // comparing the result with given value
            return true
        }else{
            return false
        }
        
    }
}
