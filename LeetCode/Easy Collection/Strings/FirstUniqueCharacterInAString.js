/*
First Unique Character in a String

Solution
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.
 

Note: You may assume the string contains only lowercase English letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let counts = {};
    for (let i = 0; i < s.length; i++) {
        if (!counts[s[i]]) {
            counts[s[i]] = { index: i, count: 1 };
        } else {
            counts[s[i]].count++;
        }
    }
    for (let char in counts) {
        if (counts[char].count === 1) {
            return counts[char].index;
        }
    }

    return -1;
};
