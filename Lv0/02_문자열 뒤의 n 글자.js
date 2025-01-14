// 문자열 my_string과 정수 n이 매개변수로 주어질 때,
// my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예 #1

// 예제 1번의 my_string에서 뒤의 11글자는 "grammerS123"이므로 이 문자열을 return 합니다.
// 입출력 예 #2

// 예제 2번의 my_string에서 뒤의 5글자는 "W0r1d"이므로 이 문자열을 return 합니다.

let my_string = "ProgrammerS123";
let n = 11;

function solution(my_string, n) {
  var answer = "";

  let start = my_string.length - n;

  answer = my_string.slice(start, start + n);

  return answer;
}

console.log(solution(my_string, n));
