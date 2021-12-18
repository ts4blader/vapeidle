const shuffleArray = (array) => {
  let randomIndex;
  let result = array.map((item) => item);
  for (let i = 0; i < result.length; i++) {
    randomIndex = Math.floor(Math.random() * result.length);
    [result[i], result[randomIndex]] = [result[randomIndex], result[i]];
  }
  return result;
};

export { shuffleArray };
