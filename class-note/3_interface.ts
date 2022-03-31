// 인터페이스는 상호간의 규칙
// 반복되는 타입들을 모아서 하나의 인터페이스로 정의를 하여 사용한다.
// 사용하는 이유 : 오타를 막을 수 있고, 가독성을 높일 수 있다. 

interface User {
    age: number;
    name: string;
}

// 변수에 활용한 인터페이스
// 사용할 때 반드시 인터페이스에 있는 속성을 정의해야 한다.
let hyunho: User = {
    age: 26,
    name: '현호'
}

// 함수에 활용한 인터페이스
// 인자에 인터페이스를 적용 -> 특정 형식을 준수하는 데이터만 받겠다고 정의
function getUser(user: User){
    console.log(user);
}
const capt = {
    name: 'captin',
    //age: 100
}

getUser(capt); // 에러 발생, capt 은 객체에 name 만 가지고 있고, age는 없기 때문에


// 함수의 구조에 인터페이스 활용
interface sumFuntion{
    (a: number, b: number): number;
}

let sum: sumFuntion;

sum = function(a: number, b: number): number{
    return a + b;
}


// 인덱싱
// 배열의 인덱스는 항상 숫자. 0 부터 시작
interface StringArray{
    [index: number]: string; // index 는 기존처럼 number 을받고, : 옆에 타입을 지정 할 수 있다. 
}

let arr: StringArray = ['a','b','c'];
// arr[0] = 10 // index를 이용해서 number 로 접근을 하는 것은 맞다. 하지만 배열안에 들어간 모든 타입은 string으로 선언되었기 때문에 오류가 난다.


// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp
  }
  
  var obj: StringRegexDictionary = {
    sth: /abc/,
    cssFile: /\.css$/,
    jsFile: /\.css$/,
  }


// 인터페이스 확장
// extends 키워드 사용, 
interface Person {
    name: string;
    age: number;
}

// 아래와 같은 인터페이스가 있다면, 중복되는 값들을 다른 인터페이스가 가지고 있는 경우
//interface Developer {
//    name: string;
//    age: number;
//    language: string;
//}

interface Developer extends Person {
    language: string;
}

let john: Developer = {
    language: 'ts', // 에러 발생. developer 를 person으로 확장을 받았기 때문에 person에 있는 타입들 까지 정의를 해주는 것이 규칙
    age: 20,
    name: '존'
}

