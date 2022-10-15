

    let apellido = prompt("Por favor ingrese su Apellido")
    let nombre = prompt("Por favor ingrese su Nombre")
    let contacto = prompt ("Por favor ingrese su número de teléfono")
  
    if (
        apellido != "" &&
        nombre != "" &&
        contacto != ""
      ) {
        alert(
          "Gracias por contactarnos " +
            nombre +
            "\ " +
            apellido +
            "\nPresiona siguiente para seguir registrarte tu vehiculo"
        );
      } else {
        alert("error: Usted debe ingresar nombre, apellido y número de contacto");
        while(seguir ==! "");
      }
  
    
      class Auto
      {
          modelo;
          año;
          conductor;
          aseguradora;
          constructor(modelo, año, conductor, aseguradora) 
          {
          this.modelo=modelo;
          this.año=año;
          this.conductor=conductor,
          this.aseguradora=aseguradora;
      }
      
      }
      
      function cargarUnAuto ()
      { 
          let registro = new Auto ()
          registro.modelo = prompt("Ingrese marca y modelo de su automóvil");
          registro.año = prompt ("Ingrese el año de su automóvil")
          registro.conductor = prompt("Ingrese nombre del conductor propuesto.");
          registro.aseguradora = prompt("Ingrese su compañía de seguros.");
  
  
          return registro;
  
      }
      
      function cargarAutos ()
      {    
          let registro;
          let seguir;
          do {
              registro = cargarUnAuto();
              registrar.push (registro);
              seguir = prompt ("Desea cargar otro automóvil? Si/No");
          }while(seguir == "si");
      
      }
      
      function mostrarRegistrar(registrar)
      {
          for (let registro of registrar) 
          console.log("Modelo: "+ registro.modelo + "Año: " + registro.año + "Nombre del conductor propuesto: " + registro.conductor + "Aseguradora: " + registro.aseguradora)
      }
      
      const registrar = [] 
      cargarAutos (registrar)
      console.log(registrar)
      mostrarRegistrar(registrar)
     

    
  