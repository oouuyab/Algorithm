/*
Roman to Integer

Solution
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
Example 3:

Input: "IX"
Output: 9
Example 4:

Input: "LVIII"
Output: 58
Explanation: L = 50, V= 5, III = 3.
Example 5:

Input: "MCMXCIV"

Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  //* version 1
  // let convertCharToNum = (char) =>{
  //     if(char === 'M') return 1000
  //     if(char === 'D') return 500
  //     if(char === 'C') return 100
  //     if(char === 'L') return 50
  //     if(char === 'X') return 10
  //     if(char === 'V') return 5
  //     if(char === 'I') return 1
  // }
  // let string = s.split('')

  // let positive = 0
  // let negative = 0

  // for(let i = 0 ; i < string.length ; i++){
  //   let currentNum = convertCharToNum(string[i])
  //   let nextNum = convertCharToNum(string[i+1])
  //   if(currentNum < nextNum){
  //       negative += currentNum
  //   }else{
  //       positive += currentNum
  //   }
  // };
  // return positive - negative

  //* version 2
  let charToNum = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let value = 0;

  for (let i = 0; i < string.length; i++) {
    if (charToNum[s[i]] < charToNum[s[i]]) {
      value -= charToNum[s[i]];
    } else {
      value += charToNum[s[i]];
    }
  }
  return value;
};
