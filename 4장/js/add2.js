// 1~10까지 합계를 선언하는 함수
// 함수 선언
function calcSum(num) {
    let sum = 0;
    for(let i = 1; i<=num; i++) {
        sum += i;
    }

    document.write(`<h1> 1부터 ${num}까지의 합은 ${sum} 입니다.</h1>`);
}

//함수 호출
calcSum(10); // 인수값을 가지고 호출