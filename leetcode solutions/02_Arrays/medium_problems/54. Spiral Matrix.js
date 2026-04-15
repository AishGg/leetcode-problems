// Given an m x n matrix, return all elements of the matrix in spiral order.

// one way to solve it 

// left to right --> right to bottom --> bottom to left ---> left to top


/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let left = 0
    let right = n-1
    let top = 0
    let bottom = m-1
    let arr = []

    while(top<=bottom && left<=right){

        for(let i = left; i<=right;i++){
            arr.push(matrix[top][i])
        }
        top++
        for(let i = top;i<=bottom;i++){
            arr.push(matrix[i][right])
        }
        right--
        if(top<=bottom){
            for(let i = right;i>=left;i--){
                arr.push(matrix[bottom][i])
            }
            bottom--
        }

        if(left<=right){
            for(let i = bottom; i>=top;i--){
                arr.push(matrix[i][left])
            }
            left++
        }

    
    }
    return arr

};