/*funcion que resive dos parametros y cual es el mayor*/

function cualEsMayor(a, b) { 
    if (a > b){
        return a;
    } else {
        return b;
    }
}

/*con operador ternario*/
function cualEsMayor (a, b){
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);