// 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예
// todo_list	finished	result
// ["problemsolving", "practiceguitar", "swim", "studygraph"]	[true, false, true, false]	["practiceguitar", "studygraph"]

// 입출력 예 설명
// 입출력 예 #1

// 예제 1번의 todo_list 중에서 "problemsolving"과 "swim"은 마쳤고,
//  "practiceguitar"와 "studygraph"는 아직 마치지 못했으므로
// todo_list에서 나온 순서대로 담은 문자열 배열 ["practiceguitar", "studygraph"]를 return 합니다.

function solution(todo_list, finished) {
  var answer = [];
  for (let i = 0; i < todo_list.length; i++) {
    if (finished[i] === false) answer.push(todo_list[i]);
  }
  return answer;
}
