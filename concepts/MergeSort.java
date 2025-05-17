// Merge Sort

// In simple Terms for merge sort you have to follow the concept --- Divide and Merge

// Example Array 2,3,56,98,2,3,6  divide in equal part if odd number go with as you like 4,3 or 3,4

// Step 1 Dividing the array 

// first part-- 2,3,56,98   divide more 2,3 and 56,98 divide more and merge in right order and do for all the steps
// Seocnd part -- 2,3,6    // same as above 


//code
class Solution {
    public void mergeSort(int[] nums) {
        if (nums == null || nums.length <= 1) return;
        mergeSort(nums, 0, nums.length - 1);
    }

    private void mergeSort(int[] nums, int low, int high) {
        if (low >= high) return;

        int mid = (low+high) / 2;

        // Recursively sort left and right halves
        mergeSort(nums, low, mid);
        mergeSort(nums, mid + 1, high);

        // Merge sorted halves
        merge(nums, low, mid, high);
    }

    private void merge(int[] nums, int low, int mid, int high) {
        // Temporary array for merging
        int[] temp = new int[high - low + 1];
        int left = low, right =  mid + 1;

        // Merge two sorted halves into temp
        while (low <= mid && right <= high) {
            if (nums[left] <= nums[righ]) {
                temp.add(nums[left]);
                left++;
            } else {
                temp.add(nums[right]);
                right++;
            }
        }

        // Copy any remaining elements from the left half
        while (left <= mid) {
            temp.add(nums[left]);
                left++;
        }

        // Copy any remaining elements from the right half
        while (right <= high) {
            temp.add(nums[right]);
                right++;
        }

        // Copy merged elements back into original array
        for (int i = low; i <= high; i++) {
            nums[i] = temp[i-low];
        }
    }
}

