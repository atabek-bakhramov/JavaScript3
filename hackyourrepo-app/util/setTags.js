export const mainUrl = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function setTags() {
  const { body } = document;

  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);

  const header = document.createElement('header');
  header.className = 'header common-padding';
  container.appendChild(header);

  const label = document.createElement('label');
  label.setAttribute('for', 'repositories');
  label.innerText = 'HYF Repositories';
  header.appendChild(label);

  const select = document.createElement('select');
  select.setAttribute('name', 'repositories');
  select.id = 'repositories';
  header.appendChild(select);

  const defaultOption = document.createElement('option');
  defaultOption.innerText = '-Choose a repo-';
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  const main = document.createElement('main');
  main.classList.add('main');
  container.appendChild(main);

  const sectionDetails = document.createElement('section');
  sectionDetails.className = 'details common-padding';
  main.appendChild(sectionDetails);

  const contributorsSection = document.createElement('section');
  contributorsSection.className = 'contributors';
  main.appendChild(contributorsSection);

  const contributorsHeader = document.createElement('div');
  contributorsHeader.innerText = 'Contributors';
  contributorsHeader.className = 'common-padding';
  contributorsSection.appendChild(contributorsHeader);

  const contributorsListHolder = document.createElement('div');
  contributorsSection.appendChild(contributorsListHolder);

  const containerOfNumbers = document.createElement('div');
  containerOfNumbers.className = 'pagenumbers';
  contributorsSection.appendChild(containerOfNumbers);

  const footer = document.createElement('footer');
  footer.className = 'footer common-padding';
  body.appendChild(footer);

  const footerParagraph = document.createElement('p');
  footerParagraph.innerText = 'HYF Repositories';
  footer.appendChild(footerParagraph);

  return {
    contributorsListHolder,
    select,
    sectionDetails,
    containerOfNumbers,
  }
}

export default setTags;
