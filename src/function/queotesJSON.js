const randomNumbers = require("./random.js");
const isPackageCharacter = require("../util/isPackageCharacter.js");

const queotesJSON = (name, language = 'ru', type = 'queotes') => {
  let character = name.toLowerCase();
  let types = type.toLowerCase();
  let lang = language.toLowerCase();
  if (isPackageCharacter(character) === false) {
    return undefined;
  } else {
  if (lang === 'ru' || lang === 'en') {
    const getQuotes = require(`../character/${lang}/${character}.js`);
    if (types === 'all') {
      let content = getQuotes;
      return JSON.stringify(content);
    } else if (types === 'queotes') {
      let content = getQuotes[character];
      return JSON.stringify(content);
    } else if(types === 'info') {
      let content = getQuotes['info'];
      return JSON.stringify(content);
    } else {
      return undefined;
    }
  } else {
    return undefined;
  }
 }
};

module.exports = queotesJSON;