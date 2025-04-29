// problem link https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/0

// Using recursion 

// if you want to print in order of 1 to n just call the recursion function before printing statement

class Solution {

    void printNos(int N) {
        // code here
        int n = N;
        if(n<1){return;}
        System.out.print(n);
        System.out.print(" ");
        printNos(n-1);
    }
}