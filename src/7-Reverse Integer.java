class Solution {
    public int reverse(int x) {
        
        int reverse_digit=0;
        boolean neg = false;
        if(x<0){
            neg = true;
            x*= -1;
        }
        while(x>0){
            int digit = x%10;
            if(reverse_digit > Integer.MAX_VALUE / 10)return 0;
            reverse_digit = (reverse_digit*10)+digit;
            x= x/10;
        }
        if(!neg){return reverse_digit;}
        else{ return reverse_digit*-1;}
    }
}