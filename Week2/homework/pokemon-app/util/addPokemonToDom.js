// create options of pokemons
const addPokemonToDOM = (array, container) => {
  array.forEach((element, index) => {
    const option = document.createElement('option');
    option.innerText = element.name;
    option.value = index;
    container.appendChild(option);
  });
};

export default addPokemonToDOM;
