// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10); // 숫자
// logText('hello'); // 문자열
// logText(true); // 진위값

// 제네릭 사용법
// function logText<T>(text: T):T{
//     console.log(text);
//     return text;
// }

// logText<string>('hello');


// 사용하는 이유
// 타입 떄문에 동일한 코드를 반복적으로 작성해야 한다.
// 유지보수 관점에서 좋지 않다. 단순히 타입을 받기 위해서 
// function logText(text: string){
//     console.log(text);
//     return text;
// }

// function logNumber(num: number){
//     console.log(text);
//     return num;
// }

// 유니온의 문제점
// function logText(text: string | number){
//     console.log(text);
//     return text;
// }


// const a = logText('a');
// a.split(''); // 에러
// logText(10);

// 제네릭을 사용하여 위의 문제점을 해결
function logText<T>(text: T): T{
    console.log(text);
    return text;
}


const str = logText<string>('a');
str.split('');
const login = logText<boolean>(true); 

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown{
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: `abc`, selected: false};

interface Dropdown<T>{
    value: T;
    selected: boolean;
}

const obj: Dropdown<string> = {value: 'abc', selected: false};


// 제네릭의 타입 제한
// function logTextLenght<T>(text: T[]): T[] {
//     // 함수 내부 안에서 배열임을 알 수 있다.
//     console.log(text.length)
//     text.forEach(function (text){

//     }); 
//     return text;
// }

//logTextLenght<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LenghtType {
    lenght: number;
}

function logTextLenght<T extends LenghtType>(text: T): T{
    text.lenght;
    return text;
}

logTextLenght(10); // 에러, 숫자는 lengh 가 제공 되지 않습니다.
logTextLenght({ lenght: 10});

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// shoppingItem 에 있는 key 들 중에 한 가지가 제네릭이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

//getShoppingItemOption(10);
// getShoppingItemOption<string>('a');

getShoppingItemOption("name")

