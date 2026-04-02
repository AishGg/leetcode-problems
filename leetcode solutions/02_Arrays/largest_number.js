// https://www.geeksforgeeks.org/problems/largest-element-in-array4009/1


class Solution {
    /**
    * @param number[] arr

    * @returns number
    */
    largest(arr) {
        // code here
        let largest=0
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i] > largest){
                largest = arr[i]
            }
        }
        return largest
    }
}
