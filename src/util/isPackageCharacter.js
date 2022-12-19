let character = ({
  asuma: "",
  choji: "",
  danzo: "",
  deidara: "",
  gaara: "",
  gai: "",
  genma: "",
  haku: "",
  hashirama: "",
  hidan: "",
  hinata: "",
  ino: "",
  iruka: "",
  itachi: "",
  jiraiya: "",
  kabuto: "",
  kakashi: "",
  kakuzu: "",
  kankuro: "",
  kiba: "",
  kisame: "",
  kurama: "",
  kurinai: "",
  madara: "",
  maito: "",
  minato: "",
  nagato: "",
  naruto: "",
  neji: "",
  obito: "",
  orochimaru: "",
  paine: "",
  rock_lee: "",
  sai: "",
  sakura: "",
  sarutobi: "",
  sasori: "",
  shikamaru: "",
  shisui: "",
  tenten: "",
  tobirama: "",
  tsunade: "",
  utakata: "",
  yamato: "",
  yashamaru: "",
  zabuza: ""
});

const isPackageCharacter = (arg) => {
  let text = arg.toLowerCase();
  if (character[text] === undefined) {
    return false;
  } else {
    return true;
  }
};

module.exports = isPackageCharacter;