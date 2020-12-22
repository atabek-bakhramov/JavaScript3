const url = 'https://xkcd.now.sh/?comic=latest';
const image = document.getElementById('image');
const message = document.getElementById('message');

function runXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status < 400) {
      const dataBase = xhr.response;
      image.src = dataBase.img;
      message.innerText = 'Image is shown!';
      console.log(dataBase);
    } else {
      message.innerText = `That's weird... ${xhr.status}`;
    }
  })

  xhr.addEventListener('error', error => {
    message.innerText = `What?! ${error}`;
  })
}

async function runAxiosRequest() {
  try {
    const response = await axios.get(url);
    image.src = response.data.img;
    message.innerText = 'Image is shown!';
    console.log(response);
  } catch (error) {
    message.innerText = `Oops... ${error}`;
  }
}

// Call either one
// runXMLHttpRequest();
runAxiosRequest();