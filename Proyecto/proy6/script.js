const { z } = window.Zod;

const registerSchema = z.object({
// PISTA: Define que el nombre debe ser una cadena no vacía.
    name: z.string().min(3, "El nombre es obligatorio"),
// PISTA: Valida que el correo tenga el formato correcto.
    email: z.string().email("Correo electrónico inválido"),
// PISTA: La contraseña debe tener al menos 6 caracteres.
    password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres"),
});
const errorMessage = document.getElementById('errors');
document.getElementById("registerForm").addEventListener("submit", (event) => {
event.preventDefault();

// Capturamos los valores ingresados
const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
};



try {
    // PISTA: Usa el método correcto de Zod para validar el esquema.
    registerSchema.parse(formData);
    alert("¡Registro exitoso!");
    errorMessage.textContent = '';
    event.target.reset();
} 

catch (error) {
    // PISTA: Muestra los mensajes de error en la página.
    errorMessage.textContent = error.errors.map((e) => e.message).join(', ');
}
});
