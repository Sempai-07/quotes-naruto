const packageCharacter = require("../util/packageCharacter.js");
const queotesCharacterName = require("./queotesCharacterName.js");
const randomNumbers = require("./random.js");

const queotesAll = (language = 'ru') => {
  let lang = language.toLowerCase();
  let character = packageCharacter(',').split(",");
  let length = character.length;
  let random = randomNumbers(1, length);
  return queotesCharacterName(character[random], lang);
};

module.exports = queotesAll;