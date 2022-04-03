interface Developer{
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Developer | Person{
    return {name: 'Tony', age: 33, skill:"Iron Making"}
}

let tony = introduce();
console.log(tony.skill); // 유니온 특징에 의해 접근 불가

// 접근하려면
if((tony as Developer).skill){
    let skill = (tony as Developer).skill;
    console.log(skill);
} else if(tony as Person).age){
    let age = (tony as Developer).age;
    console.log(age);
}

// 타입가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
    return (target as Developer).skill !== undefined; // target이 skill 이라는 것이 있을 경우, Developer 취급 한다.
}

if(isDeveloper(tony)){
    tony.skill
} else{
    tony.age
}