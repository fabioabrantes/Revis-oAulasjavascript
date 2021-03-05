// Exercícios

//Sistemas de notas escolares
/* 
Crie um algoritmo que transforme as notas do sistema númerico para sistema
de notas em caracteres tipo A B C

de 90 para cima - A
entre 80 - 89 - B
entre 70 - 79 - C
entre 60 - 69 - D
menor que 60 - E
*/
function transformScore() {
  let score = Number (prompt('digite a nota'));

  let scoreA = score >= 90 && score <= 100;
  let scoreB = score >= 80 && score < 90;
  let scoreC = score >= 70 && score < 80;
  let scoreD = score >= 60 && score < 70;
  let scoreE = score < 60 && score > 0;
  let scoreFinal;

  if(scoreA){
    scoreFinal = "A";
  }else if(scoreB){
    scoreFinal = "B";
  }else if(scoreC){
    scoreFinal = "C";
  }else if(scoreD){
    scoreFinal = "D";
  }else if (scoreE){
    scoreFinal = "E";
  }else{
    scoreFinal = "Nota inválida";
  }
  alert(`Resultado ${scoreFinal}`);
}


// sistemas de gasto familiar

/*
Crie um objeto que possuirá 2 propriedades, ambos do tipo array:
receitas = []
despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas
e irá mostrar uma mensagem  se a família está com saldo positivo ou negativo,
seguido do valor do saldo.
*/

let familia = {
  income:[2500,1000,100,300],
  expenses:[1200,1500,3000]
}
function sum(array){
  let total = 0;
  for (const value of array) {
    total = total + value;
  }
  return total;
}

function calculateBalance(){
  let totalIncome = sum(familia.income);
  let totalExpenses = sum(familia.expenses);
  const balance = totalIncome - totalExpenses;

  const balanceOk = balance >= 0;
  let balanceText = 'Saldo negativo';

  if(balanceOk){
    balanceText = 'Saldo positivo';
  }

  console.log(` Seu ${balanceText}: R$ ${balance}`);
}
calculateBalance();


// Celsius em fahrenheit
/*
Crie uma função que receba uma string no formato (50F ou 50C) em 
celsius ou fahrenheit  e faça
a transformação de uma unidade para outra e vice versa

C = (F -32) * 5/9
F = C*9/5 + 32
*/




// buscando e contando dados do array

/*
baseado no Array de livros por categoria abaixo, faça os seguintes desafios:

  contar o número de categorias e o número de livros em cada categoria
  contar o número de autores
  Mostrar livros do autor Augusto Cury
  Transformar a função acima em uma função que irá receber o nome do autores
e devolver os livros desse autor:
*/

const booksCategory = [
  {
    category:'Riqueza',
    books:[
      {
        title:'Os segredos da mente milionária', 
        author:'T. Harv Eker',
      },
      {
        title:'O homem mais rico da Babilônia', 
        author:'George S. Clason',
      },
      {
        title:'Pai rico, pai pobre', 
        author:'Robert T. Kiyosaki e Sharon L. lechter',
      }
    ],
  },
  {
    category:'Inteligência Emocional',
    books:[
      {
        title:'Você é insubstituível', 
        author:'Augusto Cury',
      },
      {
        title:'Ansiedade - Como enfrentar o mal do século', 
        author:'Augusto Cury',
      },
      {
        title:'Os 7 hábitos das pessoas altamente eficazes', 
        author:'Stephen R. Covey',
      }
    ],
  },
];

/* const totalCategories = booksCategory.length;
console.log(totalCategories);

for (const objeto of booksCategory) {
  console.log('Total de livros da categoria: ',objeto.category);
  console.log(objeto.books.length)
} */
/* 
function countAuthors(){
  let arrayAuthors = [];
  for (const objeto of booksCategory) {
    for(const book of objeto.books){
      if(arrayAuthors.indexOf(book.author) == -1){
        arrayAuthors.push(book.author);
      }
    }
    
  }
  console.log('Total de autores: ', arrayAuthors.length);
  console.log(arrayAuthors)
}
countAuthors(); */

function booksOfAuthor(autor){
  let booksTitles = [];
  for (const objeto of booksCategory) {
    for (const book of objeto.books) {
      if(book.author === autor){
        booksTitles.push(book.title);
      }
    }
  }
  return booksTitles;
}
const autor = 'Augusto Cury'
const ArraytitlesBooks = booksOfAuthor(autor);

console.log(`Livros do autor ${autor}:  ${ArraytitlesBooks.join('-')}`)