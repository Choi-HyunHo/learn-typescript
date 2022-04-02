// 타입 추론  1
var a; // any 타입 정의
var b = 10 // number

function getB(a = 10){ // number + string = string
    var c = 'hi'; // string
    return a + c;
}

// 타입 추론 - 인터페이스
// interface Dropdown<T>{
//     value: T;
//     title: string;
// }

// // 제네릭을 이용해 <string>을 넘겼기 때문에, value 의 타입은 string이 된다.
// let shoppingItem: Dropdown<string> = {
//     value: 'abc',
//     title: 'hello'
// }

// 타입 추론 3
interface Dropdown<T>{
    value: T;
    title: string;
}

interface DetailedDropdown<T> extends Dropdown<T> {
    description: string;
    tag : T;
    // 암묵적으로 value, title 들어온다.
}

let detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'ab',
    value: 'a', // string이라고 정의. 
    tag: 'b'
}

// Best Common Type -> 가장 근접한 타입을 추론한다. 유니온으로 묶어나간다.
let arr = [1,2,3]; // number[]
let arr1 = [1,2,true] // (number | boolean)[]


