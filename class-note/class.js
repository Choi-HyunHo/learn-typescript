// ES2015 (ES6) - class
// 아래 두개이ㅡ 코드는 동일

function Person(name, age){
    this.name = name;
    this.age = age;
}

var seho = new Person('세호', 30)


class Person{
    // 클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다');
        
        this.name = name;
        this.age = age;
    }

}

var seho = new Person('세호', 30); 
console.log(seho)