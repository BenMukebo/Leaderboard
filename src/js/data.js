const container = document.querySelector('.score-list');

const renderPlayer = (data) => {
  container.innerHTML = '';
  data.forEach((game) => {
    const li = document.createElement('li');
    li.classList.add('score-list-item');
    li.innerHTML = `<div><img src="../img/games.jpg" alt=""> ${game.user} : </div>
    <span> ${game.score}</span>`;
    container.appendChild(li);
  });
};

export default renderPlayer;
