/* evento animacion letras */

function animacion() {
  const textoAnimacion = [
    ["D", "e", "s", "a", "r", "r", "o", "l", "l", "a", "d", "o", "r", "a", " ", "W", "e", "b"],
    ["I", " ", "a", "m", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"],
  ];

  let letraContador = 0;
  let nivelArray = 0;
  const contenedorAnimacion = document.querySelector(".contenedor_texto_animacion");

  function escribirTexto() {
    contenedorAnimacion.textContent += textoAnimacion[nivelArray][letraContador];
    letraContador++;

    if (letraContador === textoAnimacion[nivelArray].length) {
      clearInterval(intervaloEscritura);

      setTimeout(() => {
        borrarTexto();
      }, 1000);
    }
  }

  function borrarTexto() {
    let intervaloBorrado = setInterval(() => {
      contenedorAnimacion.textContent = contenedorAnimacion.textContent.slice(0, -1);

      if (contenedorAnimacion.textContent.length === 0) {
        clearInterval(intervaloBorrado);
        nivelArray = (nivelArray + 1) % textoAnimacion.length; // Cicla entre los textos
        letraContador = 0;

        setTimeout(() => {
          intervaloEscritura = setInterval(escribirTexto, 150);
        }, 500);
      }
    }, 100);
  }

  let intervaloEscritura = setInterval(escribirTexto, 150);
}

window.addEventListener("load", animacion);

