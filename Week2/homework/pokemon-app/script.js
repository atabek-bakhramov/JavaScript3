function main() {
  // set main tags
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

  let arrayOfPokemon;

  // create options of pokemons
  const addPokemonToDOM = array => {
    array.forEach((element, index) => {
      const option = document.createElement('option');
      option.innerText = element.name;
      option.value = index;
      containerOfOptions.appendChild(option);
    });
  };

  // fetch data from the Pokemon API (array of objects)
  const fetchData = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => response.json())
      .then(JSONdata => {
        arrayOfPokemon = JSONdata.results;
        addPokemonToDOM(arrayOfPokemon);
      });
  };

  buttonGetPokemon.addEventListener('click', fetchData);

  // fetch the image and place it inside the image tag
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
