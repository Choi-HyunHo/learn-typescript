// 타입스크립트의 클래스

class Person {
    name: string; // class 안에서만 사용하고 싶으면 앞에 private 사용
    age: number; // 기본적으로 public
    readonly log: string // 읽기전용
 

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
}