// ## 특정 범위에 속하는 요소 찾기

// 배열 arr의 요소 중 a이상 b 이하 범위에 속하는 요소만 골라 새로운 배열에
// 집어넣고, 해당 요소를 출력해주는 함수 `filterRange(arr, a, b)`를 작성해봅시다.

// 새로 작성하는 함수는 기존 배열 arr을 변경하면 안 되고, 반환되는 함수는 새로운
// 배열이어야 합니다.

// ```
// 입력: [5, 3, 8, 1], 1, 4
// 출력: [3, 1]
// ```

// 2번 타자 홍석

/*
정보
- 함수명이 정해져있다. / filterRange(arr, a, b)
- 카피 온 라이트 법칙 사용하기 - arr
- 리턴값은 배열입니다
*/

const filterRange = (arr, a, b) => {
  const result = arr.filter((n) => n >= a && n <= b);
  return result;
};

module.exports = filterRange;
