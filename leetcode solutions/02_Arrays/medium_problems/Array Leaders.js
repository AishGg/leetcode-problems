// https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1

// brute force way

// using every element to check if it greater than other elements

class Solution {
    leaders(a) {
        // code here
        let result = []
       
        for(let i = 0;i<a.length;i++){
            let leader = true
            for(let j = i+1;j<a.length;j++){
                if(a[j]> a[i]){
                    leader = false
                    break
                }
            }
            if(leader == true){
                result.push(a[i])
            }
        }
        return result
    }
}

// optimal way

/**
 * @param {number[]} a
 * @returns {number[]}
 */
class Solution {
    leaders(a) {
        // code here
        let result = []
        let max = -Infinity
        for(let i = a.length-1;i>=0;i--){
            if(a[i] >= max){
                result.push(a[i])
            }
            max = Math.max(a[i], max)
        }
        result.sort((a,b)=> b-a)
        return result
    }
}