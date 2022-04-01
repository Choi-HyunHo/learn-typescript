function logMessage(value: string){
    console.log(value)
}

logMessage('hello');
logMessage(100); // number 타입이 들어오기에 오류
// 숫자를 포함시키고 싶으면 string -> any 로 바꾸면 된다. <- 타입의 장점이 없어진다.



// 유니온 타입(Uniob Type)
// 파라미터 나 변수에  하나의 타입 이상을 사용할 수 있게 해주는 것 

function Message(value: string | number){
    if(typeof value === 'number'){
        value.toLocaleString // 각 타입에 맞는 API 를 사용할 수 있게 됩니다.
        // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링 하는) 과정
    }

    if(typeof value === 'string'){
        value.toString();
    }

    throw new TypeError('value must be string or number');
}

Message('hello');
Message(100)

// 유니온 타입의 특징

interface Developer{
    name: string;
    skill: string;
}

interface Person{
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person){

}

askSomeone({name: '디벨로퍼', skill: '웹 개발'})
askSomeone({name: '캡틴', age: '100'})
// askSomeone에 들어가는 인자로, Developer 나 Perosn 이기 때문에 
// 둘 중하나의 데이터를 주면 됩니다.

//function askSomeone(someone: Developer & Person){
//    someone.name;
//    someone.skill;
//    someone.age;
    // Developer 와 Persone 의 속성을 모두 포함한 someone 이다. 
    // 공통된 속성만 사용이 가능한 유니온 타입과의 차이점
//}

// intersection `&`

let seho: string | number | boolean;
let capt: stirng & number & boolean; // never 라고 불가능한 타입이 나온다.
// 이유는 string 이면서, number 면서, boolean 즉 셋 다 만족하는 하나의 타입을 의미