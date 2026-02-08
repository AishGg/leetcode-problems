/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let number = x
    let reverse = 0
    if(number<0){
        return false
    }
    while(number>0){
        reminder = number%10
        reverse = (reverse * 10) + reminder
        number = Math.floor(number/10)
    }
    if(reverse < -2147483648 || reverse > 2147483647){
        return false
    }
    // checking if the reverse is same as orignal
    if(reverse == x){
        return true
    }else{
        return false
    }
};