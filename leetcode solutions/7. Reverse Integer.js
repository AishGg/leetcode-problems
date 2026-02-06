/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // coping the real value so original value stay safe
    let number = x
    let reverse_number = 0  // value to return as reverse
    let neg = false 
    if(number<0){
        number = number * -1  // making value positve to work with it
        neg = true 

    }
    while(number > 0){
        reminder = number%10  
        reverse_number = reverse_number*10 + reminder //adding reminder by multpl 10 every time
        number = Math.floor(number/10)  // removing the last digit every time
    }
    if(reverse_number < -2147483648 || reverse_number > 2147483647){
            return 0
        }
    if(neg==true){
        return reverse_number * -1   // changing the valye sign 
    }
    return reverse_number
    
};