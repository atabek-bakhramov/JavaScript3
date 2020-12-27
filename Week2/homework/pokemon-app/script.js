function main() {
  const buttonGetPokemon = document.getElementById('button-get-pokemon');
  const containerOfOptions = document.getElementById('container-of-options');
  const imageOfPokemon = document.getElementById('image-of-pokemon');

  let arrayOfPokemons;

  const addPokemonToDOM = array => {
    array.forEach((element, index) => {
      const option = document.createElement('option');
      option.innerText = element.name;
      containerOfOptions.appendChild(option);
      option.value = index;
    });
  };

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(JSONdata => {
        arrayOfPokemons = JSONdata.results; // learnt destructuring, now eager to use it even when it is not that necessary :D
        addPokemonToDOM(arrayOfPokemons);
      })
  };

  buttonGetPokemon.addEventListener('click', fetchData);

  const fetchImage = event => {
    const pokemonURL = arrayOfPokemons[event.target.value].url;
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
        imageOfPokemon.src = response.sprites.front_default;
      })
  };

  containerOfOptions.addEventListener('change', fetchImage);
}

window.addEventListener('load', main);
