import { buttonGetPokemon, containerOfOptions } from './util/createTags.js';
import { fetchData, fetchImage } from './util/fetch.js';

function main() {
  buttonGetPokemon.addEventListener('click', fetchData);
  containerOfOptions.addEventListener('change', fetchImage);
}

window.addEventListener('load', main);
