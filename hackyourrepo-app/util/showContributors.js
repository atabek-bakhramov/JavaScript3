import generateContributorsList from './generateContributorsList.js';

// the pagination is based on the source code of https://github.com/TylerPottsDev/vanillajs-pagination/blob/master/main.js/
function showContributors(contributorData, currentPage = 1) {
  const contributorsPlaceholder = document.getElementById(
    'contributors-placeholder',
  );
  const numbersPlacerholder = document.getElementById('numbers-placeholder');
  numbersPlacerholder.innerText = '';
  generateContributorsList(
    contributorData,
    contributorsPlaceholder,
    currentPage,
  );
  const numberOfPages = Math.ceil(contributorData.length / 5);
  if (numberOfPages > 1) {
    for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber += 1) {
      const button = document.createElement('button');
      button.className = pageNumber === currentPage ? 'active' : '';
      button.innerText = pageNumber;
      button.addEventListener('click', () =>
        showContributors(contributorData, pageNumber),
      );
      numbersPlacerholder.appendChild(button);
    }
  }
}

export default showContributors;
