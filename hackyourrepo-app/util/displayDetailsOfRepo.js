const displayDetailsOfRepo = (repo, detailsHolder) => {
  detailsHolder.innerHTML = `<table>
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

export default displayDetailsOfRepo;
