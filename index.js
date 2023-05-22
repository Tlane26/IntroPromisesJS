// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Promises</h1>`;

const promise = new Promise((resolve, reject) => {
  // Logica de la promesa
});

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(reject('terminado'), 2000);
});

miPromesa.then(
  (result) => console.log(result),
  (error) => console.log(`Error: ${error}`)
);

const miPromesaRechazada = new Promise((resolve, reject) => {
  reject('Rechazado');
});

miPromesaRechazada.catch((error) => console.log(`unu: ${error}`));

console.log('Voy primis');

// API
fetch('https://pokeapi.co/api/v2/pokemon/ditto')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error fetching, status: ${response.status}`);
    }
    return response.json();
  })
  .then((pokemon) => console.log(pokemon));

// async/await
const fetchPokemon = async (pokemon) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const pokemonInfo = await response.json();

  return pokemonInfo;
};

(() => {
  const pikachu = await fetchPokemon('pikachu');
  console.log(pikachu);
})();
