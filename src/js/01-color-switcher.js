const dataStartRef = document.querySelector('[data-start]');
const dataStopRef = document.querySelector('[data-stop]');
const bodyRef = document.querySelector('body');

let timerId = null;

dataStartRef.addEventListener('click', onStart);
dataStopRef.addEventListener('click', onStop);

function onStart() {
  timerId = setInterval(getBgColor, 1000);

  dataStartRef.disabled = true;
  dataStopRef.disabled = false;
}

function onStop() {
  clearInterval(timerId);

  dataStartRef.disabled = false;
  dataStopRef.disabled = true;
}

function getBgColor() {
  bodyRef.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
