/*
Longest Palindromic Substring

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length === 0) {
        return "";
    }
    let longestPal = s[0];

    let findPal = (pal, left, right) => {
        while (s[left] && s[right] && s[left] === s[right]) {
            // pal = s[left] + pal + s[right];
            left--;
            right++;
        }
        // return pal;
        return s.slice(left + 1, right);
    };
    for (let i = 0; i < s.length - 1; i++) {
        let pal = "";
        if (s[i + 1] && s[i] === s[i + 1]) {
            pal = findPal("", i, i + 1);
            if (longestPal.length < pal.length) {
                longestPal = pal;
            }
        }
        if (s[i + 2] && s[i] === s[i + 2]) {
            pal = findPal(s[i + 1], i, i + 2);
            if (longestPal.length < pal.length) {
                longestPal = pal;
            }
        }
    }
    return longestPal;
};
