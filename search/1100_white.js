const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let board = input.map((el) => el.split(""));
  let count = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (row % 2 === 0 && col % 2 === 0 && board[row][col] === "F") {
        count++;
      }
      if (row % 2 === 1 && col % 2 === 1 && board[row][col] === "F") {
        count++;
      }
    }
  }
  console.log(count);
  process.exit();
});
