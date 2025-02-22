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


function collection(arr){
   let collection = [];
   for (idx in arr){
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
   }
   
   return collection;
}

let result = par(array);
console.log(result);