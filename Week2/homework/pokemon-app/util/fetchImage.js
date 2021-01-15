import { arrayOfPokemon, imageOfPokemon } from '../util/createTags.js';

// fetch the image and place it inside the image tag
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

export default fetchImage;