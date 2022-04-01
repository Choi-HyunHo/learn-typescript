// shoes 라는 이넘에는 나이키와 아디다스 두 개의 데이터가 들어가있다.
// 별도의 값을 지정하지 않으면 숫자형으로 생각한다.
enum Shoes{
    Nike = '나이키',
    Adidas = '아디다스'
}

let myShoes = Shoes.Nike;
console.log(myShoes);// '나이키' 


// 예제
enum Answer {
    Yes= 'Y',
    No = "N"
}


function askQuestion(answer: Answer){
    if(answer === Answer.Yes){
        console.log('정답입니다');
    }

    if(answer === Answer.No){
        console.log('오답입니다');
    }
}

askQuestion(Answer.Yes);
// askQuestion('yes'); 
// askQuestion('예스'); 
// askQuestion('y'); 