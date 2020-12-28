function main() {
  const buttonGetPokemon = document.getElementById('button-get-pokemon');
  const containerOfOptions = document.getElementById('container-of-options');
  const imageOfPokemon = document.getElementById('image-of-pokemon');

  let arrayOfPokemon;

  const addPokemonToDOM = array => {
    array.forEach((element, index) => {
      const option = document.createElement('option');
      option.innerText = element.name;
      option.value = index;
      containerOfOptions.appendChild(option);
    });
  };

  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(JSONdata => {
        arrayOfPokemon = JSONdata.results;
        addPokemonToDOM(arrayOfPokemon);
      });
  };

  buttonGetPokemon.addEventListener('click', fetchData);

  const fetchImage = event => {
    const pokemonURL = arrayOfPokemon[event.target.value].url;
    fetch(pokemonURL)
      .then(response => response.json())
      .then(response => {
        imageOfPokemon.src = response.sprites.front_default;
      });
  };

  containerOfOptions.addEventListener('change', fetchImage);
}

window.addEventListener('load', main);
