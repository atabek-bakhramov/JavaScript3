"use strict";

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
      "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
    forks: 130,
    updated: '2020-05-27 12:00:00',
  },
];

placeholderRepos.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).forEach(element => {
  const option = document.createElement('option');
  option.value = element.name;
  console.log(option.value);
  option.innerText = element.name;
  repositories.appendChild(option);
})

repositories.addEventListener('change', () => {
  switch (repositories.value) {
    case 'AndAnotherOne':
      repositoryValue.innerText = placeholderRepos[0].name;
      descriptionValue.innerText = placeholderRepos[0].description;
      forksValue.innerText = placeholderRepos[0].forks;
      updateValue.innerText = placeholderRepos[0].updated;
      break;
    case 'HYF-Is-The-Best':
      repositoryValue.innerText = placeholderRepos[1].name;
      descriptionValue.innerText = placeholderRepos[1].description;
      forksValue.innerText = placeholderRepos[1].forks;
      updateValue.innerText = placeholderRepos[1].updated;
      break;
    case 'SampleRepo1':
      repositoryValue.innerText = placeholderRepos[2].name;
      descriptionValue.innerText = placeholderRepos[2].description;
      forksValue.innerText = placeholderRepos[2].forks;
      updateValue.innerText = placeholderRepos[2].updated;
      break;
  }
})

