function fibonacci(n) {
    let fibSeries = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]);
    }
    return fibSeries.slice(0, n); 
}

function calcularFibonacci() {
    let input = document.getElementById("numero").value;
    let num = parseInt(input);

    if (isNaN(num) || num <= 0) {
        alert("Por favor, ingrese un número válido mayor que 0.");
        return;
    }

    let resultado = fibonacci(num);
    console.log("Serie de Fibonacci:", resultado.join(", ")); 
    document.getElementById("resultado").innerText = "Resultado: " + resultado.join(", "); 
}
