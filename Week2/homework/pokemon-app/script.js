import { buttonGetPokemon, containerOfOptions } from './util/createTags.js';
import fetchData from './util/fetchData.js';
import fetchImage from './util/fetchImage.js';

function main() {
  buttonGetPokemon.addEventListener('click', fetchData);
  containerOfOptions.addEventListener('change', fetchImage);
}

window.addEventListener('load', main);
