//interface Person{
//    name: string;
//    age: number;
//}


type Person = {
    name: string;
    age: number;

}

// 인터페이스와 타입 별칭의 차이


let seho: Person ={
    name: '세호',
    age: 30
}

type MyString = string;
const str: MyString = 'hello';


type Todo = { id: string; title: string; done: boolean};
function getTodo(todo: Todo){
    
}