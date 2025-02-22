function calcularFactorial() {
    let inputElement = document.getElementById("numero");
    let resultadoElement = document.getElementById("resultado");
    
    let numero = parseInt(inputElement.value);

 
    if (isNaN(numero) || numero < 0) {
        resultadoElement.textContent = "Error: Ingresa un número válido mayor o igual a 0.";
        inputElement.value = ""; 
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }

   
    resultadoElement.textContent = `El factorial de ${numero} es: ${factorial}`;
}
