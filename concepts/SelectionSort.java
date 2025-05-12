
// Selection Sort

/* 
This is a Sorting method. In Two Steps
     1. Find minimum 
     2. swap

For example this array = 12, 6, 7, 3

first find the minimum element in the array which is 3 than swap it with the first index
Then find the second minimum element and swap it with the the second index
    as we already filled the first index with the minimum element 

     array after first iteration 3, 6, 7, 12

*/

// Code for any array to sort using selection sort
class selectionSort {
    public int[] selectionSort(int[] nums) {
        int n = nums.length;
        // This loop is for going on every element
        // Running till n-2 because last element is already sorted if we swap the element 
        // 56, 42 if we swap than 42, 56 don't have to check for 56 beacause it is last element
        for(int i = 0; i<=n-2; i++){
            int min = i;
            // For getting the index of minimum element from the the current starting point to n-1 
            // because we are cheking every element using the condition n-1
            for(int j = i; j<=n-1; j++){
                if(nums[j]<arr[min]){
                    min = j;
                }
            }
            // swapping the element 
            int temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }
        return nums;
    }
}