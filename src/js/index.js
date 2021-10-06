import '../css/style.css';
import { renderData, data } from './data';

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
  console.log(newPlayer.player, newPlayer.score)
  data.push(newPlayer);
  renderData(data);

  inputName.value = '';
  inputScore.value = '';
});