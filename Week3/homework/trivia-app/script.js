const API = 'https://opentdb.com/api.php?amount=5';

const container = document.getElementById('container');

async function fetchData(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    const array = json.results; // JSON.parse(data.replace(/&quot;/g,'"'))
    displayData(array);
  } catch (error) {
    console.log(error.message);
  }
}

async function displayData(result) {
  result.forEach(element => {
    const question = document.createElement('p');
    question.classList.add('question-button');
    const answer = document.createElement('p');
    answer.classList.add('answer-box');
    question.innerHTML = element.question;
    answer.innerHTML = element.correct_answer;
    container.appendChild(question);
    container.appendChild(answer);
    showAnswer(question);
  });
}

// switch from hidden answer to displayed one and vise-versa
// the code snippet of this function was taken from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
function showAnswer(target) {
  target.addEventListener('click', () => {
    target.classList.toggle('active');
    const toggled = target.nextElementSibling;
    if (toggled.style.display === 'block') {
      toggled.style.display = 'none';
    } else {
      toggled.style.display = 'block';
    }
  });
}

fetchData(API);