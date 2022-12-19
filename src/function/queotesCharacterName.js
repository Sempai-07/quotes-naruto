const randomNumbers = require("./random.js");
const isPackageCharacter = require("../util/isPackageCharacter.js");

const queotesCharacterName = (name, language = 'ru') => {
  let character = name.toLowerCase()
  let lang = language.toLowerCase()
  if (isPackageCharacter(character) === false) {
    return undefined;
  } else {
  if (lang === 'ru' || lang === 'en') {
    const getQuotes = require(`../character/${lang}/${character.replace('maito', 'maito_dai')}.js`);
    let length = (getQuotes[character].length);
    let random = randomNumbers(1, length);
   return getQuotes[character][random];
  } else {
    return undefined;
  }
 }
};

module.exports = queotesCharacterName;