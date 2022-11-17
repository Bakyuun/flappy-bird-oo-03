const juego = {
    // 1. Agrega la propiedad timerId
    timerId: 0,
    // 2. Agrega la propiedad gravedad
    gravedad: 2,
  
    // 3. Agrega el método aleatorio()
    aleatorio: function (min, max) {
      return Math.round(Math.random() * (max - min) + min);
      // Escribe codigo del método 
    },
  

    // 12. Agrega el método loop()
    loop: function () {
     bird.efectoGravedad(),
     bird.dibujar(),
     juego.verificaColision()
    },
  
    // 13. Agrega el método iniciar()
    iniciar: function() {
     document.addEventListener("keyup", bird.mover)
     juego.timerId = setInterval(juego.loop, 20)
      // Escribe codigo del método
    }
  
  };
  



const bird = {
    // 4. Agrega la propiedad div
   div: document.querySelector(".bird"),

    // 5. Agrega la propiedad bottom
   bottom: juego.aleatorio(10, 570),

    // 6. Agrega la propiedad left
    left: 250,

    // 7. Agrega la propiedad width
    width: 60,

    // 8. Agrega la propiedad height
    height: 45,
  
    // 9. Agrega el método efectoGravedad()
    efectoGravedad: function () {
      bird.bottom = bird.bottom - juego.gravedad
      // Agrega codigo del método
    },
  
    // 10. Agrega el método dibujar()
    dibujar: function () {
      bird.div.style.bottom = bird.bottom + "px" 
      //Agrega codigo del método
    },

    // 11. Agrega el método mover()
    mover: function () {
      bird.bottom = bird.bottom + 40
    }

}
   

// llama a juego.iniciar()
juego.iniciar()
