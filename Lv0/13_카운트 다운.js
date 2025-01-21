// 정수 start_num와 end_num가 주어질 때, start_num에서 end_num까지
// 1씩 감소하는 수들을 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

// 입출력 예 #1

// 10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.

function solution(start_num, end_num) {
  var answer = [];
  for (i = start_num; i >= end_num; i--) answer.push(i);

  return answer;
}
