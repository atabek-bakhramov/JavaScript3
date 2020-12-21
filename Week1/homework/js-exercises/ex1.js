const url = "https://www.randomuser.me/api";

function runXML() {
  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';
  xhr.open('GET', url);
  xhr.send();
  
  xhr.addEventListener('load', () => {    
    if (xhr.status < 400) {
      const dataBase = xhr.response;
      console.log(dataBase); 
    } else {
      console.log("HTTP error!", xhr.status);
    }
  })

  xhr.addEventListener('error', error => {
    console.log('Network error, not HTTP\'s fault!', error);
  })  
}

async function runAxios() {
  try {
    const response = await axios.get(url);
      console.log("Okay", response);
  } catch (error) {
    console.log("Hehe", error);
  }
}

runXML();
runAxios();
