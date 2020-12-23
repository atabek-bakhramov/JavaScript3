'use strict';

const repositories = document.getElementById('repositories');

let placeholderRepos = [
  {
    name: 'SampleRepo1',
    description: 'This repository is meant to be a sample',
    forks: 5,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'AndAnotherOne',
    description: 'Another sample repo! Can you believe it?',
    forks: 9,
    updated: '2020-05-27 12:00:00',
  },
  {
    name: 'HYF-Is-The-Best',
    description:
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

// sorts the array of objests based on the name property
placeholderRepos = placeholderRepos.sort((a, b) => {
  let x;
  if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
    x = 1;
  } else if (b.name.toLocaleLowerCase() > a.name.toLocaleLowerCase()) {
    x = -1;
  } else {
    x = 0;
  }
  return x;
});

placeholderRepos.forEach(element => {
  // creates an option tag for each element
  const option = document.createElement('option');
  option.value = element.name;
  option.innerText = element.name;
  repositories.appendChild(option);
});

// displays the data from the array depending on the chosen option
function selectRepo(name) {
  const targetedRepo = placeholderRepos.find(repo => repo.name === name);
  document.getElementById('repository-value').innerText = targetedRepo.name;
  document.getElementById('description-value').innerText = targetedRepo.description;
  document.getElementById('forks-value').innerText = targetedRepo.forks;
  document.getElementById('update-value').innerText = targetedRepo.updated;
}

repositories.addEventListener('change', e => {
  selectRepo(e.target.value);
});

// on load the page displays the info of the first object of the array
window.addEventListener('load', () => {
  selectRepo('AndAnotherOne');
});