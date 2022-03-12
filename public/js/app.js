console.log('CLient side JS loaded');

fetch('http://puzzle.mead.io/puzzle').then((response) => {
  response.json().then((data) => {
    console.log(data);
  });
});

const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

function getForecastData(address) {
  messageOne.textContent = 'Loading...';
  messageTwo.textContent = '';
  fetch('http://localhost:3000/weather?address=' + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        console.log(data.error);
        return;
      }
      messageOne.textContent = data.location;
      messageTwo.textContent = data.forecast;
      console.log(data.location);
      console.log(data.forecast);
    });
  });
}

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const location = search.value;
  getForecastData(location);
});
