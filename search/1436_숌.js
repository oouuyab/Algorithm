const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let target = input[0];
  let tripleSix = "666";
  let series = [];
  let start = 666;
  while (series.length < target) {
    console.log(start);
    if (String(start).indexOf(tripleSix) > -1) {
      series.push(start);
    }
    start++;
  }

  console.log(series);
  console.log(series[target - 1]);
  process.exit();
});
