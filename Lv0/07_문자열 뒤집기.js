// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때,
// my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// 입출력 예 #1

// 예제 1번의 my_string에서 인덱스 6부터 인덱스 12까지를 뒤집은 문자열은 "ProgrammerS123"이므로 "ProgrammerS123"를 return 합니다.
// 입출력 예 #2

// 예제 2번의 my_string에서 인덱스 4부터 인덱스 10까지를 뒤집으면 원래 문자열과 같은 "Stanley1yelnatS"이므로 "Stanley1yelnatS"를 return 합니다.

function solution(my_string, s, e) {
  var answer = "";
  my_string = my_string.split("");
  let str = my_string.slice(s, e + 1).reverse();
  my_string.splice(s, e - s + 1, ...str);

  return my_string.join("");
}
