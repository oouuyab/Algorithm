/*
Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // let result = false;
    // for (let i = 0; i < nums.length - 2; i++) {
    //     for (let j = i + 1; j < nums.length - 1; j++) {
    //         if (nums[i] >= nums[j]) break;
    //         else {
    //             for (let k = j + 1; k < nums.length; k++) {
    //                 if (nums[j] < nums[k]) result = true;
    //             }
    //         }
    //     }
    // }

    let result = false;

    let smallNum1 = Number.MAX_SAFE_INTEGER; // 9007199254740991
    let smallNum2 = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] <= smallNum1) smallNum1 = nums[i];
        else if (nums[i] <= smallNum2) smallNum2 = nums[i];
        else result = true;
        console.log(smallNum1, smallNum2, nums[i], result);
    }

    return result;
};
