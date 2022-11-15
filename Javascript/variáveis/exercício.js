// Exercicio 1 - Declare uma variável de nome weight.

/*
 let weight 
*/

// Exercício 2 - Que tipo de dado é essa variável acima?

// console.log(typeof weight)

/*
Exercício 3 - Declare uma variável e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * weight: Number (float)
    * isSubscribed: Boolean
*/
let name = "vitor"
let age = 16
let weight = 57.0
let isSubscribed = true

/*
   ! Exercício 4 - A variável student é de ue tipo de dados?

   ! Exercício 4.1 - Atribua a ela as mesmas propriedades e valores do exercício 3

   ! Exercício 4.2 - Mostre no console a seguinte mensagem:

   ! <name> de idade <age> pesa <weight> kg.

   ! Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
*/
let student = {
    name: "vitor",
    age: 16,
    weight: 57.0,
    isSubscribed: true,
};

// ! console.log(typeof student)

/*
console.log(`${student.name} de ${student.age} anos pesa ${student.weight} kg.`)
*/

// ! Exercício 5 - Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

let students = []

// ! Exercício 6 - Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar dentro do objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

// ! Exercício 7 - Coloque no console o valor da posição zero do Array acima

// console.log(students[1])

// ! Exercício 8 - Crie um novo student e coloque na posicão 1 do array students

const studentTwo = {
    name: "carlos",
    age: 37,
    weight: 90.3,
    isSubscribed: false,
}

students[1] = studentTwo

// ! Exercício 9 - Sem rodar o código responda qual é a resposta do código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou.

// hoisting

console.log(a)
var a = 1
