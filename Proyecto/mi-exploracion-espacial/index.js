const cowsay = require("cowsay"); 
const planetas = require('./planetas');

console.log(cowsay.say({
  text: "¡Bienvenido a la exploración espacial!",
  e: "oO",
  T: "U "
}));


planetas.forEach(planeta => {
  console.log("^--^^^--^^^^-----^^^----^--^^^--^^^^")
  console.log(`¡Planeta ${planeta.nombre} descubierto!`);
  console.log(`Descripción: ${planeta.descripcion}`);
  console.log(`Descubierto en: ${planeta.descubiertoEn}`);
  console.log(`Imagen: ${planeta.imagen}`);
  console.log('---');
});
