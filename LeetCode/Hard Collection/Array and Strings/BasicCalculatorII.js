/*
Basic Calculator II
Implement a basic calculator to evaluate a simple expression string.

The expression string contains only non-negative integers, +, -, *, / operators and empty spaces . The integer division should truncate toward zero.

Example 1:

Input: "3+2*2"
Output: 7
Example 2:

Input: " 3/2 "
Output: 1
Example 3:

Input: " 3+5 / 2 "
Output: 5
Note:

You may assume that the given expression is always valid.
Do not use the eval built-in library function.
*/

/*
/**
 * @param {string} s
 * @return {number}
 */

// var calculate = function(s) {
//     let num = [];
//     let operator = [];
//     let noEmptyS = '';
//     let innerNum = '';

//     for(let i = 0; i < s.length; i++){
//         if(s[i] !== ' '){
//             noEmptyS += s[i];
//         }
//     }
//     //'12+24'
//     for(let i = 0; i < noEmptyS.length; i++){
//         if(noEmptyS[i] === '+' || noEmptyS[i] === '-' || noEmptyS[i] === '*' || noEmptyS[i] === '/'){
//             num.push(Number(innerNum));
//             innerNum = '';
//             operator.push(noEmptyS[i]);
//         } else {
//             innerNum += noEmptyS[i];
//         }

//         if(i === noEmptyS.length -1){
//             num.push(Number(innerNum));
//         }
//     }

//     if(operator.length === 0){
//         return Number(s);
//     }

//     while(operator.indexOf('*') >= 0 || operator.indexOf('/') >= 0){
//         let mulIdx = operator.indexOf('*');
//         let divIdx = operator.indexOf('/');
//         if(mulIdx >= 0 && divIdx >= 0){
//             if(mulIdx > divIdx){
//                 operator.splice(divIdx, 1); ['*']  [0,3]
//                 num.splice(divIdx, 2, Math.floor(num[divIdx] / num[divIdx + 1]));
//             } else {
//                 operator.splice(mulIdx, 1);
//                 num.splice(mulIdx, 2, num[mulIdx] * num[mulIdx + 1]);
//             }
//         } else if(mulIdx === -1){
//             operator.splice(divIdx, 1);
//             num.splice(divIdx, 2, Math.floor(num[divIdx] / num[divIdx + 1]));
//         } else if(divIdx === -1){
//             operator.splice(mulIdx, 1);
//             num.splice(mulIdx, 2, num[mulIdx] * num[mulIdx + 1]);
//         }
//     }

//     let result = num[0];

//     for(let i = 0; i < operator.length; i++){
//         if(operator[i] === '+'){
//             result += num[i+1];
//         } else if(operator[i] === '-') {
//             result -= num[i+1];
//         }
//     }

//     return result;
// };

var calculate = function (s) {
    let stack = [];
    let op = "+";
    let num = 0;
    s = s.trim();
    for (let i = 0; i < s.length; i++) {
        let cur = s[i];
        if (cur === " ") continue;
        if (isNaN(cur) === false) {
            num = num * 10 + cur.charCodeAt(0) - "0".charCodeAt(0);
        }
        if (isNaN(cur) || i === s.length - 1) {
            if (op === "+") {
                stack.push(num);
            }
            if (op === "-") {
                stack.push(-num);
            }
            if (op === "*") {
                stack.push(stack.pop() * num);
            }
            if (op === "/") {
                stack.push(parseInt(stack.pop() / num, 10));
            }
            op = cur;
            num = 0;
        }
    }
    return stack.reduce((a, b) => a + b);
};
