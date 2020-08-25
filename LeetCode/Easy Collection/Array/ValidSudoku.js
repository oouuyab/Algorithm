/*
Valid Sudoku

Solution
Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

A partially filled sudoku which is valid.

The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

Example 1:

Input:
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: true
Example 2:

Input:
[
  ["8","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being 
    modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.
The given board contain only digits 1-9 and the character '.'.
The given board size is always 9x9.
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  //가로
  for (let i = 0; i < board.length; i++) {
    if (isUnique(board[i]) === false) {
      return false;
    }
  }
  //세로
  for (let j = 0; j < board[0].length; j++) {
    let col = [];
    for (let i = 0; i < board.length; i++) {
      col.push(board[i][j]);
    }
    if (isUnique(col) === false) {
      return false;
    }
  }
  //9칸
  let startI = [0, 3, 6];
  let startJ = [0, 3, 6];
  for (let startIIdx = 0; startIIdx < startI.length; startIIdx++) {
    for (let startJIdx = 0; startJIdx < startJ.length; startJIdx++) {
      let num9 = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          num9.push(board[startI[startIIdx] + i][startJ[startJIdx] + j]);
        }
      }
      if (isUnique(num9) === false) {
        return false;
      }
    }
  }
  return true;
};

let isUnique = (arr) => {
  let obj = {};
  for (let el of arr) {
    if (el === '.') {
      continue;
    }
    if (el in obj) {
      return false;
    } else {
      obj[el] = 1;
    }
  }
  return true;
};

// /**
//  * @param {character[][]} board
//  * @return {boolean}
//  */
// var isValidSudoku = function(board) {
//   let num9Set = new Set();

//   for(let i = 0; i < 9; i++){
//       let rowSet = new Set();
//       let colSet = new Set();

//       for(let j = 0; j < 9; j++){
//           let row = board[i][j];
//           let col = board[j][i];
//           let num9 = board[i][j] + '-' + Math.floor(i / 3) + '-' + Math.floor(j / 3);
//           // board[i][j]-row칸-col칸 -> 8-0-0
//           if(row !== '.'){
//               if(rowSet.has(row)){
//                   return false;
//               }
//               rowSet.add(row);
//           }

//           if(col !== '.'){
//               if(colSet.has(col)){
//                   return false;
//               }
//               colSet.add(col);
//           }
//           if(num9.startsWith('.') === false){
//               if(num9Set.has(num9)){
//                   return false;
//               }
//               num9Set.add(num9);
//           }
//       }
//   }
//   return true;
// }
