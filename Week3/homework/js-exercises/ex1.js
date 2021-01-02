'use strict';

// Exercise A

async function fetchData(url) {
  try {
    const response = await fetch(url);
    console.log(await response.json());
  } catch (error) {
    console.log(error.message);
  }
}

fetchData('https://randomfox.ca/floof/');

// Exercise B

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function checkWords(arrayOfStrings) {
  if (!Array.isArray(arrayOfStrings)) {
    throw new TypeError('The passed argument has to be an array');
  }
  const capsArray = arrayOfStrings.map(word => {
    if (typeof word !== 'string') {
      throw new TypeError('All elements of the array have to be strings');
    }
    return word.toUpperCase();
  });
  return capsArray;
}

async function makeAllCaps(array) {
  try {
    console.log(await checkWords(array));
  } catch (error) {
    console.log(error.message);
  }
}

makeAllCaps(arrayOfWords);
