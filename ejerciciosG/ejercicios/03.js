function noCero(arr, idx){
    if (idx < 0 || arr.length < idx){ /*validar longitud del array*/
        return "Elemento no existe";
    }
    
    return arr[idx];
}

let result = noCero([1, 2], 0);
console.log(result);