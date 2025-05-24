
const BASE_URL = "https://rickandmortyapi.com/api/character";

// Implementa las Solicitudes con Fetch
const fetchBtn = document.getElementById('fetch-btn');
const dataContainer = document.getElementById('data-container');

// Implementa las Solicitudes con Axios
const axiosBtn = document.getElementById('axios-btn');

/* ------------------------- Función fetch-------------------------------*/

fetchBtn.addEventListener('click', () => {
    fetch(BASE_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error('HTTP ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      // Completar: renderizar datos en el contenedor
      // Pista: Usa `data.results` para iterar sobre los personajes obtenidos.
        renderCharacters(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

/* ------------------------- Función catch-------------------------------*/
axiosBtn.addEventListener('click', () => {
  axios.get(BASE_URL)
    .then(response => {
        const data = response.data;
        // Completar: renderizar datos en el contenedor
        renderCharacters(data.results);
    })
    .catch(error => {
      console.error('Error:', error);
      dataContainer.textContent = 'Hubo un error al obtener los datos.';
    });
});

/* -------------------- Función renderizar personajes --------------------------*/

function renderCharacters(characters) {
  dataContainer.innerHTML = '';
  characters.forEach(character => {
    const characterElement = document.createElement('div');
    characterElement.innerHTML = `<div class='box'>
        <img id="img" src="${character.image}" alt="${character.name}">
        <h3> Name: ${character.name}</h3>
        <p> Status: ${character.status}</p>
        <p> Gender: ${character.gender}</p>
      </div>
    `;
    dataContainer.appendChild(characterElement);
  });
}