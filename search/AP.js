/*
수열의 합 출처분류
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	10680	2451	1995	25.557%
문제
N과 L이 주어질 때, 합이 N이면서, 길이가 적어도 L인 가장 짧은 연속된 음이 아닌 정수 리스트를 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N과 L이 주어진다. N은 1,000,000,000보다 작거나 같은 자연수이고, L은 2보다 크거나 같고, 100보다 작거나 같은 자연수이다.

출력
만약 리스트의 길이가 100보다 작거나 같으면, 연속된 수를 첫째 줄에 공백으로 구분하여 출력한다. 만약 길이가 100보다 크거나 그러한 수열이 없을 때는 -1을 출력한다.

예제 입력 1 
18 2
예제 출력 1 
5 6 7
*/
/*
트리 분류
시간 제한	메모리 제한	제출	정답	맞은 사람	정답 비율
2 초	128 MB	15832	3665	2934	25.493%
문제
트리에서 리프 노드란, 자식의 개수가 0인 노드를 말한다.

트리가 주어졌을 때, 노드 중 하나를 제거할 것이다. 그 때, 남은 트리에서 리프 노드의 개수를 구하는 프로그램을 작성하시오.

예를 들어, 다음과 같은 트리가 있다고 하자.



현재 리프 노드의 개수는 3개이다. (초록색 색칠된 노드) 이때, 1번을 제거한다고 하면, 다음과 같이 된다.



이제 리프 노드의 개수는 1개이다.

입력
첫째 줄에 트리의 노드의 개수 N이 주어진다. N은 50보다 작거나 같은 자연수이다. 둘째 줄에는 0번 노드부터 N-1번 노드까지, 각 노드의 부모가 주어진다. 
만약 부모가 없다면 (루트) -1이 주어진다. 셋째 줄에는 지울 노드의 번호가 주어진다.

출력
첫째 줄에 입력으로 주어진 트리에서 입력으로 주어진 노드를 지웠을 때, 리프 노드의 개수를 출력한다.

예제 입력 1 
5
-1 0 0 1 1
2
예제 출력 1 
2
//@ [ 0, 1, 2, 3, 4]
//* [-1, 0, 0, 1, 1] -1: root, 0: 0번째 인덱스의 child, 1: 1번째 인덱스의 child 
*/
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [targetSum, targetLength] = input[0].split(" ").map((el) => parseInt(el));
  let targetNum;
  let targetNumArr = [];

  for (let startNum = 1; startNum < 10; startNum++) {
    targetNum = makeTargetNum(startNum, targetSum, targetLength);
    if (targetNum !== -1) {
      targetNumArr.push(targetNum);
    }
  }
  if (targetNumArr.length === 0) {
    console.log(-1);
  } else {
    let result = targetNumArr.map((el) => parseInt(el)).sort((a, b) => a - b);
    let list = makeList(result[0]);
    if (list.length <= 100) {
      console.log(makeList(result[0]));
    } else {
      console.log(-1);
    }
  }
  process.exit();
});

let makeTargetNum = (startNum, targetSum, targetLength) => {
  let result = false;
  let targetNum = "";
  for (let num = startNum; num < 10; num++) {
    let sum = 0;
    targetNum += num;
    targetNum.split("").forEach((el) => (sum += parseInt(el)));
    console.log(targetNum, sum);
    if (targetNum.length < targetLength) continue;
    if (sum === targetSum) {
      result = true;
      break;
    }
  }
  if (result === true) {
    return targetNum;
  } else {
    return -1;
  }
};

let makeList = (targetNum) => {
  let list = "";
  let targetNumArr = String(targetNum).split("");
  for (let i = 0; i < targetNumArr.length; i++) {
    if (i === targetNum.length - 1) {
      list += targetNumArr[i];
    } else {
      list = list + targetNumArr[i] + " ";
    }
  }
  return list;
};
