"use strict";
// tipo string
let nome = "João";
console.log(nome);
// nome = 34 (gera erro, pois o tipo é string)
// tipo number
let idade = 29;
//idade = 'ana' (gera erro pois o tipo é number)
idade = 34.8;
console.log(idade);
// tipos number podem receber inteiro e reais (ponto flutuante)
// tipo boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// possuiHobbies = 1 (gera um erro por o tipo é boolen)
// Tipos Explicitos
// Quando o tipo não é imposto na declaração da variavel pode se atribuir qualquer tipo
// Caso for especificado o tipo, não será permitido outro tipo
let minhaIdade;
minhaIdade = 27; // tipo number
console.log(typeof minhaIdade);
// minhaIdade = "idade 34"; // tipo string
// console.log(typeof minhaIdade);
// Arrays
// let hobbies = ["cozinhar"]; // array do tipo STRING, inferido automaticamente
let hobbies = ["sair", 3]; // array do tipo ANY explicito
let hobbiesString = ["cozinhar", "trabalhar"];
console.log(typeof );
console.log(hobbies);
