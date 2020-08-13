/*
Spiral Matrix

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let rowCount = 0;
    let colCount = 0;

    while (rowCount < matrix.length && colCount < matrix.length) {
        let rowEnd = matrix.length - rowCount - 1;
        let colEnd = matrix.length - colCount - 1;
        //태두리 집어 넣기 (순서 : 위 -> 오른쪽 -> 아래 -> 왼쪽)
        for (let row = rowCount; row <= rowEnd; row++) {
            for (let col = colCount; col <= colEnd; col++) {
                if (row === rowCount) {
                    //위
                    result.push(matrix[row][col]);
                } else if (row === rowEnd) {
                    //아래
                    result.push(matrix[row][colEnd - col]);
                }
            }
        }
        //증감문 (row.length !== col.length 면?)
        rowCount++;
        colCount++;
    }
    return result;
};
