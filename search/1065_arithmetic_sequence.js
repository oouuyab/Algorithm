/*
한수 성공분류
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	49819	24915	21397	50.492%
문제
어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 

입력
첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

출력
첫째 줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

예제 입력 1 
110
예제 출력 1 
99
예제 입력 2 
1
예제 출력 2 
1
예제 입력 3 
210
예제 출력 3 
105
예제 입력 4 
1000
예제 출력 4 
144
*/
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
  let count = 0;

  for (let i = 1; i <= target; i++) {
    if (i < 100) {
      count++;
    } else {
      let eachNum = i
        .toString()
        .split("")
        .map((el) => parseInt(el));
      //* 100 => '100' => ['1','0','0'] => [1, 0, 0]
      let commonDifference = eachNum[0] - eachNum[1]; //! 공차
      for (let innerI = 1; innerI < eachNum.length - 1; innerI++) {
        if (eachNum[innerI] - eachNum[innerI + 1] !== commonDifference) break;
        if (innerI === eachNum.length - 2) count++;
      }
    }
  }
  console.log(count);
  process.exit();
});
