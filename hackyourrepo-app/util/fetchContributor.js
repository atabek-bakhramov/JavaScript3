const fetchContributor = event => {
  const index = event.target.value;
  const contributor = dataBase[index].contributors_url;
  displayDetailsOfRepo(dataBase[index]);
  fetch(contributor)
    .then(response => response.json())
    .then(array => {
      generateContributorsList(
        array,
        contributorsListHolder,
        rows,
        currentPage,
      );
      setNumberOfPages(array, containerOfNumbers, rows);
    });
}

async function fetchContributor(event, data) {
  const index = event.target.value;
  const contributor = data[index].contributors_url;
  displayDetailsOfRepo(data[index]);


}