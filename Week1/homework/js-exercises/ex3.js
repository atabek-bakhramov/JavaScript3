// general variables
const url = 'https://dog.ceo/api/breeds/image/random';
const xhrButton = document.getElementById('xhr-button');
const axiosButton = document.getElementById('axios-button');

function sendXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status < 400) {
      placeImage(xhr.response.message);
    } else {
      console.log('Error is detected', xhr.status);
    }
  })

  xhr.addEventListener('error', error => {
    console.log("Error is coming...", error);
  })
}

async function sendAxiosRequest() {
  try {
    const response = await axios.get(url);
    placeImage(response.data.message)
    console.log(response);
  } catch (error) {
    console.log('Displaying an error', error);
  }
}

function placeImage(response) {
  const body = document.body;
  const unorderedList = document.createElement('ul');
  const listItem = document.createElement('li');
  const image = document.createElement('img');
  body.appendChild(unorderedList);
  unorderedList.appendChild(listItem);
  listItem.appendChild(image);
  image.src = `${response}`;
}

xhrButton.addEventListener('click', sendXMLHttpRequest);
axiosButton.addEventListener('click', sendAxiosRequest);
