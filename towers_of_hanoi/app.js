const route = [];

function hanoi(num, from, to, temp) {
  //원판이 한 개일 때에는 바로 옮기면 됨.
  //종료조건
  if (num === 1) {
    route.push([from, to]);
    return NaN;
  }

  hanoi(num - 1, from, temp, to); // n - 1개의 원반을 temp기둥에 옮김. 따라서 to -> temp, temp -> to 로 변경
  route.push([from, to]); // n번째 원반을 from기둥에서 to기둥으로 옮김. n번째 원반을 막고 있던 n - 1개의 원반을 temp로 다 옮겼기 때문에 가능.
  hanoi(num - 1, temp, to, from); // temp기둥에 있던 n - 1개의 원반을 to기둥으로 옮김. temp -> from, from -> temp 로 변경.
}
hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);

/*
실행 과정(7단계)
hanoi(3, A, B, C); // 4. push A, B: 3번 원반 from(A)에서 to(B)로 이동

  hanoi(2, A, C, B) // 2. push A, C: 2번 원반 from(A)에서 temp(C)로 이동

    hanoi(1, A, B, C) // 1. push A, B: 1번 원반 from(A)에서 to(B)로 이동
    hanoi(1, B, C, A) // 3. push B, C: 1번 원반 to(B)에서 temp(C)로 옮겨서 2번 원반 위에 쌓기

  hanoi(2, C, B, A)  // 6. push C, B: 2번 원반 temp(C)에서  to(B)로 이동
  
    hanoi(1, C, A, B) // 5. push C, A: 2번 위에 있던 1번 원반 temp(C)에서 from(A)로 이동
    hanoi(1, A, B, C) // 7. push A, B: 1번 원반 from(A)에서 to(B)로 이동하면서 완성.

*/

/*
재귀에서 필요한 것 2가지
1. 종료 조건
2. 문제 정의

* 종료조건: 원반이 하나 남으면 끝
* 문제의 정의 선언
  1. N개의 원반을 옮기기 위해서는 N-1개의 원반을 temp기둥으로 옮겨야 함.  2. N번째 원반을 목적지 기둥으로 옮긴다.
  3. temp기둥에 있는 N-1개의 원반을 목적지 기둥으로 옮긴다.

  recursion은 declarative programming 감각이 필요

  선언적 vs 명령형
  선언적은 목적지와 수단만 컴퓨터에게 알려주는 방식(SQL)
  명령형은 컴퓨터에게 목적지에 이르기까지 과정을 일일이 알려주는 방식(JAVA)
*/
