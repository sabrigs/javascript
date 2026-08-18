// Cria um novo set sem duplicatas

/*
const arr = [1, 2, 2, 3, 4, 4, 5];
const set = new Set(arr);
console.log(set);
*/

// Cria um novo array sem duplicatas

/*
new Set(array): Cria o conjunto removendo duplicatas.
...: "Extrai" os valores únicos de dentro desse conjunto.
[]: Empacota esses valores soltos em uma nova lista (array).
*/

const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr);