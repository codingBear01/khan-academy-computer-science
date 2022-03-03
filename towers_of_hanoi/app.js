const route = [];

function hanoi(num, from, to, temp) {
  //������ �� ���� ������ �ٷ� �ű�� ��.
  //��������
  if (num === 1) {
    route.push([from, to]);
    return NaN;
  }

  hanoi(num - 1, from, temp, to); // n - 1���� ������ temp��տ� �ű�. ���� to -> temp, temp -> to �� ����
  route.push([from, to]); // n��° ������ from��տ��� to������� �ű�. n��° ������ ���� �ִ� n - 1���� ������ temp�� �� �Ű�� ������ ����.
  hanoi(num - 1, temp, to, from); // temp��տ� �ִ� n - 1���� ������ to������� �ű�. temp -> from, from -> temp �� ����.
}
hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);

/*
���� ����(7�ܰ�)
hanoi(3, A, B, C); // 4. push A, B: 3�� ���� from(A)���� to(B)�� �̵�

  hanoi(2, A, C, B) // 2. push A, C: 2�� ���� from(A)���� temp(C)�� �̵�

    hanoi(1, A, B, C) // 1. push A, B: 1�� ���� from(A)���� to(B)�� �̵�
    hanoi(1, B, C, A) // 3. push B, C: 1�� ���� to(B)���� temp(C)�� �Űܼ� 2�� ���� ���� �ױ�

  hanoi(2, C, B, A)  // 6. push C, B: 2�� ���� temp(C)����  to(B)�� �̵�
  
    hanoi(1, C, A, B) // 5. push C, A: 2�� ���� �ִ� 1�� ���� temp(C)���� from(A)�� �̵�
    hanoi(1, A, B, C) // 7. push A, B: 1�� ���� from(A)���� to(B)�� �̵��ϸ鼭 �ϼ�.

*/

/*
��Ϳ��� �ʿ��� �� 2����
1. ���� ����
2. ���� ����

* ��������: ������ �ϳ� ������ ��
* ������ ���� ����
  1. N���� ������ �ű�� ���ؼ��� N-1���� ������ temp������� �Űܾ� ��.  2. N��° ������ ������ ������� �ű��.
  3. temp��տ� �ִ� N-1���� ������ ������ ������� �ű��.

  recursion�� declarative programming ������ �ʿ�

  ������ vs �����
  �������� �������� ���ܸ� ��ǻ�Ϳ��� �˷��ִ� ���(SQL)
  ������� ��ǻ�Ϳ��� �������� �̸������ ������ ������ �˷��ִ� ���(JAVA)
*/
