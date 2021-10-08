import '../css/style.css';
import { postResponse, getResponse } from './api.js';

const inputName = document.querySelector('.inputName input');
const inputScore = document.querySelector('.inputScore input');
const submitBtn = document.querySelector('.btnSubmit button');
const refreshBtn = document.querySelector('.btnRefresh button');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const newPlayer = {
    user: inputName.value,
    score: inputScore.value,
  };
  if (newPlayer.user === '' || newPlayer.score === '') return;

  postResponse(newPlayer);
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', getResponse);

window.onload = () => {
  getResponse();
};