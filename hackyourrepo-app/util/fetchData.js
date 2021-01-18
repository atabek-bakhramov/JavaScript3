import showError from './showError.js';

async function fetchData(url) {
  const response = await fetch(url);
  const jsonData = await response.json();
  return jsonData;
}

export default fetchData;
