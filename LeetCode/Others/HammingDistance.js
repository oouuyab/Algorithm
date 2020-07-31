/*
Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  //* 처음 접근
  //   let binaryX = x.toString(2); //10000
  //   let binaryY = y.toString(2); //01111

  //   while (binaryX.length !== binaryY.length) {
  //     binaryX.length < binaryY.length ? (binaryX = "0" + binaryX) : (binaryY = "0" + binaryY);
  //   }

  //   let distance = 0;

  //   for (let i = 0; i < binaryX.length; i++) {
  //     if (binaryX[i] !== binaryY[i]) distance++;
  //   }

  //   return distance;

  //* 비트연산자
  let distance = x ^ y; //X XOR Y 0101
  let count = 0;
  while (distance !== 0) {
    if (distance & 1) {
      count++;
    }
    distance = distance >> 1; //0101 => 0010 => 0000
  }

  return count;
};
