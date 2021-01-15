import fetchData from './util/fetchData.js';
import createOptions from './util/createOptions.js';
import displayDetailsOfRepo from './util/displayDetailsOfRepo.js';
import generateContributorsList from './util/generateContributorsList.js';
import setTags from './util/setTags.js';

const {
  contributorsListHolder,
  select,
  sectionDetails,
  containerOfNumbers,
} = setTags();

let currentPage = 1;
const rows = 5;

const mainUrl = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

// the pagination is based on the source code of https://github.com/TylerPottsDev/vanillajs-pagination/blob/master/main.js/
function setButtons(page, array) {
  const button = document.createElement('button');
  button.innerText = page;

  if (currentPage === page) {
    button.classList.add('active');
  }
  button.addEventListener('click', () => {
    currentPage = page;
    generateContributorsList(array, contributorsListHolder, rows, currentPage);

    const currentButton = document.querySelector('button.active');
    currentButton.classList.remove('active');
    button.classList.add('active');
  });
  return button;
}

function setNumberOfPages(array, wrapper, rowsPerPage) {
  wrapper.innerHTML = '';
  const numberOfPages = Math.ceil(array.length / rowsPerPage);
  for (let i = 1; i <= numberOfPages; i++) {
    const button = setButtons(i, array);
    wrapper.appendChild(button);
  }
}

async function runMain() {
  const data = await fetchData(mainUrl);
  createOptions(data, select);
  select.addEventListener('change', async event => {
    const index = event.target.value;
    const contributorUrl = await data[index].contributors_url;
    await displayDetailsOfRepo(data[index], sectionDetails);
    const contributorData = await fetchData(contributorUrl);
    generateContributorsList(
      contributorData,
      contributorsListHolder,
      rows,
      currentPage,
    );
    setNumberOfPages(contributorData, containerOfNumbers, rows);
  });
}

window.addEventListener('load', runMain);