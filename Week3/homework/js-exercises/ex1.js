'use strict';

// Exercise A
async function getData(url) {
  let json;
  try {
    const response = await fetch(url);
    json = response.json();
  }
  catch {
    console.log('Error!');
  }
  return json;
}

getData('https://randomfox.ca/floof/').then(result => {
  console.log(result);
});

// // Exercise B
const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];

async function makeAllCaps(array) {
  let checkedWords;
  try {
      checkedWords = await checkWords(array);
  }
  catch {
    console.log('Are you sure it is an array? 🤨');
  }
  return checkedWords;
}

async function checkWords(array) {
  const capsArray = array.map(word => {
    if (typeof word === 'string') {
      return word.toUpperCase();
    } else {
      return (new Error('The word is not a string or something? 🤷🏽‍♂️'));
    }
  });
  return capsArray;
} 

makeAllCaps(arrayOfWords).then(result => {
  console.log(result);
});