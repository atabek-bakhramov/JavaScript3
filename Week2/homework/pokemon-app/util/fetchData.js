import addPokemonToDOM from './addPokemonToDom.js';
import { arrayOfPokemon, containerOfOptions } from '../util/createTags.js';
// fetch data from the Pokemon API (array of objects)
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

export default fetchData;
