const isPackageCharacter = require("../util/isPackageCharacter.js");
const isPackageType = require("../util/isPackageType.js");

const character = (character, type, language = 'ru') => {
  let lang = language.toLowerCase();
  let name = character.toLowerCase();
  let types = type.toLowerCase();
  if (isPackageCharacter(character) === false) {
    return undefined;
  } else {
    const getQuotes = require(`../character/${lang}/${name}.js`);
    if (isPackageType(types) === false) {
      return undefined;
    } else {
      let content = getQuotes['info'][types]
      return content;
    }
  }
};

module.exports = character;