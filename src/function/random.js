const randomNumbers = (min, max) => {
  let mumber = (Math.random() * (min - max) + max).toFixed(0);
  let mumber_1 = mumber-1;
  if (mumber_1 === -1) {
    mumber_1 = mumber_1+1
  } else if (mumber_1 === 0) {
    mumber_1 = mumber_1+1
  }
  return mumber_1;
};

module.exports = randomNumbers;