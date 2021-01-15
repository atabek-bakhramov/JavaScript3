import addPokemonToDOM from './addPokemonToDom.js';
import { containerOfOptions, imageOfPokemon } from './createTags.js';

let arrayOfPokemon;

// fetch data from the Pokemon API
async function fetchData() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
    const jsonData = await response.json();
    arrayOfPokemon = await jsonData.results;
    addPokemonToDOM(arrayOfPokemon, containerOfOptions);
  } catch (error) {
    console.log(error);
  }
}

// fetch data from the Pokemon API url depending on chosen option
async function fetchImage(event) {
  try {
    const pokemonURL = arrayOfPokemon[event.target.value].url;
    const response = await fetch(pokemonURL);
    const jsonData = await response.json();
    imageOfPokemon.src = jsonData.sprites.front_default;
  } catch (error) {
    console.log(error.message);
  }
}

export { fetchData, fetchImage };
