// 정수 배열 arr가 주어집니다. 이때 arr의 원소는 1 또는 0입니다.
// 정수 idx가 주어졌을 때, idx보다 크면서 배열의 값이 1인 가장 작은 인덱스를 찾아서 반환하는 solution 함수를 완성해 주세요.

// 단, 만약 그러한 인덱스가 없다면 -1을 반환합니다.

// 입출력 예 #1

// 1보다 크면서 원소가 1인 가장 작은 인덱스는 3입니다. 따라서 3을 return 합니다.
// 입출력 예 #2

// 4번 인덱스 이후에 1은 등장하지 않습니다. 따라서 -1을 return 합니다.
// 입출력 예 #3

// 3번 인덱스의 값이 1입니다. 따라서 3을 return 합니다

function solution(arr, idx) {
  var answer = 0;
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }
  return -1;
}
