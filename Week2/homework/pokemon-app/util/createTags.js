let arrayOfPokemon;

const { body } = document;
const buttonGetPokemon = document.createElement('button');
buttonGetPokemon.innerText = 'Get Pokemon!';
buttonGetPokemon.style.display = 'block';
body.appendChild(buttonGetPokemon);
const containerOfOptions = document.createElement('select');
containerOfOptions.style.margin = '1rem 0';
containerOfOptions.style.display = 'block';
body.appendChild(containerOfOptions);
const imageOfPokemon = document.createElement('img');
imageOfPokemon.style.display = 'block';
body.appendChild(imageOfPokemon);

export { arrayOfPokemon, buttonGetPokemon, containerOfOptions, imageOfPokemon };
