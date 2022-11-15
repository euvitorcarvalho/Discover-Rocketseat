/*
 *   console.log('9' + 5) 
*/

// ! O javascript transformou o tipo number para o tipo string para que não ocorressem problemas
/* 
 *   console.log(Number('9') + 5) 
*/

// ! Manipulação de Strings e Números

// ! Transformar String em Número e Número em String

    let string = "123"
    // console.log(Number(string))
    let number = 321
    // console.log(String(number))


// ! Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

    let palavra = "Paralelepípedo"
    // console.log(palavra.length)
    let numero = 1234
    // console.log(String(number).length)


// ! Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

    let cpf = 293.85944867
    // console.log(cpf.toFixed(2).replace(".", ","))


// ! Transformar letras minúsculas em maiúsculas. Fazer o contrário disso também

    let word = "Programar é muito bacana!"
    // console.log(word.toLowerCase().toUpperCase())


// ! Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, Transforme o array em um texto e onde eram espaços, coloque _

    let phrase = "Eu quero viver o AMOR!"
    let myArray = phrase.split(" ")
    let phraseWithUnderscore = myArray.join("_")
    // console.log(phraseWithUnderscore)


// ! Verificar se o texto contém a palavra Amor

    let frase = "Eu quero viver!"
    // console.log(phrase.includes("Amor"))


// ! Crias Array com construtor

    let meuArray = new Array('a', 'b', 'c')
    // console.log(myArray)

// ! Contar elementos de um array

    // console.log(["a", "b", "c"].length)

// ! Transformar uma cadeia de caracteres em elementos de um array

    let manipulation = "manipulação"
    // console.log(Array.from(manipulation))


// ! Manipulando Arrays

let techs = ["html", "css", "js"]

// * adicionar um item no fim
    techs.push("nodejs")
// * adicionar um item no começo
    techs.unshift("sql")
// * remover do fim
    // techs.pop()
// * remover do começo
    // techs.shift()
// * pegar somente alguns elementos do array
    // console.log(techs.slice(1, 3))
// * remover 1 ou mais items em qualquer posição do array
    // techs.splice()
// * encontrar a posição de um elemento no array
    let index = techs.indexOf("nodejs")
    techs.splice(index, 1)

    // console.log(techs)