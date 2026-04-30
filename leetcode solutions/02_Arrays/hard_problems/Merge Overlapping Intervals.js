// Given an array of intervals where intervals[i] = [starti, endi], merge 
// all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

 

// Example 1:

// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    if(intervals.length === 0) return [];
    let n = intervals.length
    let res = []
    intervals.sort((a,b) => a[0] - b[0])
    for(let i = 0;i<n;i++){
       
       if(res.length === 0 || intervals[i][0] > res.at(-1)[1]){
             res.push(intervals[i])
       }
       else{
        res.at(-1)[1] = Math.max(res.at(-1)[1], intervals[i][1])
       }
           
    }
    return res

};