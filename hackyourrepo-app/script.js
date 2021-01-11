'use strict';

window.addEventListener('load', () => {
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

  const footer = document.createElement('footer');
  footer.className = 'footer common-padding';
  body.appendChild(footer);

  const footerParagraph = document.createElement('p');
  footerParagraph.innerText = 'HYF Repositories';
  footer.appendChild(footerParagraph);

  const createOptions = array => {
    array.sort((a, b) => {
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
    array.forEach((element, index) => {
      const option = document.createElement('option');
      option.innerText = element.name;
      option.value = index;
      select.appendChild(option);
    });
  };

  let dataBase;

  const showError = () => {
    select.style.display = 'none';
    contributorsSection.style.display = 'none';
    sectionDetails.innerHTML = 'Network request failed';
    const sectionStyle = sectionDetails.style;
    sectionStyle.width = '100%';
    sectionStyle.backgroundColor = '#C0C0C0';
    sectionStyle.color = '#800000';
  };

  const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';
  const fetchData = () => {
    fetch(url)
      .then(response => response.json())
      .then(response => {
        dataBase = response;
        createOptions(dataBase);
      })
      .catch(() => {
        showError();
      });
  };

  fetchData();

  const generateContributorsList = array => {
    contributorsListHolder.innerText = '';
    array.forEach(element => {
      const contributorHolder = document.createElement('div');
      contributorHolder.className = 'contributor-holder common-padding';
      contributorsListHolder.appendChild(contributorHolder);
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
    });
  };

  const displayDetailsOfRepo = repo => {
    sectionDetails.innerHTML = `<table>
        <tr>
          <td>Repository:</td>
          <td><a href="${repo.html_url}">${repo.name}</a></td>
        </tr>
        <tr>
          <td>Description:</td>
          <td>${repo.description || ''}</td>
        </tr>
        <tr>
          <td>Forks:</td>
          <td>${repo.forks || ''}</td>
        </tr>
        <tr>
          <td>Updated:</td>
          <td>${new Date(repo.updated_at).toLocaleString()}</td>
        </tr>
      </table>`;
  };

  const fetchContributor = event => {
    const index = event.target.value;
    const contributor = dataBase[index].contributors_url;
    displayDetailsOfRepo(dataBase[index]);
    fetch(contributor)
      .then(response => response.json())
      .then(response => {
        generateContributorsList(response);
      });
  };

  select.addEventListener('change', fetchContributor);
});
