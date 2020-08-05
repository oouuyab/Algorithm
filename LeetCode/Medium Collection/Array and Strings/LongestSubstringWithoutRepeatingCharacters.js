/*
Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    // let longestLeng = 0;

    // for (let i = 0; i < s.length; i++) {
    //     let substring = s[i];
    //     for (let j = i + 1; j < s.length; j++) {
    //         if (substring.includes(s[j])) break;
    //         else substring += s[j];
    //     }
    //     if (substring.length > longestLeng) longestLeng = substring.length;
    // }
    // return longestLeng;

    let longestLeng = 0;
    let substring = "";
    let startIdx;
    for (let i = 0; i <= s.length; i++) {
        if (substring === "") startIdx = i;
        if (substring.includes(s[i]) || !s[i]) {
            if (longestLeng < substring.length) longestLeng = substring.length;
            i = startIdx;
            substring = "";
        } else substring += s[i];
    }
    return longestLeng;
};

/*
 for(let i = 0 ; i < 10 ; i++){
     console.log(i)
     if(i === 3) i = 7;
 }
  0
  1
  2
  3
  8
  9
 */
