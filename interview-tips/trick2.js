/* 
Ordenar um array
Sim, você está correto! Quando você usa o .sort() sem uma função de comparação (2:18), o JavaScript converte cada elemento para uma string (caso ainda não seja uma) e compara esses valores baseando-se na ordem lexicográfica (tabela Unicode/ASCII).

Basicamente, ele compara os caracteres um a um, da esquerda para a direita, usando seus códigos numéricos. Por isso que, em uma ordenação de strings, "10" vem antes de "5": ele olha o primeiro caractere "1" e compara com "5". Como o código ASCII de "1" é menor que o de "5", o JavaScript entende que "10" deve vir antes.

Por isso, para ordenar números de forma lógica, é indispensável usar a função (x, y) => x - y, que força o motor do JavaScript a tratar os valores como números e realizar uma subtração aritmética real, ignorando a tabela ASCII.*/

const nums = [10, 1, 5];
nums.sort((x, y) => x - y);

console.log(nums);