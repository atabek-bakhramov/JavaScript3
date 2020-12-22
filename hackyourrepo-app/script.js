'use strict';

// main variables
const repositories = document.getElementById('repositories');
const repositoryValue = document.getElementById('repository-value');
const descriptionValue = document.getElementById('description-value');
const forksValue = document.getElementById('forks-value');
const updateValue = document.getElementById('update-value');

const placeholderRepos = [
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
      'This repository contains all things HackYourFuture. That\'s because HYF is amazing!!!!',
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

placeholderRepos
  // sorts alphabetically the elements of the array depending on the first letter of the property name
  .sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0))
  .forEach(element => {
    // creates an option tag for each element
    const option = document.createElement('option');
    option.value = element.name;
    option.innerText = element.name;
    repositories.appendChild(option);
})

// displays the data from the array depending on the chosen option
repositories.addEventListener('change', () => {
  const placeholderReposFirstElement = placeholderRepos[0];
  const placeholderReposSecondElement = placeholderRepos[1];
  const placeholderReposThirdElement = placeholderRepos[2];
  // eslint-disable-next-line default-case
  switch (repositories.value) {
    case placeholderReposFirstElement.name:
      repositoryValue.innerText = placeholderReposFirstElement.name;
      descriptionValue.innerText = placeholderReposFirstElement.description;
      forksValue.innerText = placeholderReposFirstElement.forks;
      updateValue.innerText = placeholderReposFirstElement.updated;
      break;
    case placeholderReposSecondElement.name:
      repositoryValue.innerText = placeholderReposSecondElement.name;
      descriptionValue.innerText = placeholderReposSecondElement.description;
      forksValue.innerText = placeholderReposSecondElement.forks;
      updateValue.innerText = placeholderReposSecondElement.updated;
      break;
    case placeholderReposThirdElement.name:
      repositoryValue.innerText = placeholderReposThirdElement.name;
      descriptionValue.innerText = placeholderReposThirdElement.description;
      forksValue.innerText = placeholderReposThirdElement.forks;
      updateValue.innerText = placeholderReposThirdElement.updated;
      break;
  }
});
