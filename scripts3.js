// funções são tipos de dados que guardam blocos de códigos;

// aplicativo que cria frase motivacionais
console.log("Estudar é muito bom");
console.log('Paciência é persistência');
console.log('Revisão é a mãe do aprendizado');
console.log('Estudar 8 horas por dia você vai decolar na programação');

// declaração de função. funções nomeadas
function createPhrases() {
  console.log("Estudar é muito bom");
  console.log('Paciência é persistência');
  console.log('Revisão é a mãe do aprendizado');
  console.log('Estudar 8 horas por dia você vai decolar na programação');
}
// executar, rodar, chamar, invocar função 
/* createPhrases();
createPhrases(); */

// Expressão de funçoes. utiliza funções anônima

const sum1 = function (number1, number2) {

  let result = number1 + number2;
  console.log(result);
}

sum1(10, 20);
sum1(20, 40);
sum1(100, 40);

// arrow function ()=>{}
const sum1 = (number1, number2) => {

  let result = number1 + number2;
  console.log(result);
}
const name = function (name) {
  return name;
}

const name = (name) => {
  return name
}

const Person = {
  name: 'fabio',
  walk: function () {
    return this.name + 'está andando';
  }
}

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.walk = function () {
    return this.name + ' está andando';
  }
}

function execution() {
  let name = prompt('Digite seu nome');
  let age = prompt('Digite sua idade');

  const Fábio = new Person(name, age);

  alert(Fábio.walk());

}
//Sistemas de notas escolares
/* 
  Crie um algoritmo que transforme as notas do sistema númerico para sistema
  de notas em caracteres tipo A B C

  de 90 para cima - A
  entre 80 - 89 - B
  entre 70 - 79 - C
  entre 60 - 69 - D
  menor que 60 - F
*/
