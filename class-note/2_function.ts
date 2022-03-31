// TS함수 : 파라미터 타입 정의 방식
//function sum(a: number, b: number){
//    return a + b;
//}

//sum(10,20);


// 함수의 반환 값에 타입을 정의하는 방식
function add(): number{
    return 10;
}


// 함수에 타입을 정의하는 방식
function sum(a: number, b: number): number{
    return a + b;
}

sum(10, 20, 30, 40); // 2개의 인수가 필요한데 4개를가져왔다고 에러가 뜬다. 


// 함수의 옵셔널 파라미터(선택적 파라미터)
// 필요에 따라서 선택적으로 사용하고 싶은 인자 앞에 ? 을 쓴다.
function log(a: string, b?: string){

}
log('hello world'); // b에 ?을 뺴면 2개를 넘겨야 되는데 하나만 넘겼다고 에러가 뜬다.
log('hello ts', 'abc')