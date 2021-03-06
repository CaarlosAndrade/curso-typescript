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

//                      ------  Tipo Any  -------

// o tipo da variavel pode ser trocado a qualquer momento no código, sem gerar erros de compilação

let carro: any = "BMW";
console.log(carro); //  tipo string

carro = { marca: "BMW", ano: 2019 };
console.log(carro); // tipo object

//                      ------  Usando tipos em funções  -------

// atribuindo o tipo STRING a uma função que não possui parametros, o retorno é obrigatório uma string

function retornaMeuNome(): string {
  return nome;
}

// atribuindo o tipo VOID isso indica que a função não irá possuir nenhum retorno, apenas executará alguma rotina como o console.log()

function digaOi(): void {
  console.log("oi");
}

// atribuindo tipos aos parametros da função, é obrigatório que a função receba dois parametros do tipo NUMBER e retorne um NUMBER

function multiplicar(num1: number, num2: number): number {
  return num1 * num2;
}

console.log(multiplicar(2, 2));

//                      ------  Funções como Tipo  -------

// é possivel tipar uma variavel com a assinatura de uma função, parametros e retorno

let calculo: () => number; // a variavel calulo precisa recber uma função que retorna um number

let calculoComParametro: (x: number, y: number) => number; // a variavel calculo precisa receber uma função com dois parametros do tipo number com um retorno do  tipo number

calculoComParametro = multiplicar; // a função multiplicar que possui a assinatura exatamente como o tipo da variavel pede pode ser atribuida, caso contrario, não.

console.log(calculoComParametro(1, 2));

//                      ------  Objetos e Tipos  -------

let usuario = {
  // tipo do objeto foi inferido automaticamente por seus parametros
  nome: "carlos",
  idade: 23,
};

// tornei o tipo dos parametros deste objeto explicito, que precisa ser respeitado na hora da atribuição de valor
let usuario2: { nome: string; idade: number };

// atribuindo os parametros que foram especificados, sem uma ordem pré definida
usuario2 = {
  idade: 12,
  nome: "carlos",
};

//                      ------  Desafio 1 / Tipos Personalizados -------

// definindo um objeto funcionario que tem como parametros um array de string de supervisores e uma função bater ponto que recebe como parametro a hora e retorna uma string

type Funcionario = {
  supervisores: string[];
  baterPonto: (hora: number) => string;
};

let funcionario: Funcionario = {
  supervisores: ["Adriana", "Fabiana", "Aline"],
  baterPonto(hora: number): string {
    return hora <= 8 ? "Ponto normal" : "Fora do horário";
  },
};

let funcionario2: Funcionario = {
  supervisores: ["Carlos", "nicoly"],
  baterPonto(hora: number): string {
    return hora <= 8 ? "Ponto normal" : "Fora do horário";
  },
};

// utilizando a função para bater o ponto, passando um number como parametro
console.log(funcionario.baterPonto(2));
console.log(funcionario.supervisores);

//                      ------  Union Types -------

// Aplicando o union type em uma varivel é possivel atribuir dois tipos a ela.

let nota: string | number; // usando o operador PIPE, podemos definir os tipos

// as duas situações são validas
nota = 10;
nota = "10";
