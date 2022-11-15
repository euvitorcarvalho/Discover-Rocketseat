# HTML

HTML é a abreviação de **Hyper Text Markup Language** (linguagem de marcação em hipertexto). Ou seja, não se trata de uma linguagem de programação, pois não tem lógica (algoritmos, processos etc). Ele cria a **estrutura** de uma página ou aplicação web, determinando a separação de layout e seu conteúdo.

Documentos `.html` possuem tags de estruturação básica:

```html
<!DOCTYPE html>
<html>
  <head></head>
  <body></body>
</html>
```

Internamente, as tags html possuem uma anatomia básica também:

```html
<nome-da-tag atributo="valor do atributo"> conteúdo </nome-da-tag>
```

Comentários em HTML:

```html
<!-- Isso é um comentário. Comentários em qualquer linguagem são pedaços de código que são ignorados na renderização (na leitura do computador), mas são úteis para entedimento humano -->
```

> **ATENÇÃO!**
> Não se esqueça de **indentar** o código! Isso ajuda na sua legibilidade, manutenção e colaboração com outros desenvolvedores.
>
> Para indentar, selecione a linha do código e aperte _tab_.

## Documentação HTML e CSS

É importante saber onde consultar quando houver dúvida sobre tags de HTML, seletores e propriedades de CSS. Existem várias fontes de documentação.

- [Tags de HTML - W3Schools](https://www.w3schools.com/tags/default.asp);
- [Propriedades de CSS - W3Schools](https://www.w3schools.com/cssref/default.asp);
- [Seletores de CSS - W3Schools](https://www.w3schools.com/cssref/css_selectors.asp);
- [Documentação HTML - MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5);
- [Documentação CSS - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS);
- [Várias documentações](https://devdocs.io/).

As documentações da MDN estão parcialmente na língua portuguesa. Quem tem conhecimento de inglês pode contribuir traduzindo seus artigos para o português e deixar a documentação mais acessível.

#### Display inline, block e inline-block

Toda tag em HTML tem por padrão algum valor de display. Os três mais básicos são inline, block e inline-block, cujo entendimento é de extrema importância para manipulação eficiente de elementos na sua página web.

**Block**: são elementos que "ocupam" toda a largura do elemento pai, fazendo com que não deixe outros elementos do lado dele. Mesmo que seja forçado a ter uma medida menor (a partir de propriedade `width`), ele não deixa outro elemento na mesma linha horizontal.

- Podem conter outros tipos de elementos (inline, block e inline-block);
- Pode estar dentro somente de outros elementos block;

**Inline**: são elementos que ocupam somente o espaço do conteúdo.

- Não podem conter elementos block;
- Podem estar dentro de qualquer tipo de elemento (block, inline, inline-block);
- Não cria linhas novas;
- Não se consegue definir propriedades de `width` e `height` para ele.

![Imagem explicativa dos vários tipos de display](https://i.stack.imgur.com/mGTYI.png)

**Inline-block**: são elemento híbridos, que permitem que outros elementos fiquem um ao lado do outro (em linha), mas que também possam receber valores de width e height.

> Fonte da imagem: <https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block>

#### Listas ordenadas e não ordenadas

Listas são usadas para enumeração de items. No HTML, eles também são utilizados para marcação de outros elementos, como itens de menu de navegação.
Para criar uma lista _ordenada_, devemos fazer:

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

Para criar uma lista _não ordenada_, devemos fazer:

```html
<ul>
  <li>Item</li>
  <li>Item</li>
  <li>Item</li>
</ul>
```
