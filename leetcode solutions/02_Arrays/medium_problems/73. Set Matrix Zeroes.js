// brute force way

// creating extra arrays and assiging 1 for that row or column


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let row = []
    let col = []
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(matrix[i][j] == 0){
                row[i] = 1
                col[j] = 1
            }
        }
    }
    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(row[i] || col[j]){
                matrix[i][j] = 0
            }
        }
    }
};

// as we know we have to take n*n time to go through the matrix 
// in our brute force approch we use m + n space complexity

// so in optimal way we will try to improve it by reducing the space taken to solve the problem

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length
    let n = matrix[0].length
    let col0 = 1;

    for(let i = 0;i<m;i++){
        for(let j = 0;j<n;j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = 0
                if( j!=0){
                    matrix[0][j] = 0
                }
                else{
                    col0 = 0
                }
            }
        }
    }
    for(let i = 1;i<m;i++){
        for(let j = 1;j<n;j++){
            if(matrix[i][j] != 0){
                if(matrix[0][j] == 0 || matrix[i][0] == 0){
                    matrix[i][j] = 0
                }
            }
        }
    }
    if(matrix[0][0]==0){
        for(let j = 0;j<n;j++) matrix[0][j] = 0
    }
    if(col0 == 0){
        for(let i = 0; i<m;i++){
            matrix[i][0] = 0
        }
    }
};

