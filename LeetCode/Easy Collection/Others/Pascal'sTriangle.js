/*
Pascal's Triangle

Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.


In Pascal's triangle, each number is the sum of the two numbers directly above it.

Example:

Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

[
 [1], index : 0, value : 1
 [1,1], index : 1, value : [1,1]
 [1,2,1], index : 2, value : [1,,1]
 [1,3,3,1], index : 3, value : [1,index([]), index, 1]
 [1,4,6,4,1], index : 4, value : [1,index,,index,1]
 [1,5,10,10,5,1]
]

 */

/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  if (numRows === 0) return [];

  let triangle = [[1]];

  for (let i = 1; i < numRows; i++) {
    let arr = [1];
    let beforeArr = triangle[i - 1];
    for (let j = 1; j < beforeArr.length; j++) {
      arr[j] = beforeArr[j - 1] + beforeArr[j];
    }
    arr.push(1);
    triangle.push(arr);
  }
  return triangle;
};
