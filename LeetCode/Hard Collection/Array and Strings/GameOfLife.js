/*
Game of Life

Solution
According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."

Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.

Example:

Input: 
[
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]
Output: 
[
  [0,0,0],
  [1,0,1],
  [0,1,1],
  [0,1,0]
]
Follow up:

Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.
In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    // let newBoard = JSON.parse(JSON.stringify(board));
    // let checkNeighbors = (curI, curJ) =>{
    //     let liveNeighbors = 0;
    //     for(let i = curI - 1 ; i <= curI + 1 ; i++){
    //         if(!newBoard[i]){
    //             continue
    //         }else{
    //             for(let j = curJ -1 ; j <= curJ + 1 ; j++){
    //                 if(!newBoard[i][j] || (i === curI && j === curJ)){
    //                     continue;
    //                 }else{
    //                     if(newBoard[i][j] === 1){
    //                         liveNeighbors++;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     if(newBoard[curI][curJ] === 1){
    //         if(liveNeighbors === 2 || liveNeighbors === 3){
    //             board[curI][curJ] = 1;
    //         } else {
    //             board[curI][curJ] = 0;
    //         }
    //     }  else {
    //         if(liveNeighbors === 3){
    //             board[curI][curJ] = 1;
    //         } else {
    //             board[curI][curJ] = 0;
    //         }
    //     }
    // }
    // for(let i = 0; i < newBoard.length; i++){
    //     for(let j = 0 1; j <newBoard[0].length ; j++){
    //         checkNeighbors(i,j)
    //     }
    // }
    // return board;

    let possibleRowIdx = [-1, -1, -1, 0, 0, 1, 1, 1];
    let possibleColIdx = [-1, 0, 1, -1, 1, -1, 0, 1];

    let checkNeighbors = (row, col) => {
        let liveNeighbors = 0;
        for (let i = 0; i < 8; i++) {
            let newRow = row + possibleRowIdx[i];
            let newCol = col + possibleColIdx[i];
            if (board[newRow] && board[newRow][newCol]) {
                liveNeighbors++;
            }
        }
        return liveNeighbors;
    };

    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            let neighbors = checkNeighbors(row, col);
            if (board[row][col] === 1 && neighbors !== 3 && neighbors !== 2) {
                board[row][col] = 2;
            } else if (board[row][col] === 0 && neighbors === 3) {
                board[row][col] = undefined;
            }
        }
    }
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 2) {
                board[row][col] = 0;
            } else if (board[row][col] === undefined) {
                board[row][col] = 1;
            }
        }
    }
};
