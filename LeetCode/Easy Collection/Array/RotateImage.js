/*
Rotate Image

You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Note:

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Example 1:

Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
Example 2:

Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]

 Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

1 [0,0] => [0,2] : [row,col] => [col, row.length - row]
2 [0,1] => [1,2]
3 [0,2] => [2,2]

4 [1,0] => [0,1] : [row,col] => [col, row.length - row]
5 [1,1] => [1,1]
6 [1,2] => [2,1]

7 [2,0] => [0,0] : [row,col] => [col, row.length - row]
8 [2,1] => [1,0]
9 [2,2] => [2,0]

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]

*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  let arr = JSON.parse(JSON.stringify(matrix));
  let rowLeng = matrix.length;
  let colLeng = matrix[0].length;
  for (let row = 0; row < rowLeng; row++) {
    for (let col = 0; col < colLeng; col++) {
      matrix[col][rowLeng - 1 - row] = arr[row][col];
    }
  }
};
