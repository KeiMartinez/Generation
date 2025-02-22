function convertirTemperatura() {
    let inputElement = document.getElementById("temperatura");
    let resultadoElement = document.getElementById("resultado");
    
    let celsius = parseFloat(inputElement.value);


    if (isNaN(celsius)) {
        resultadoElement.textContent = "⚠️ Error: Ingresa un número válido.";
        inputElement.value = ""; 
        return;
    }


    let kelvin = celsius + 273.15;
    let fahrenheit = (celsius * 9/5) + 32;


    resultadoElement.innerHTML = `
        Grados Kelvin: ${kelvin.toFixed(2)}<br>
        Grados Fahrenheit: ${fahrenheit.toFixed(2)}
    `;


    console.log(`Grados Kelvin: ${kelvin.toFixed(2)}`);
    console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)}`);
}
