let type = ({
  description: "",
  clan: "",
  status: "",
  date: "",
  growth: "",
  weight: "",
  element: "",
  rank: "",
  family: ""
});

const isPackageType = (arg) => {
  let text = arg.toLowerCase();
  if (type[text] === undefined) {
    return false;
  } else {
    return true;
  }
};

module.exports = isPackageType;