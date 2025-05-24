const mesasDisponibles = 5; 
// const mesasDisponibles = 2; 

// Función que simula la verificación de disponibilidad de mesas
function verificarDisponibilidad(mesasSolicitadas) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        if(mesasSolicitadas <= mesasDisponibles){
            resolve(`Las mesas han sido reservadas`);
        }
        else {
            reject(`Se le informa que en este momento no se pudo realizar su reserva, debido a la falta de disponibilidad de mesas. \n Mesas disponibles: ${mesasDisponibles}`);
        }
    }, 2000);  
  });
}

// Función que simula el envío de un correo de confirmación
function enviarConfirmacionReserva(nombreCliente) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 2);
      if(numero >= 1){
        resolve(`${nombreCliente} se ha enviado correctamente el correo.`);
      }
      else{
        reject(`${nombreCliente} ha ocurrido un error al momento de enviar el correo.`);
      }
    }, 1500);  
  });
}

// Función principal para manejar una reserva
async function hacerReserva(nombreCliente, mesasSolicitadas) {
  try {
    console.log("Verificando disponibilidad de mesas...");
    const disponibilidad = await verificarDisponibilidad(mesasSolicitadas);  
    console.log(disponibilidad);

    console.log("Verificando confirmación de reserva...");
    const confirmacion = await enviarConfirmacionReserva(nombreCliente);
    console.log(confirmacion);
  } 
  catch (error) {
    console.log("Error:", error);
  }
}

// Llamada de prueba
hacerReserva("Ronan Loyola", 5);  

