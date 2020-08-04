/*
Generate Parentheses

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let solution = [];

  let makeParenthesis = (parenthesis) => {
    if (parenthesis.length === 2 * n) {
      solution.push(parenthesis);
    } else {
      if (checkValidate(parenthesis + ")")) {
        makeParenthesis(parenthesis + ")");
      }
      if (checkValidate(parenthesis + "(")) {
        makeParenthesis(parenthesis + "(");
      }
    }
  };

  let checkValidate = (parenthesis) => {
    let openCount = 0;
    let closeCount = 0;
    for (let el of parenthesis) {
      if (el === "(") openCount++;
      else closeCount++;
      if (openCount < closeCount) return false;
      if (openCount > n || closeCount > n) return false;
    }
    return true;
  };

  let parenthesis = "(";
  makeParenthesis(parenthesis);

  return solution;
};
