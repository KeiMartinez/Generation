document.addEventListener("DOMContentLoaded", function() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    console.log("Número secreto (para pruebas):", numeroSecreto);
    const intentos = [];
    
    const inputNumero = document.getElementById("inputNumero");
    const btnIntentar = document.getElementById("btnIntentar");
    const mensaje = document.getElementById("mensaje");
    const listaIntentos = document.getElementById("listaIntentos");
    
    btnIntentar.addEventListener("click", function() {
      const valor = inputNumero.value;
      const numeroIngresado = Number(valor);
      
      if (isNaN(numeroIngresado) || valor === "") {
        mensaje.textContent = "Por favor, ingresa un número válido.";
        return;
      }
      
      intentos.push(numeroIngresado);
      const li = document.createElement("li");
      li.textContent = numeroIngresado;
      listaIntentos.appendChild(li);
      
      if (numeroIngresado === numeroSecreto) {
        mensaje.textContent = "¡Felicidades, adivinaste el número secreto!";
        inputNumero.disabled = true;
        btnIntentar.disabled = true;
      } else {
        mensaje.textContent = "El número es incorrecto, intenta de nuevo.";
      }
      
      inputNumero.value = "";
      inputNumero.focus();
    });
  });
  