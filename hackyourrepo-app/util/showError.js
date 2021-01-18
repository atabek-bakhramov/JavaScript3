const showError = errorMessage => {
  const select = document.getElementById('repositories');
  const contributorsSection = document.getElementById('section-contributors');
  const sectionDetails = document.getElementById('section-details');
  select.style.display = 'none';
  contributorsSection.style.display = 'none';
  sectionDetails.innerHTML = errorMessage;
  const sectionStyle = sectionDetails.style;
  sectionStyle.width = '100%';
  sectionStyle.backgroundColor = '#C0C0C0';
  sectionStyle.color = '#800000';
};

export default showError;
