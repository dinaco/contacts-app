/* Capitalizes the first letter of a Text Example = dino => Dino */

const CapitalLetter = string => {
  return string[0].toUpperCase() + string.slice(1);
};

export default CapitalLetter;
