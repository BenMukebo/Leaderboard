import renderPlayer from './data.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/RXGEUgHFa9saDlLAcSKm/scores';

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
