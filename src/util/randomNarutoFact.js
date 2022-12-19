const randomNumbers = require("../function/random.js");

const randomHarutoFact = (language = 'ru') => {
  let lang = language.toLowerCase()
  if (lang === 'ru') {
    const getFact = require("../character/ru/NarutoFact.js");
    let length = (getFact['narutofact'].length)
    let random = randomNumbers(0, length);
   return getFact['narutofact'][random]
  } else if (lang === 'en') {
    const getFact = require("../character/en/NarutoFact.js");
    let length = (getFact['narutofact'].length);
    let random = randomNumbers(0, length);
   return getFact['narutofact'][random]
  } else {
    return undefined;
  }
};

module.exports = randomHarutoFact;