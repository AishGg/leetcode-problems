/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let index = -1
    let n = nums.length
    for(let i = n-2; i>=0;i--){
        if(nums[i] < nums[i+1]){
            index = i
            break
        }
    }
    if (index === -1) {
        reverse(nums, 0, n - 1);
        return;
    }
   for (let i = n - 1; i > index; i--) {
        if (nums[i] > nums[index]) {
            [nums[i], nums[index]] = [nums[index], nums[i]];
            break;
        }
    }
    reverse(nums, index + 1, n - 1);

};
function reverse(arr, start, end) {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}