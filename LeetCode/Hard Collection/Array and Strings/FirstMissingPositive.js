/*
  First Missing Positive
  
Given an unsorted integer array, find the smallest missing positive integer.

Example 1:

Input: [1,2,0]
Output: 3
Example 2:

Input: [3,4,-1,1]
Output: 2
Example 3:

Input: [7,8,9,11,12]
Output: 1
Follow up:

Your algorithm should run in O(n) time and uses constant extra space.
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    // nums.sort((a, b) => a - b);

    // let firstPositive = 1;
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] === firstPossitive) {
    //         firstMissingPositive++;
    //     }
    // }
    // return firstMissingPositive;

    if (nums.length === 0) {
        return 1;
    }

    let containsOne = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            containsOne = 1;
        } else if (nums[i] < 0 || nums[i] > nums.length) {
            nums[i] = 1;
        }
    }
    if (containsOne === 0) {
        return 1;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i]) - 1] > 0) {
            nums[Math.abs(nums[i]) - 1] *= -1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }
    return nums.length + 1;
};
