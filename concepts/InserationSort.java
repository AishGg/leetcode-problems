// Inseration Sort

// In simple terms basically take element and put it on its right place mean position

// How you will do ?

// Take the element and check in the left side if the left element is bigger swap it and do till it can be

// Time complexity is same n*n for worst and average 
// for best it can be n if there is no swap happens

//code

class Solution {
    public int[] insertionSort(int[] nums) {
        int n = nums.length;
        for(int i = 0; i<=n-1;i++){
            int j=i;
            while(j>0 && nums[j-1] > nums[j]){  // here chekinng if j is greater than 0 and current and left element condiiton
                    int temp = nums[j-1];
                    nums[j-1] = nums[j];
                    nums[j] = temp;
                    j--;
            }
        }
        return nums;
    }
}

