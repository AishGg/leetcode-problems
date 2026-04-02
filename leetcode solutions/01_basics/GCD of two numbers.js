/**
 * @param number a
 * @param number b
 * @returns number
 */

class Solution {
    gcd(a, b) {
        // code here
        while(a>0 && b>0){
            if(a>b) a = a%b;
            else b = b%a;
            
            if(a==0) return b
            if(b==0) return a
        }
        
    }
    
}