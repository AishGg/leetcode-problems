class Solution {
    public boolean isPalindrome(int x) {
        int reverse =0;
        int copy = x;
        if(x<0){
            return false;
        }
        while (x>0){
            int digit = x%10;
            reverse = (reverse*10)+digit;
            x = x/10;
        }
        boolean result = (copy==reverse) ? true : false;
        return result;
    }
}