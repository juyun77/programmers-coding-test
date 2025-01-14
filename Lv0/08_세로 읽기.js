// 문자열 my_string과 두 정수 m, c가 주어집니다.
// my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을
// 문자열로 return 하는 solution 함수를 작성해 주세요.

// 입출력 예 #1
// 예제 1번의 my_string을 한 줄에 4 글자씩 쓰면 다음의 표와 같습니다.
// |1열|2열|3열|4열|
// |i|h|r|h|
// |b|a|k|r|
// |f|p|n|d|
// |o|p|l|j|
// |h|y|g|c|
// 2열에 적힌 글자를 세로로 읽으면 happy이므로 "happy"를 return 합니다.

function solution(my_string, m, c) {
  var answer = [];
  var arr = [];

  for (i = 0; i < my_string.length; i++) {
    answer[i] = my_string.slice(i * m, i * m + m);
    arr.push(answer[i][c - 1]);
  }

  return arr.join("");
}
