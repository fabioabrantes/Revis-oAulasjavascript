/* 
 * linguagem baseada em protótipo. os dados são encapsulado pelo objeto __proto__
 contendo vários métodos que manipula dados.Logo, nossos dados vão herdar esses objetos
  devemos conhecê-los. Isso é o lance de javascript
 */

 let name = 'fabio';
 
 let tamanhoName = name.length;
 console.log(tamanhoName);

 // conversão de tipos (explicitamente ou implicitamente)
 let value = "9" +5;
console.log(typeof value); // fez uma coersão do 5 para string
console.log(Number("9") + 5); // fez uma conversão explicito do 9 para number
console.log(parseInt("9") + 5); // parseFloat,fez uma conversão explicito do 9 para number 
console.log("9" * 5);// fez uma coersão do 9 para number
console.log(Number(true)); // transforma em string

let number = 345.540983495734865;
let number2 = number.toFixed(2); // '345.54'
console.log(number2.replace('.',',')); // '345,54'1
let result = Number(x) + 5;
console.log(result);

let phrase = "Eu quero aprender mais Javascript";
let phraseUpdate = phrase.toLowerCase();
//console.log(phraseUpdate);

let word = phraseUpdate.includes('javascript');
console.log(word)

//Separe um texto que contem espaços, em um novo array onde cada palavra do texto é uma posição do array.
// depois disso, transforme o array em um texto e onde eram espaços, coloque _ hífen

let phrase = "Eu quero aprender mais Javascript";
let arrayWords = phrase.split(' ');
console.log(arrayWords);
let phrase2 = arrayWords.join('_');
console.log(phrase2);
