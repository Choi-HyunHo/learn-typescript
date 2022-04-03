// 타입호환 : 오른쪽에 있는 타입이 더 많은 속성을 가지거나, 구조적으로 더 컸을 때 왼쪽과 호환이 된다.
// 인터페이스
interface Developer{
    name: string;
    skill: string;
}

// interface Person{
//     name: string;
// }

class Person{
    name: string;
}

let developer: Developer;
let person: Person;



//developer = new Person(); // 에러이유 : 왼쪽에 있는 객체가 더 큰 관계를 가지고 있어서
//person = developer; // 에러가 안뜬다.

// 함수
let add = function(a: number){
    // ...
}

let sum = function(a: number, b: number){
    // ...
}

add = sum; // 에러, add는 하나의 인자만 받고 있다.
sum = add // 가능.

// 제네릭

interface Empty<T> {
    // ...
}

let empty1: Empty<string>;
let empty2: Empty<number>;

// 아래 모두 호환 가능
empty1 = empty2; 
empty2 = empty1;

interface NotEmpty<T> {
    date: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;

// 모두 호환 불가능
// 동일한 속성을 가지지만 타입의 차이가 발생한다.
notempty1 = notempty2;
notempty2 = notempty1; 