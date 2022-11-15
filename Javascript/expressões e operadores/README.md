
## Expressões e Operadores

### Operadores

- Unary: `++`, `--`, `typeof`, `delete`
- Binary: `+`, `-`, `*`, `/`, `%`
- Ternary: \<expression> `?` \<value/code if true> `:` \<value/code if false>
  
#### Exemplos

- Multiplicação: `*`
  
```javascript
console.log(3 * 5)
// o resultado é 15
```

- divisão: `/`
  
```javascript
console.log(12 / 2)
// o resultado é 6
```

- soma: `+`
  
```javascript
console.log(10 + 10)
// o resultado é 20
```

- subtração: `-`

```javascript
console.log(34 - 23)
// o resultado é 11
```

- resto da divisão: `%`

```javascript
let remainder
remainder = 11 % 9
console.log(remainder)
// o resultado é 2

let remainder
remainder = 11 % 10
console.log(remainder)
// o resultado é 1
```

- incremento: `++`

```javascript
let increment = 0
increment++

console.log(increment)
// o resultado é 1
```

- decremento: `--`

```javascript
let decrement = 0

console.log(--decrement)
// o resultado é -1

let decrement = 0

console.log(decrement--)
// o resultado é 0
```

- exponencial: `**`

```javascript
console.log(2 ** 3)
```

### Operadores de comparação

Irá comparar valores e retornar um Boolean como resposta à comparação

```javascript
let one = 1
let two = 2

// ==     igual a

console.log(two == 1)
// a resposta é false

console.log(one == "1")
// a resposta é true
```

### Falsy e Truthy

São considerados `false`:

- `false`
- `0`
- `-0`
- `""`
- `null`
- `undefined`
- `NaN`

São considerados `true`:

- `true`
- `{}`
- `[]`
- `1`
- `1.23`
- `"0"`
- `"false"`
- `-1`
- `Infinity`
- `-Infinity`
