//* 0 / 1 1 2 3 5 8 13 ...

//! 표면적으로 접근했을 때
//? 시간 복잡도 : O(2^n)

let fibo1 = (n) => {
  if (n === 1) return 1;
  if (n === 2) return 1;
  return fibo1(n - 1) + fibo1(n - 2);
};

//! 동적계획법
//? 시간 복잡도 : O(n)
let fiboStorage = [0, 1, 1];
let fibo2 = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }
  if (!fiboStorage[n]) {
    fiboStorage.push(fibo2(n - 2) + fibo2(n - 1));
  }
  return fiboStorage[n];
};

console.time("fibo1");
console.log(fibo1(20));
console.timeEnd("fibo1");

console.time("fibo2");
console.log(fibo2(20));
console.timeEnd("fibo2");
