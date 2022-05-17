import renderPlayer from './data.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/rFqAITQwQRN1zUgCLEuM/scores';

export const postResponse = async (newPlayer) => {
  const post = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({ user: newPlayer.user, score: newPlayer.score }),
  });

  if (post.status !== 200) {
    throw new Error('You can POST your data here.');
  }
  const response = await post.json();
  return response;
};

export const getResponse = async () => {
  try {
    const get = await fetch(url);
    if (get.status !== 200) {
      throw new Error('You can GET your data here');
    }
    const response = await get.json();
    const sortedGameData = response.result.sort((a, b) => b.score - a.score);
    renderPlayer(sortedGameData);
  } catch (err) {
    // console.log(err.message);
  }
};
