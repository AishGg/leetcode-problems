// problem link https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/0

// using recursion 


class Solution {
    int sumOfSeries(int n) {
        if(n==0){return 0;}
        
        return n*n*n + sumOfSeries(n-1);
        
    }
}