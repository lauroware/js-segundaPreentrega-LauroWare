
 
    function correr1 (){
      let correoIngresado = prompt("Ingrese su correo electrónico");
      
      if (
        correoIngresado != "" 
      ) {
        alert(
          "Correo electrónico: " +
            correoIngresado 
        );
      } else {
        alert("error: Usted debe ingresar su correo electrónico");
        while(seguir ==! "");

      }
      

      
      let preciolIngresado = prompt("Ingrese el valor de su viaje. La Plata $ 3000. Mar del plata $ 7000. Rosario $ 7000. Córoba $ 9000");


      let pasajerosIngresado = prompt(
        "Ingrese la cantidad de pasajeros"
      );
      let resultado;
  

      if (pasajerosIngresado >= 4) {
        alert("Accede al 25% de descuento, será caluclado luego del valor del viaje");
      } else {
        alert("No accede a descuento");
      }
      
      
      
      function valorViaje(
        preciolIngresado,
        pasajerosIngresado,
      
      ) {
        resultado =
          preciolIngresado *
          pasajerosIngresado
      ;
        return resultado;
      }
      
      resultado = valorViaje(
        preciolIngresado,
        pasajerosIngresado,
      
      );
      alert("El valor de tu viaje:" + "\n" + resultado);
      
      
      if (pasajerosIngresado >= 4) {
      
        function valorViaje(
          preciolIngresado,
          pasajerosIngresado,
        
        ) {
          resultado =
            preciolIngresado *
            pasajerosIngresado * 0.75
        ;
          return resultado;
        }
        
        resultado = valorViaje(
          preciolIngresado,
          pasajerosIngresado,
        
        );
        alert("El valor de tu viaje con descuento es:" + "\n" + resultado);
      
      } else {
       ;
      }
      
      
      
      }
      
      
      
      
