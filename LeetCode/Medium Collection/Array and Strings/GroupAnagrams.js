/*
Group Anagrams

Solution
Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result = {};

    for (let str of strs) {
        let sortedStr = str.split("").sort().join();
        if (result[sortedStr]) {
            result[sortedStr].push(str);
        } else {
            result[sortedStr] = [str];
        }
    }

    return Object.values(result);
};
