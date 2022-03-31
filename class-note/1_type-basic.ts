// JS 문자열 선언
//const str = 'hello';

// TS 문자열 선언
const str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1,2,3];
let heroes: Array<string> = ['captin','thor','hulk',] // 숫자를 넣으면 에러
let items : number[] = [1,2,3];


// TS 튜플 : 배열을 단순히 타입만 지정하는 것이 아니라 타입 + 위치를 직접 지정할 수 있다.
let address: [string, number] = ['gangnam', 100];

// TS 객체
let obj: object = {};
//let person: object = {
//    name: 'capt',
//    age: 100
//};

let person: {name: string, age:number} = {
    name : 'thor',
    age : 1000
}

// TS 진위값
let show: boolean = true;