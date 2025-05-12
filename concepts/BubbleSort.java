// Bubble Sort

/*

The main concept is: Push the max to the last by adjcent swap

example:  array = 5,4,3,2,1
The total element is 5 so will will complete in 4 steps
1. 4 3 2 1 5
2. 3 2 1 4 5
3. 2 1 3 4 5
4. 1 2 3 4 5

As last element is already on the place
We will start the loop from the last to till second element which from n-1 to 1

*/
// Time complexity

// time complexity for bubble sort is also n*n which is for worst and average case
// we can optimize the time coplexity which n for best case

// if we loop for first step and there is not even single swap happend that means our
// array is sorted 
// for example 1 2 3 4 5 
// try to analyse and see for step first are there any swap happening if not that means its already sorted
// so we add a counter lines in the code that if is not swapped stop the code in that case we only run the loop for n


// code 
class Solution {
    public int[] bubbleSort(int[] nums) {
        int n = nums.length;
        for(int i = n-1; i>=1;i--){
            int swapCount = 0;
            for(int j=0;j<=i-1;j++){
                if(nums[j]>nums[j+1]){
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                    swapCount = 1; // Even a single swap happen this line will execute which means array is not pre-sorted
                }
            }
            if(swapCount == 0){
                break;
            }
        }
        return nums;
    }
}

