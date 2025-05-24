document.getElementById('registroEvento').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío automático del formulario
 
    // Variables
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const intereses = document.querySelectorAll('input[name="intereses"]:checked');
    const horario = document.querySelector('input[name="horario"]:checked');
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const archivo = document.getElementById('archivo').files[0];

    // Validaciones básicas
    if (!nombre || !correo || !telefono || intereses.length === 0 || !horario || !hora || !archivo) {
    alert('Por favor, completa todos los campos obligatorios.');
    return;
    }

    const requisito1 =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!requisito1.test(correo)){
        alert('Por favor, introduce un correo electrónico válido. ');
        return;
    }

    const requisito2 = /^[0-9]{10,}$/
    if(!requisito2.test(telefono)){
        alert('Por favor, ingrese un número de télefono válido ');
        return;
    }

    //requisito3: que la fecha que ingresemos no sea hoy
    const hoy = new Date();
    const fechaIngresada = new Date(fecha);
    if (fechaIngresada < hoy) {
        alert('La fecha seleccionada no puede ser anterior a hoy.');
        return;
    }

    //requisito4: validar tipo de archivo permitido 
    // Usamos el estándar MIME type para identifcar el tipo de contenido de un archivo
    const tipoArchPermitido = ['application/pdf'];
    if(!tipoArchPermitido.includes(archivo.type)){
        alert('Solo se permiten archivos PDF');
        return;
    }

    // Si todo está bien
    alert('Registro exitoso. ¡Gracias por registrarte!');
});