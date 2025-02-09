/*crear algoritmo que devuelva el precio  del producto mas impuesto*/

function precioCompleto(precio, impuesto){
     return precio + precio * impuesto;
}

let resultado = precioCompleto(12.00, 0.20);
console.log(resultado);