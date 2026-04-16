// in pascale triangle usually three types of question can be asked

// first is print the particular number like row 5 col 2
// secon is printing specific entire row
// printing all rows for given number

// for first problem use nCr formula in which we minus 1 
// example 5-1 C 2-1 for 5C2 --> 4C1

// top simplfy the problem and reduce time complexity we find the pattern 
// example for printing 5 row
// we know sure that first is 1 so start with 2 which n-i
// for more clearity see the official doc

// https://takeuforward.org/data-structure/program-to-generate-pascals-triangle


// optimal way

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    function genSingleRow(row){
        let temp = []
        let ans = 1
        temp.push(ans)
        for(let i = 1;i<row;i++){
            ans = ans * (row-i)
            ans = ans/i
            temp.push(ans)
        }
        return temp
    }

    let arr = []
    for(let i = 1;i<=numRows;i++){
        arr.push(genSingleRow(i))
    }
    return arr
};

// below is the same code of above the difference is in first apporch we write a different function and call every time
// but in below we did the same inside the function which takes less time 

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    let arr = []
    for(let i = 1;i<=numRows;i++){
        let ans = 1
        let temp = []
        temp.push(ans)
        for(let j = 1;j<i;j++){
            ans = ans * (i-j)
            ans = ans/j
            temp.push(ans)
        }
        arr.push(temp)
    }
    return arr
};