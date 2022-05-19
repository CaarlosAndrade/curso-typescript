//                      ------  Tipo String  -------

let nome = "João";
console.log(nome);
// nome = 34 (gera erro, pois o tipo é string)

//                      ------  Tipo Number  -------

let idade = 29;
//idade = 'ana' (gera erro pois o tipo é number)
idade = 34.8;
console.log(idade);
// tipos number podem receber inteiro e reais (ponto flutuante)

// tipo boolean
let possuiHobbies = true;
console.log(possuiHobbies);
// possuiHobbies = 1 (gera um erro por o tipo é boolen)

//                      ------  Tipos Explicitos  -------

// Quando o tipo não é imposto na declaração da variavel pode se atribuir qualquer tipo
// Caso for especificado o tipo, não será permitido outro tipo

let minhaIdade: number;

minhaIdade = 27; // tipo number
console.log(typeof minhaIdade);

// minhaIdade = "idade 34"; // tipo string
// console.log(typeof minhaIdade);

//                      ------  Arrays  -------

// let hobbies = ["cozinhar"]; // array do tipo STRING, inferido automaticamente
let hobbies: any[] = ["sair", 3]; // array do tipo ANY explicito
let hobbiesString: string[] = ["cozinhar", "trabalhar"];
console.log(typeof hobbies);
console.log(hobbies);

//                      ------  Tuplas  -------

// verificação de array, para não gerar erro é necessário seguir exatamente o que foi especificado

//  -- Orderm dos elemetos
//  -- Quantidade de elementos
//  -- Tipo dos elementos
//  -- subistitui o tipo do array

let endereco: [string, number] = ["rua tal", 3];
console.log(endereco);
console.log(typeof endereco);
console.log();

// Quanlquer outra tentativa, gera um ero.

//                      ------  Enun  -------

//armazena valores pré definidos, apenas numeros

enum Cor {
  Cinza, // começa sempre no 0 e avança
  verde = 100, // é possivel realizar alterações na sequencia o prox numero será 101
  Azul,
  Laranja = 3,
  Amarelo,
  Vermelho = 100, // é possivel ter valores repetidos
}

let minhaCor: Cor = Cor.verde;
console.log(minhaCor);

console.log(Cor.Azul);
console.log(Cor.Laranja);
console.log(Cor.Amarelo);
console.log(Cor.Vermelho);

console.log(Cor.Cinza);
