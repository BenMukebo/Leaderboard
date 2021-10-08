import image1 from '../img/game1.jpg';
// import image2 from '../img/game3.jpeg';
import image2 from '../img/game2.jpg';

const images = [image1, image2, image1, image2, image1, image2, image1, image2];

const container = document.querySelector('.score-list');

const renderPlayer = (data) => {
  container.innerHTML = '';
  data.forEach((game, index) => {
    const li = document.createElement('li');
    li.classList.add('score-list-item');
    li.innerHTML = `<div class="person"><img src=${images[index]} alt=""> ${game.user} : </div>
    <span> ${game.score}</span>`;
    container.appendChild(li);
  });
};

export default renderPlayer;
