// https://www.geeksforgeeks.org/problems/second-largest3735/1

class Solution {
    getSecondLargest(arr) {
        // code here
        let largest = arr[0]
        let second_largest = -1
        for(let i=0; i<=arr.length-1; i++){
            if(arr[i] > largest ){
                second_largest = largest 
                largest = arr[i]
            }
            if(arr[i] <largest && arr[i] > second_largest){
                second_largest = arr[i]
            }
            
        }
        return second_largest
    }
}