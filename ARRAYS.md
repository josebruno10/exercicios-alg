# Resumão de arrays em JavaScript

Sem array:

```js
let filme1 = "Matrix";
let filme2 = "Avatar";
let filme3 = "Shrek";
```

Com array:

```js
let filmes = ["Matrix", "Avatar", "Shrek"];
```

Agora, os três filmes pertencem à mesma lista. Isso facilita acessar, alterar, adicionar, remover, buscar e percorrer os dados.

Um array pode guardar diferentes tipos de valores:

```js
let nomes = ["Ana", "João", "Maria"];
let numeros = [10, 20, 30];
let misturado = ["Ana", 25, true];
```

JavaScript permite misturar tipos, mas, na maioria dos programas, é mais organizado guardar valores do mesmo tipo em cada array.

## 2. Como criar um array

A forma mais comum é usar colchetes:

```js
let frutas = ["Maçã", "Pera", "Uva"];
```

Cada valor é chamado de **elemento** ou **item**. Os elementos são separados por vírgula.

Também é possível criar um array vazio para preenchê-lo depois:

```js
let positivos = [];
```

Esse padrão aparece no exercício 14: o programa começa com um array vazio e adiciona nele somente os números positivos.

## 3. Índices: a posição dos elementos

Cada elemento possui uma posição numérica chamada **índice**. A contagem começa em `0`, e não em `1`.

```text
Elemento:  "Matrix"  "Avatar"  "Shrek"
Índice:        0          1         2
```

Para acessar um elemento, usamos o nome do array e o índice entre colchetes:

```js
let filmes = ["Matrix", "Avatar", "Shrek"];

console.log(filmes[0]); // Matrix
console.log(filmes[1]); // Avatar
console.log(filmes[2]); // Shrek
```

Portanto, o segundo elemento está no índice `1`. Esse conceito é usado no exercício 1.

Se o índice não existir, o resultado será `undefined`:

```js
console.log(filmes[10]); // undefined
```

### Alterando um elemento pelo índice

Podemos substituir um valor atribuindo outro àquela posição:

```js
let comidas = ["Pizza", "Hambúrguer", "Sushi"];
comidas[1] = "Lasanha";

console.log(comidas);
// ["Pizza", "Lasanha", "Sushi"]
```

O array foi **modificado**. Isso aparece nos exercícios 2, 6 e 10.

## 4. `length`: quantidade de elementos

A propriedade `length` informa o tamanho atual do array:

```js
let filmes = ["Matrix", "Avatar", "Shrek"];
console.log(filmes.length); // 3
```

Não se usam parênteses em `length`, pois ela é uma propriedade, e não um método:

```js
filmes.length;   // correto
filmes.length(); // errado
```

### Último elemento do array

Como os índices começam em `0`, o último índice é sempre `length - 1`:

```js
let comidas = ["Pizza", "Lasanha", "Sushi"];
console.log(comidas[comidas.length - 1]); // Sushi
```

Essa forma é melhor do que escrever um índice fixo, como `comidas[2]` ou `comidas[3]`, porque continua funcionando mesmo se o tamanho da lista mudar.

Resumo:

```js
array.length              // quantidade de elementos
array[0]                  // primeiro elemento
array[1]                  // segundo elemento
array[array.length - 1]   // último elemento
```

## 5. Adicionando e removendo elementos

Os quatro métodos básicos trabalham nas duas pontas do array.

| Método | O que faz | Ponta do array | Valor retornado |
|---|---|---|---|
| `push(valor)` | adiciona | final | novo tamanho |
| `pop()` | remove | final | elemento removido |
| `unshift(valor)` | adiciona | início | novo tamanho |
| `shift()` | remove | início | elemento removido |

### `push()`: adicionar ao final

```js
let jogos = ["Minecraft", "FIFA"];
jogos.push("Valorant");

console.log(jogos);
// ["Minecraft", "FIFA", "Valorant"]
```

É possível adicionar mais de um item de uma vez:

```js
jogos.push("GTA V", "The Sims");
```

### `pop()`: remover do final

```js
let nomes = ["Ana", "Bruno", "Carlos"];
let removido = nomes.pop();

console.log(removido); // Carlos
console.log(nomes);    // ["Ana", "Bruno"]
```

`pop()` não recebe o nome do item. Ele sempre remove o último.

### `unshift()`: adicionar no início

```js
let comidas = ["Pizza", "Sushi"];
comidas.unshift("Salada");

console.log(comidas);
// ["Salada", "Pizza", "Sushi"]
```

### `shift()`: remover do início

```js
let frutas = ["Laranja", "Maçã", "Pera"];
let removida = frutas.shift();

console.log(removida); // Laranja
console.log(frutas);   // ["Maçã", "Pera"]
```

### Uma forma fácil de memorizar

- `push` e `pop` trabalham no **fim**;
- `unshift` e `shift` trabalham no **início**;
- `push` e `unshift` **adicionam**;
- `pop` e `shift` **removem**.

Todos esses métodos alteram o array original.

## 6. Procurando valores

Os exercícios usam duas ferramentas: `includes()` e `indexOf()`.

### `includes()`: responde se existe

`includes()` retorna um valor booleano: `true` ou `false`.

```js
let jogos = ["Minecraft", "FIFA", "Valorant"];

console.log(jogos.includes("FIFA"));  // true
console.log(jogos.includes("Xadrez")); // false
```

É muito útil em uma condição:

```js
if (jogos.includes("FIFA")) {
  console.log("FIFA está na lista!");
} else {
  console.log("FIFA não está na lista.");
}
```

Use `includes()` quando a pergunta for: **“esse valor existe?”**

### `indexOf()`: responde em qual posição

`indexOf()` retorna o índice da primeira ocorrência encontrada:

```js
let cores = ["Azul", "Roxo", "Preto"];

console.log(cores.indexOf("Roxo"));  // 1
console.log(cores.indexOf("Verde")); // -1
```

O valor `-1` significa “não encontrado”. Por isso, a verificação correta é:

```js
if (cores.indexOf("Roxo") !== -1) {
  console.log("A cor existe!");
}
```

Use `indexOf()` quando precisar saber: **“em qual índice está?”**

### Buscando e substituindo com segurança

O exercício 6 combina busca e alteração:

```js
let carros = ["Gol", "Celta", "Uno"];
let indice = carros.indexOf("Celta");

if (indice !== -1) {
  carros[indice] = "Civic";
}
```

A condição é importante. Sem ela, se `Celta` não existisse, `indice` seria `-1` e o programa tentaria alterar uma posição inválida.

### As buscas diferenciam maiúsculas, minúsculas e acentos

```js
let nomes = ["Maria"];

nomes.includes("Maria"); // true
nomes.includes("maria"); // false
```

`"Maria"` e `"maria"` são strings diferentes.

## 7. Percorrendo um array

Percorrer significa visitar os elementos, normalmente um por um.

### Loop `for`

```js
let filmes = ["Matrix", "Avatar", "Shrek"];

for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}
```

Entendendo cada parte:

```js
for (let i = 0; i < filmes.length; i++)
//   início      condição             atualização
```

- `let i = 0`: começa no primeiro índice;
- `i < filmes.length`: continua enquanto o índice existir;
- `i++`: aumenta o índice em 1 depois de cada repetição;
- `filmes[i]`: acessa o elemento da vez.

É importante usar `<`, e não `<=`:

```js
i < filmes.length  // correto
i <= filmes.length // tenta acessar uma posição inexistente
```

O `for` é especialmente útil quando precisamos do índice ou queremos modificar os elementos do array.

### `forEach()`

`forEach()` executa uma função uma vez para cada elemento:

```js
let nomes = ["Ana", "Bruno", "Carlos"];

nomes.forEach(function (nome) {
  console.log("Bem-vindo(a), " + nome + "!");
});
```

Com arrow function:

```js
nomes.forEach((nome) => {
  console.log(`Bem-vindo(a), ${nome}!`);
});
```

Também podemos receber o índice:

```js
nomes.forEach((nome, indice) => {
  console.log(indice, nome);
});
```

Use `forEach()` quando quiser executar uma ação para todos os itens e não precisar controlar manualmente o loop.

### `for` ou `forEach()`?

| Situação | Escolha comum |
|---|---|
| precisa do índice para alterar posições | `for` |
| quer controlar início, fim ou passo | `for` |
| quer apenas executar algo para cada item | `forEach()` |
| quer usar `break` para parar antes do fim | `for` |

## 8. Padrão: transformar todos os elementos

No exercício 10, cada número é multiplicado por 2:

```js
let numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
  numeros[i] = numeros[i] * 2;
}

console.log(numeros); // [2, 4, 6, 8, 10]
```

O raciocínio é:

1. percorrer todos os índices;
2. ler o valor atual com `numeros[i]`;
3. calcular o novo valor;
4. guardar o resultado na mesma posição.

Esse código altera o array original.

Uma forma moderna de criar outro array é `map()`:

```js
let numeros = [1, 2, 3, 4, 5];
let dobrados = numeros.map((numero) => numero * 2);

console.log(numeros); // [1, 2, 3, 4, 5]
console.log(dobrados); // [2, 4, 6, 8, 10]
```

## 9. Padrão acumulador: somar valores

O exercício 11 soma todos os números:

```js
let valores = [5, 10, 15, 20];
let soma = 0;

for (let i = 0; i < valores.length; i++) {
  soma = soma + valores[i];
}

console.log(soma); // 50
```

`soma` é um **acumulador**. Ela precisa começar com `0`, que é o valor neutro da adição.

Evolução do acumulador:

| Repetição | Valor atual | Soma depois da operação |
|---|---:|---:|
| início | — | 0 |
| 1 | 5 | 5 |
| 2 | 10 | 15 |
| 3 | 15 | 30 |
| 4 | 20 | 50 |

Também se pode escrever:

```js
soma += valores[i];
```

Uma alternativa mais avançada é `reduce()`:

```js
let soma = valores.reduce((acumulador, valor) => acumulador + valor, 0);
```

## 10. Padrão contador: contar itens que atendem a uma condição

No exercício 12, queremos contar números maiores que 10:

```js
let nums = [3, 12, 8, 25, 7, 18];
let contador = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] > 10) {
    contador++;
  }
}

console.log(contador); // 3
```

O contador aumenta apenas quando a condição é verdadeira. Não confunda:

- **somar valores:** `soma += nums[i]`;
- **contar elementos:** `contador++`.

## 11. Padrão: encontrar o maior valor

No exercício 13:

```js
let valores = [15, 3, 22, 8, 51, 7];
let maior = valores[0];

for (let i = 1; i < valores.length; i++) {
  if (valores[i] > maior) {
    maior = valores[i];
  }
}

console.log(maior); // 51
```

O algoritmo trabalha com um **melhor valor até agora**:

1. considera o primeiro elemento como o maior inicial;
2. começa a comparação no índice `1`, pois o índice `0` já foi usado;
3. quando encontra um número maior, atualiza a variável `maior`;
4. ao terminar o loop, `maior` contém o maior valor de todo o array.

Começar com `valores[0]` é mais seguro do que começar com `0`. Se todos os números fossem negativos, `0` seria incorretamente considerado o maior:

```js
let valores = [-20, -8, -15];
let maior = valores[0]; // correto: começa em -20
```

Esse algoritmo pressupõe que o array possui pelo menos um elemento.

## 12. Padrão filtro: criar um array com itens selecionados

No exercício 14, apenas valores positivos são copiados:

```js
let numeros = [10, -2, 5, -8, 20, -1];
let positivos = [];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 0) {
    positivos.push(numeros[i]);
  }
}

console.log(positivos); // [10, 5, 20]
```

O padrão é:

1. criar um array vazio para o resultado;
2. percorrer o array original;
3. testar cada elemento;
4. adicionar com `push()` somente os elementos aprovados.

A condição `>= 0` inclui o zero. Se a intenção for aceitar somente números estritamente positivos, use `> 0`.

O método moderno equivalente é `filter()`:

```js
let positivos = numeros.filter((numero) => numero >= 0);
```

## 13. Padrão: remover todas as ocorrências de um valor

O exercício 15 usa o mesmo padrão de filtro:

```js
let nomes = ["Ana", "João", "Ana", "Pedro", "Ana"];
let resultado = [];

for (let i = 0; i < nomes.length; i++) {
  if (nomes[i] !== "Ana") {
    resultado.push(nomes[i]);
  }
}

console.log(resultado); // ["João", "Pedro"]
```

Em vez de tentar remover itens do array enquanto ele está sendo percorrido, o programa cria uma nova lista contendo apenas o que deve permanecer. Isso evita problemas com a mudança dos índices durante o loop.

Com `filter()`:

```js
let resultado = nomes.filter((nome) => nome !== "Ana");
```

## 14. Resumo dos 15 exercícios

| Exercício | Conteúdo principal | Ideia treinada |
|---:|---|---|
| 1 | índice, `push`, `length`, `for` | criar, aumentar e percorrer uma lista de filmes |
| 2 | alteração por índice, `unshift`, último item | modificar e acessar posições |
| 3 | `pop`, `unshift`, `forEach` | remover/adicionar e personalizar mensagens |
| 4 | `indexOf` | verificar se uma cor existe usando `-1` |
| 5 | `push`, `shift`, `includes`, `forEach` | combinar operações em uma lista de jogos |
| 6 | `indexOf`, alteração, `push`, `for` | buscar uma posição e substituir com segurança |
| 7 | `includes`, `push`, `pop`, `length`, `indexOf` | revisar operações básicas |
| 8 | `includes`, `pop`, `forEach` | verificar convidados, remover e percorrer |
| 9 | os quatro métodos das pontas | manipular uma lista completa de frutas |
| 10 | `for` e alteração por índice | dobrar todos os números |
| 11 | acumulador | somar todos os valores |
| 12 | contador e condição | contar números maiores que 10 |
| 13 | comparação | encontrar o maior número |
| 14 | array de resultado e filtro | selecionar números não negativos |
| 15 | array de resultado e filtro | excluir todas as ocorrências de um nome |

## 15. O que altera o array original?

É importante distinguir uma consulta de uma modificação.

### Alteram o array

```js
array[indice] = novoValor;
array.push(valor);
array.pop();
array.unshift(valor);
array.shift();
```

### Apenas consultam

```js
array.length;
array[indice];
array.includes(valor);
array.indexOf(valor);
array.forEach(...);
```

Nos exemplos apresentados, `map()` e `filter()` criam novos arrays, sem alterar o original.

## 16. Referência: duas variáveis podem apontar para o mesmo array

Arrays são valores de referência. Isso significa que uma atribuição simples não cria uma cópia independente:

```js
let original = [1, 2, 3];
let copia = original;

copia.push(4);

console.log(original); // [1, 2, 3, 4]
```

As duas variáveis apontam para o mesmo array. Para fazer uma cópia superficial, pode-se usar o operador spread:

```js
let original = [1, 2, 3];
let copia = [...original];

copia.push(4);

console.log(original); // [1, 2, 3]
console.log(copia);    // [1, 2, 3, 4]
```

## 17. Erros comuns

### 1. Esquecer que o primeiro índice é zero

```js
let nomes = ["Ana", "João"];
console.log(nomes[0]); // Ana
```

### 2. Usar `<=` no limite do `for`

```js
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}
```

### 3. Usar um índice fixo para o último elemento

```js
console.log(nomes[nomes.length - 1]);
```

### 4. Interpretar `indexOf()` diretamente como booleano

Isto é perigoso:

```js
if (nomes.indexOf("Ana")) {
  // pode dar um resultado inesperado
}
```

O índice `0` é convertido em falso, embora o elemento exista. Já `-1` é convertido em verdadeiro, embora ele não exista. Compare explicitamente:

```js
if (nomes.indexOf("Ana") !== -1) {
  console.log("Encontrado");
}
```

Ou use:

```js
if (nomes.includes("Ana")) {
  console.log("Encontrado");
}
```

### 5. Confundir o elemento removido com o array

```js
let ultimo = nomes.pop();
```

Depois dessa linha:

- `ultimo` contém o elemento removido;
- `nomes` contém o array já modificado.

### 6. Alterar o array durante um loop sem pensar nos índices

Remover elementos com `shift()`, `pop()` ou outros métodos enquanto um `for` avança pode mudar as posições e fazer o loop pular itens. Para filtragem, costuma ser mais claro criar um array de resultado ou usar `filter()`.

### 7. Usar uma variável sem inicializá-la

```js
let soma = 0;
let contador = 0;
let resultado = [];
```

O valor inicial depende da função da variável: zero para somas/contagens e array vazio para coleções de resultados.

## 18. Como pensar para resolver exercícios de arrays

Antes de programar, responda a estas perguntas:

1. **Quais são os dados?** Nomes, números, filmes, frutas?
2. **Preciso de um único resultado ou de outro array?** Uma soma é um número; uma seleção produz outro array.
3. **Preciso visitar todos os elementos?** Se sim, provavelmente haverá um loop.
4. **Qual é a condição?** Maior que 10, positivo, diferente de `"Ana"`?
5. **Qual variável guarda o resultado?** `soma`, `contador`, `maior` ou `resultado`?
6. **Qual deve ser o valor inicial?** `0`, `[]` ou o primeiro elemento?
7. **Vou alterar o original ou criar uma nova lista?** Essa decisão muda a solução.

### Modelo para transformar

```js
for (let i = 0; i < array.length; i++) {
  array[i] = /* cálculo usando array[i] */;
}
```

### Modelo para acumular

```js




let acumulador = 0;

for (let i = 0; i < array.length; i++) {
  acumulador += array[i];
}
```

### Modelo para contar

```js
let contador = 0;

for (let i = 0; i < array.length; i++) {
  if (/* condição sobre array[i] */) {
    contador++;
  }
}
```

### Modelo para selecionar elementos

```js
let resultado = [];

for (let i = 0; i < array.length; i++) {
  if (/* condição sobre array[i] */) {
    resultado.push(array[i]);
  }
}
```

### Modelo para encontrar o maior

```js
let maior = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > maior) {
    maior = array[i];
  }
}
```

## 19. Métodos modernos relacionados aos padrões dos exercícios

Os exercícios usam loops para ensinar a lógica por trás das operações. Depois de entender essa lógica, estes métodos deixam o código mais declarativo:

| Objetivo | Com loop | Método comum |
|---|---|---|
| executar uma ação em cada item | `for` | `forEach()` |
| transformar todos os itens | alterar/copiar dentro do `for` | `map()` |
| selecionar alguns itens | array vazio + `if` + `push` | `filter()` |
| reduzir a um resultado, como soma | acumulador | `reduce()` |
| verificar se um valor existe | comparação no loop | `includes()` |
| encontrar posição de um valor | comparação no loop | `indexOf()` |

Exemplo reunindo os métodos:

```js
let numeros = [3, 12, 8, 25, 7, 18];

let dobrados = numeros.map((numero) => numero * 2);
let maioresQueDez = numeros.filter((numero) => numero > 10);
let soma = numeros.reduce((total, numero) => total + numero, 0);

numeros.forEach((numero) => console.log(numero));

console.log(dobrados);       // [6, 24, 16, 50, 14, 36]
console.log(maioresQueDez);  // [12, 25, 18]
console.log(soma);           // 73
```

## 20. Folha de consulta rápida

```js
let lista = ["A", "B", "C"];

lista[0];                   // primeiro item
lista[1];                   // segundo item
lista[lista.length - 1];    // último item
lista.length;               // quantidade de itens

lista[1] = "X";            // altera o item do índice 1
lista.push("D");           // adiciona no final
lista.pop();                // remove do final
lista.unshift("Z");        // adiciona no início
lista.shift();              // remove do início

lista.includes("B");       // true ou false
lista.indexOf("B");        // índice ou -1

for (let i = 0; i < lista.length; i++) {
  console.log(lista[i]);
}

lista.forEach((item, indice) => {
  console.log(indice, item);
});
```

## Conclusão

Os exercícios começam com manipulações diretas e terminam em algoritmos importantes. O ponto central não é decorar comandos isolados, mas reconhecer padrões:

- **índice** para acessar ou alterar uma posição;
- **`length`** para trabalhar com o tamanho real da lista;
- **métodos das pontas** para adicionar e remover;
- **buscas** para descobrir existência ou posição;
- **loops** para processar todos os elementos;
- **acumulador** para somar;
- **contador** para medir quantos atendem a uma condição;
- **melhor valor até agora** para encontrar maior ou menor;
- **array de resultado** para selecionar ou excluir itens.

Entendendo esses padrões, você consegue resolver não só os 15 exercícios da pasta, mas também grande parte dos problemas iniciais com arrays.
