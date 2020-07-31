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
  //     let binaryX = x.toString(2)
  //     let binaryY = y.toString(2)

  //     while(binaryX.length !== binaryY.length){
  //         if(binaryX.length < binaryY.length){
  //             binaryX = '0' + binaryX;
  //         }else{
  //             binaryY = '0' + binaryY;
  //         };
  //     };

  //     let distance = 0;

  //     for(let i = 0 ; i < binaryX.length ; i++){
  //         console.log(binaryX[i], binaryY[i]);
  //         if(binaryX[i] !== binaryY[i]) distance++;
  //     }

  //     return distance;

  let distance = x ^ y; //X XOR Y 0101
  let count = 0;
  while (distance !== 0) {
    console.log(distance & 1);
    if (distance & 1) {
      count++;
    }
    distance = distance >> 1; //0010 // 0000
  }

  return count;
};
