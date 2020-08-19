/*
Sliding Window Maximum

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Follow up:
Could you solve it in linear time?

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 

Constraints:

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
1 <= k <= nums.length

*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    let result = [];
    let curIdx = 0;
    let arr = [];

    while (curIdx < nums.length) {
        if (arr.length < k) {
            arr.push(nums[curIdx]);
        }
        if (arr.length === k) {
            result.push(Math.max.apply(null, arr));
            arr.shift();
        }
        curIdx++;
    }

    return result;

    // let result = [];
    // let arr = [];

    // for(let i = 0; i < nums.length; i++){
    //     if(arr.length === k){
    //         arr.shift();
    //     }
    //     if(arr[0] > nums[i]){
    //         arr.push(nums[i]);
    //     } else {
    //         arr = [nums[i]];
    //     }
    //     if(i >= k - 1){
    //         result.push(arr[0]);
    //     }
    // }
    // return result;
};
