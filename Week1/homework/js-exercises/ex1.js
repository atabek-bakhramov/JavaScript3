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
        console.log("HTTP error!", xhr.status)
    }
  })

  xhr.addEventListener('error', (error) => {
    console.log('Network error, not HTTP\'s fault!', error);
  })  
}

function runAxios() {
  axios.get(url)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
        console.log("all done");
    });
}


console.log(`Run with XML ${runXML()}`);
console.log(`Run with Axios ${runAxios()}`);
