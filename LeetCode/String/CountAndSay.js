/*
Count and Say

The count-and-say sequence is the sequence of integers with the first five terms as following:

1.     1
2.     11
3.     21
4.     1211
5.     111221
1 is read off as "one 1" or 11.
11 is read off as "two 1s" or 21.
21 is read off as "one 2, then one 1" or 1211.

Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the previous member read off the digits, counting the number of digits in groups of the same digit.

Note: Each term of the sequence of integers will be represented as a string.

 

Example 1:

Input: 1
Output: "1"
Explanation: This is the base case.
Example 2:

Input: 4
Output: "1211"
Explanation: For n = 3 the term was "21" in which we have two groups 
*/

/**
 * @param {number} n
 * @return {string}
 */
//! 1
//! 11
//! 21
//! 1211
//! 111221
//! 312211
var countAndSay = function (n) {
  let targetCount = n;
  let currentCount = 1;
  let number = "1";
  if (n === 1) return "1";
  else return makeCountAndSay(number, currentCount, targetCount);
};

let makeCountAndSay = (number, currentCount, targetCount) => {
  let countNumber = "";
  let countObj = {};
  countObj[number[0]] = 1;
  for (let i = 0; i < number.length - 1; i++) {
    if (number[i] === number[i + 1]) {
      countObj[number[i]]++;
      if (i + 1 === number.length - 1) {
        countObj[number[i]]++;
        countObjToCountNumber(countObj, countNumber);
      }
    } else {
      countObjToCountNumber(countObj, countNumber);
      countObj = {};
      countObj[number[i]] = 1;
    }
  }
  if (currentCount === targetCount) {
    return countNumber;
  } else {
    currentCount++;
    return makeCountAndSay(countNumber, currentCount, targetCount);
  }
};

let countObjToCountNumber = () => {
  let key = Ojbect.keys(countObj)[0];
  countNumber += countObj[key] + key;
};
