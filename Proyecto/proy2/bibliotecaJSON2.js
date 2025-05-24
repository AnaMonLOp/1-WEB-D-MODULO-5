// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}


// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para simular la escritura de datos (asimilar la escritura de un archivo JSON)
function escribirDatos (datos, callback){
    setTimeout(() => {
        biblioteca = datos;
        callback();
    }, 1000);
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };
    escribirDatos(biblioteca, () => {
        biblioteca.libros.push(nuevoLibro);
        console.log(`Libro ${titulo} agregado y guardado correctamente`);
    });
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    escribirDatos(biblioteca, () => {
        const libro = biblioteca.libros.find( lib => lib.titulo === titulo);
        if(libro){    
            libro.disponible = nuevoEstado;
            console.log(`Disponibilidad del libro ${titulo} actualizada a ${libro.disponible ? 'Disponible' : 'Prestado'}`);
        }
    
       else{
            console.log(`Libro con titulo ${titulo} no existe`);
        }
    });
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();

agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
agregarLibro("Drácula", "Bram Stoker", "Novela", true);
mostrarLibros();
actualizarDisponibilidad("1984", false);
actualizarDisponibilidad("Drácula", false);
mostrarLibros();
