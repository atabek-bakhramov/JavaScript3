url = 'https://xkcd.now.sh/?comic=latest';
const imageStatistics = document.getElementById('image-statistics');
const message = document.getElementById('message');

function runXMLHttpRequest() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.send();

  xhr.addEventListener('load', () => {
    if (xhr.status < 400) {
      const dataBase = xhr.response;
      imageStatistics.src = dataBase.img;
      message.innerText = 'Statistics up to date';
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
      // console.log(response.data);
    imageStatistics.src = response.data.img;
    message.innerText = 'Statistics up to date';
    console.log(response);
  } catch (error) {
    message.innerText = `Oops... ${error}`;
  }
}

// Call either one
// runXMLHttpRequest();
// runAxiosRequest();