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
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let node = input[1].split(" ").map((el) => parseInt(el));
  let targetIndex = parseInt(input[2]);
  console.log(node);
  let leaf = [];

  for (let i = 0; i < node.length; i++) {
    console.log(i, node[i]);
    console.log("리프노드니?");
    if (isLeafNode(node, i) === true) {
      console.log("예압");
      console.log(`${node[i]}가 targetIndex와 같니?(니 부모가 없어지니?)`);
      if (node[i] !== targetIndex) {
        console.log("네버");
        console.log(`${i}가 targetIndex와 같니?(너가 없어지니?)`);
        if (i !== targetIndex) {
          console.log("그럴리가~");
          leaf.push(i);
        }
      }
    }
    console.log(leaf);
    console.log(leaf.length);
  }
  process.exit();
});

let isLeafNode = (node, nodeIndex) => {
  let result = true;
  if (node.indexOf(nodeIndex) > -1) result = false;
  return result;
};
