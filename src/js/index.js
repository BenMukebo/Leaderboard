import '../css/style.css';
import { renderData, data } from './data.js';

const form = document.querySelector('form');
const inputName = document.querySelector('.inputName input');
const inputScore = document.querySelector('.inputScore input');

renderData(data);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const newPlayer = {
    player: inputName.value,
    score: inputScore.value,
  };
  if (newPlayer.player === '' || newPlayer.score === '') return;

  data.push(newPlayer);
  renderData(data);

  inputName.value = '';
  inputScore.value = '';
});