import '../css/style.css';
import { postResponse as postRequest, getResponse as getRequest } from './api.js';
import win from '../img/win.png';

const inputName = document.querySelector('.inputName input');
const inputScore = document.querySelector('.inputScore input');
const submitBtn = document.querySelector('.btnSubmit button');
const refreshBtn = document.querySelector('.btnRefresh button');

const imgWin = document.querySelector('.header .crown');

imgWin.innerHTML = `<img src=${win} alt="crown">`;

submitBtn.addEventListener('click', (e) => {
  // e.preventDefault();
  const newPlayer = {
    user: inputName.value,
    score: inputScore.value,
  };

  if (newPlayer.user === '' || newPlayer.score === '') return;
  e.preventDefault();
  if (newPlayer.user.length > 10 || newPlayer.score.length > 4) return;
  if (newPlayer.user.length < 3 || newPlayer.score < 1) return;

  postRequest(newPlayer);
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', getRequest);

window.onload = () => {
  getRequest();
};
