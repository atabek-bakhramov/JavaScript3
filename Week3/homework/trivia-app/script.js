const API = 'https://opentdb.com/api.php?amount=5';

const container = document.getElementById('container');

async function fetchData(url) {
  try {
    const data = await fetch(url);
    const json = await data.json();
    const array = json.results; // JSON.parse(data.replace(/&quot;/g,'"'))
    displayData(array);
    console.log(array);
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
    question.innerText = element.question;
    answer.innerText = element.correct_answer;
    container.appendChild(question);
    container.appendChild(answer);
    showAnswer(question);
  });
}

// switch from hidden answer to displayed one and vise-versa
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





// window.addEventListener('load', function () {
//   console.log(container);
// })