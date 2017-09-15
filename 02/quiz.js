

var sum = 0;
console.log("홀수 출력");
for(var i = 1; i < 101; i++){
    sum+=i;
    if(i % 2 == 0)
      console.log(i);
}

console.log("짝수 출력");
for(var i = 1; i < 101; i++){
    if(i % 2 == 1)
      console.log(i);
}

console.log("합계 출력");
console.log(sum);


console.log("구구단 출력");
for(var i = 2; i < 10; i++){
    for(var j = 1; j < 10; j++){
        console.log(i * j);
    }
}

var val = prompt("숫자를 입력해 주세요");
var inputSum = 0;

while(!(val == "")){
  inputSum += parseInt(val);
  val = prompt("숫자를 입력해 주세요");
}

console.log(inputSum);
