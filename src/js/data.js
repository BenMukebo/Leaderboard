import image1 from '../img/game1.jpg';
import image2 from '../img/game2.jpg';
import image3 from '../img/game3.jpeg';
import image4 from '../img/game4.png';
import image5 from '../img/game5.jpeg';

const images = [image1, image2, image3, image4, image5];
const container = document.querySelector('.score-list');

const renderPlayer = (data) => {
  container.innerHTML = '';
  data.forEach((game) => {
    const image = images[Math.floor(Math.random() * images.length)];

    const li = document.createElement('li');
    li.classList.add('score-list-item');
    li.innerHTML = `<div class="person"><img src=${image} alt=""> ${game.user} : </div>
    <span> ${game.score}</span>`;
    container.appendChild(li);
  });
};

export default renderPlayer;
