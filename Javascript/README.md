# Anotações Javascript

## Instruções e Sintaxe

Toda linguagem é escrita com esses 2 princípios:

- **Instruções** _(declarações)_
  Ordens ao computador

- **Sintaxe**
  Maneira correta de escrever

```javascript
alert("Fala, Dev!") // Fala, Dev!

alert((10*100) + "abraços!") // 1000 abraços!
```

## Variáveis e Tipos de Dados

- **Variáveis**
  Uma caixinha onde guardamos um tipo de dado para usar mais tarde.

```javascript
// Declaro e atribuo valor
let boasVindas = "Fala, Dev!";
boasVindas = "Fala, Dev! Beleza?!"

// constante não pode mudar o valor
const serHumano = true;
serHumano = false // Erro!
```

- **Tipos de Dados**
  Informações que podem ser em `textos`, `números`, `booleanos` (valores lógicos: verdadeiro ou falso) ou dados mais `estruturados`.

```javascript
// String
""
''
``

//Number
1
1.2

// Boolean
true
false
```

## Funções

- Agrupamento de código
- Reuso de código
- Mini programas dentro do programa maior
- Toda linguagem oferece muitas opções

```javascript
// usando uma função
alert('Fala, Dev!')

// criando uma função
function alert(text) {
    return text
}
```

## Objetos

- **Atributos**
  São as propriedades de um objeto

- **Métodos**
  São as funcionalidades de um objeto

```javascript
// criando um objeto
const person = {
    age: 18,
    drive: function() {}
}

// usando um objeto
person.drive()
```
