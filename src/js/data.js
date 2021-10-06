export const data = [
  { player: 'name', score: 100 },
  { player: 'name', score: 20 },
  { player: 'name', score: 50 },
  { player: 'name', score: 125 },
  { player: 'name', score: 77 },
];

const container = document.querySelector('.score-list');

export const renderData = (data) => {
  container.innerHTML = '';
  data.forEach((game) => {
    const li = document.createElement('li');
    li.classList.add('score-list-item');
    li.innerHTML = `${game.player}: <span> ${game.score}</span>`;
    return container.appendChild(li);
  });
};
