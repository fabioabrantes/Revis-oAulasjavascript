// string 
let name = 'fabio';
let nameComplete = name + 'abrantes';
nameComplete = `${name} abrantes`;
console.log(nameComplete);

// number 
let number1;
console.log(typeof number1);

// boolean
let ehprimo = true; // false

// null e undefined
let name;
let name2 = null;
console.log(null == undefined);
console.log(typeof name);

// object e Array
let Person = {
  name:'fabio',
  age:38,
  ehAdmin: true,
  endereco:{
    street:'joao pessoa,45',
    district: 'sao jose'
  },
  profession: [20,'fabio',true,{name:'fabio'}],
  sum: function(number1, number2){
      return number1 + number2;
  },
  getName(){
    return this.name;
  }
};

console.log(Person.getName());

let Person2 = new Object();
Person2.name ='fabio';
console.log(Person2)

// array
let valuesArray = [20,'fabio',true,{name:'fabio'}]; 

let valueName = prompt('digite seu nome');
Person.name = valueName;