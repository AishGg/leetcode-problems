
// Input: a[] = [1, 2, 3, 4, 5], b[] = [1, 2, 3, 6, 7]
// Output: [1, 2, 3, 4, 5, 6, 7]
// Explanation: Distinct elements including both the arrays are: 1 2 3 4 5 6 7.


/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        let temp = []
        // code here
        let n1 = a.length
        let n2 = b.length
        let i = 0
        let j = 0
        while(i < n1 && j < n2){
            if(a[i] <= b[j]){
                if(temp.at(-1) !== a[i] ||temp.length == 0)
                temp.push(a[i])
                i++
            }
            else{
                if(temp.at(-1) !== b[j] || temp.length == 0)
                temp.push(b[j])
                j++
            }
            
        }
        while(j<n2){
            if(temp.at(-1) !== b[j] || temp.length == 0)
                temp.push(b[j])
                j++
        }
        while(i<n1){
            if(temp.at(-1) !== a[i] ||temp.length == 0)
                temp.push(a[i])
                i++
        }
        return temp
    }
}
