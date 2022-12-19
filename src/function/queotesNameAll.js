const queotesCharacterName = require("./queotesCharacterName.js");
const packageCharacter = require("../util/packageCharacter.js");
const randomNumbers = require("./random.js");
const character = ({
  en: ({
    asuma: "Asuma",
    choji: "Choji",
    danzo: "Danzo",
    deidara: "Deidara",
    gaara: "Gaara",
    gai: "Gai",
    genma: "Genma",
    haku: "Haku",
    hashirama: "Hashirama",
    hidan: "Hinata",
    hinata: "Hinata",
    ino: "Ino",
    iruka: "Iruka",
    itachi: "Itachi",
    jiraiya: "Jiraiya",
    kabuto: "Kabuto",
    kakashi: "Kakashi",
    kakuzu: "Kakuzu",
    kankuro: "Kankuro",
    kiba: "Kiba",
    kisame: "Kisame",
    kurama: "Kurama",
    kurinai: "Kurinai",
    madara: "Madara",
    maito: "Maito",
    minato: "Minato",
    nagato: "Nagato",
    naruto: "Naruto",
    neji: "Neji",
    obito: "Obito",
    orochimaru: "Orochimaru",
    paine: "Paine",
    rock_lee: "Rock_lee",
    sai: "Sai",
    sakura: "Sakura",
    sarutobi: "Sarutobi",
    sasori: "Sasori",
    shikamaru: "Shikamaru",
    shisui: "Shisui",
    tenten: "Tenten",
    tobirama: "Tobirama",
    tsunade: "Tsunade",
    utakata: "Utakata",
    yamato: "Yamato",
    yashamaru: "Yashamaru",
    zabuza: "Zabuza"
  }),
  ru: ({
    asuma: "Асума",
    choji: "Чоуджи",
    danzo: "Данзо",
    deidara: "Дейдара",
    gaara: "Гаара",
    gai: "Гай",
    genma: "Генма",
    haku: "Хаку",
    hashirama: "Хаширама",
    hidan: "Хидан",
    hinata: "Хидан",
    ino: "Ино",
    iruka: "Ирука",
    itachi: "Итачи",
    jiraiya: "Джирайя",
    kabuto: "Кабуто",
    kakashi: "Какаши",
    kakuzu: "Какузу",
    kankuro: "Канкуро",
    kiba: "Киба",
    kisame: "Кисаме",
    kurama: "Курама",
    kurinai: "Куринай",
    madara: "Мадара",
    maito: "Майто",
    minato: "Минато",
    nagato: "Нагато",
    naruto: "Наруто",
    neji: "Неджи",
    obito: "Обито",
    orochimaru: "Орочимару",
    paine: "Пейн",
    rock_lee: "Рок ли",
    sai: "Сай",
    sakura: "Сакура",
    sarutobi: "Сарутоби",
    sasori: "Сасори",
    shikamaru: "Шикамару",
    shisui: "Шисуй",
    tenten: "Тен тен",
    tobirama: "Тобирама",
    tsunade: "Цунаде",
    utakata: "Утаката",
    yamato: "Ямато",
    yashamaru: "Яшамару",
    zabuza: "Забуза"
  })
});


const queotesNameAll = (type = 'right', separator = ': ', language = 'ru') => {
    let lang = language.toLowerCase();
    let content = packageCharacter(',').split(",")
   let textLength = content.length;
    let random = randomNumbers(1, textLength);
    let nameCharacter = content[random];
    let name = character[lang][content[random]]
    if (type === 'right') {
      return `${name}${separator}${queotesCharacterName(nameCharacter, lang)}`;
    } else if (type === 'left') {
      return `${queotesCharacterName(nameCharacter, lang)}${separator}${name}`;
    } else {
      return undefined;
    }
};

module.exports = queotesNameAll;