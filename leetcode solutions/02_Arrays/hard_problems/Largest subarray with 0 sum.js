/**
 * @param {Number[]} arr
 * @returns {Number}
 */
class Solution {
    maxLength(arr) {
        // code here
        let max = 0
        let map = new Map()
        let sum = 0
        for(let i = 0;i<arr.length;i++){
            sum += arr[i]
            if(sum == 0){
                max = i +1
            }
            else{
                if(map.has(sum)){
                    max = Math.max(max, i - map.get(sum))
                    
                }
                else{ map.set(sum,i)}
            }
        }
        return max
    }
}