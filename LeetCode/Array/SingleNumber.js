/*
Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //   //* version 1
  //   //! Runtime: 560 ms
  //   //! Memory Usage: 38.2 MB
  //   for (let el of nums) {
  //     if (nums.indexOf(el) === nums.lastIndexOf(el)) return el;
  //   }
  //* version 2
  //! Runtime: 80 ms
  //! Memory Usage: 40.7 MB
  let countObj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!countObj[nums[i]]) countObj[nums[i]] = 1;
    else countObj[nums[i]]++;
  }
  for (let key in countObj) {
    if (countObj[key] === 1) return key;
  }
};
