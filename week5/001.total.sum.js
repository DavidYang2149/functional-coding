// ## 총합 구하기

// 숫자 배열이 주어져 있습니다. 모든 숫자의 합을 구하는 프로그램을 작성해 주세요.

// ```
// 입력: [1, 4, 6, 8, 4, 3, 12, 5, 9]
// 출력: 52
// ```

// 민석님 풀이
const numbers = [1, 4, 6, 8, 4, 3, 12, 5, 9]

const plus = ( a,b )=> {
    return a+b;
}


const array2 = [1, 5, 8, 3]


const calculator = ( array, operator ) => {
    return array.reduce(operator)
}

console.log(calculator(numbers,plus))