// ou are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
//  DO NOT allocate another 2D matrix and do the rotatio

// brute force

// as for the question it is asked to be in place but for better space complexity optimal solution is best 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let arr = []
    let n = matrix.length
    for(let i = 0;i<n;i++){
        for(let j = 0; j<n;j++){
            arr[j][i] = matrix[i][j]
        }
    }
    return arr
};


// optimal approch 
// first we trnspose the matrix row to columns then reverse every row which gives same output 
// we are not changin any variable at the diagonal only upper triangle with lower triangle 

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let arr = []
    let n = matrix.length
    for(let i = 0;i<n;i++){
        for(let j = i+1; j<n;j++){
            [matrix[j][i], matrix[i][j]] = [matrix[i][j], matrix[j][i]]
        }
    }
    function reverse(matrix){
        let p1 = 0
        let p2 = matrix.length-1
        while(p1<p2){
            [matrix[p2], matrix[p1]] = [matrix[p1], matrix[p2]]
            p1++
            p2--
        }
    }
    for(let i = 0;i<n;i++){
        reverse(matrix[i])
    }
};
