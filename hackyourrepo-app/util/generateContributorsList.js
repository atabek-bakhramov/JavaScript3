const generateContributorsList = (array, wrapper, numPage) => {
  wrapper.innerText = '';
  const rows = 5;
  const page = numPage - 1;
  const start = rows * page;
  const end = start + rows;
  const setOfElements = array.slice(start, end);

  setOfElements.forEach(element => {
    const contributorHolder = document.createElement('div');
    contributorHolder.className = 'contributor-holder common-padding fade-in';

    const image = document.createElement('img');
    image.src = element.avatar_url;
    contributorHolder.appendChild(image);

    const anchor = document.createElement('a');
    anchor.href = element.html_url;
    contributorHolder.appendChild(anchor);

    const paragraph = document.createElement('p');
    paragraph.innerText = element.login;
    anchor.appendChild(paragraph);

    const countOfContributions = document.createElement('p');
    countOfContributions.innerText = element.contributions;
    countOfContributions.classList.add('counts');
    contributorHolder.appendChild(countOfContributions);

    wrapper.appendChild(contributorHolder);
  });
};

export default generateContributorsList;
