/* 
How to return more than one value from a function
Retornar como array, e depois criar uma varíavel como array e chamar a função
*/

function getCoordinates() {
    const x = 10;
    const y = 20;
    const z = 50;
    return [x, y, z];
}

const [x, y, z] = getCoordinates();

console.log(x, y, z)