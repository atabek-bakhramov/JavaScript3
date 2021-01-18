import fetchData from './util/fetchData.js';
import createOptions from './util/createOptions.js';
import displayDetailsOfRepo from './util/displayDetailsOfRepo.js';
import setTags, { mainUrl } from './util/setTags.js';
import generateContributorsList from './util/generateContributorsList.js';
import showContributors from './util/showContributors.js';
import showError from './util/showError.js';

async function runMain() {
  try {
    const { contributorsListHolder, select, sectionDetails } = setTags();
    const data = await fetchData(mainUrl);
    createOptions(data, select);
    select.addEventListener('change', async event => {
      const index = event.target.value;
      const contributorUrl = await data[index].contributors_url;
      displayDetailsOfRepo(data[index], sectionDetails);
      const contributorData = await fetchData(contributorUrl);
      generateContributorsList(contributorData, contributorsListHolder);
      showContributors(contributorData);
    });
  } catch (error) {
    showError(error.message);
  }
}

window.addEventListener('load', runMain);