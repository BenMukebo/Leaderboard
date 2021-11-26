import renderPlayer from './data.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/6wStD9QEfC3r7voMRSR3/scores';

export const postResponse = async (newPlayer) => {
  const post = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ user: newPlayer.user, score: newPlayer.score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const response = await post.json();
  return response;
};

export const getResponse = async () => {
  const get = await fetch(url);
  const response = await get.json();
  const sortedGameData = response.result.sort((a, b) => (b.score > a.score ? 1 : -1));
  renderPlayer(sortedGameData);
};
