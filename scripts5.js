function sum(num1,num2){
  return num1 +num2;
}
// funcoes callback
let num1 = 10;
let num2 = 30;
function average(funcao){ // funcao = sum
  let sum = funcao(num1,num2);
  let average = sum/2;
  return average;
}
console.log(average(sum));

// loops 
// for while for of e for in

let numbers = [3,6,8,10,15];
let numbersDuplicate = [];
let contador = 0;
for (let i = 0; i < numbers.length; i=i+2){
  // codigo
  const numDuplicates = numbers[i]*2;
  numbersDuplicate[contador] = numDuplicates;
  contador++; // [6,12,16,20,30]
}

console.log(numbersDuplicate);

//while
let value = 4356045705875
while(value > 100){
  value = value/35;
  console.log(value);
}

//for of - serve tanto para string como para arrays
let nameF = 'fabio';
let names = ['joao','carlos', 'pedro','fabio'];
for (const name of names) {
  if(name === nameF){
    console.log(`${name}  é ${nameF}`);
  }else{
    console.log(`${name}  não é ${nameF}`);
  }
}

// for in - cria um loop em cima de um objeto. pegando as propriedades
let Person ={
  name:'fabio',
  age:38,
  weight:90.8
}
/* console.log(Person['age']);
console.log(Person.age); */

for (const propriedade in Person) {
  console.log(propriedade)
  console.log(Person[propriedade]);
}
