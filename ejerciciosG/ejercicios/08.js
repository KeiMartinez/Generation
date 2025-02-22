/*algoritmo que tome un array de objetos y devuelva un array de pares*/

let array = [{
    id: 1,
    name: "Nicolas",
}, {
    id: 2,
    name: "Luis",
}, { 
    id: 3,
    name: "Juan",
}];

let pares = [
    [1, {id: 1, name: "Nicolas"}],
    [2, {id: 2, name: "Luis"}],
    [3, {id: 3, name: "Juan"}],
];

function par(arr){
   let pairs = [];
   for (idx in arr){
    let elemento = arr[idx];
    pairs[idx] = [elemento.id, elemento];
   }
   return pairs;
}

let result = par(array);
console.log(result);