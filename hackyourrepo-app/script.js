import fetchData from './util/fetchData.js';
import createOptions from './util/createOptions.js';
import displayDetailsOfRepo from './util/displayDetailsOfRepo.js';
import generateContributorsList from './util/generateContributorsList.js';
import setTags, { mainUrl } from './util/setTags.js';

const {
  contributorsListHolder,
  select,
  sectionDetails,
  containerOfNumbers,
} = setTags();



async function runMain() {
  const data = await fetchData(mainUrl);
  createOptions(data, select);
  select.addEventListener('change', async event => {
    const index = event.target.value;
    const contributorUrl = await data[index].contributors_url;
    displayDetailsOfRepo(data[index], sectionDetails);
    const contributorData = await fetchData(contributorUrl);
    generateContributorsList(
      contributorData,
      contributorsListHolder,
      currentPage,
    );
    setNumberOfPages(contributorData, containerOfNumbers);
  });
}

window.addEventListener('load', runMain);