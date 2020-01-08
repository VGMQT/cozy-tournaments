// Input to camelCase helper functions
const convertToString = input => {
  if (input) {
    if (typeof input === 'string') {
      return input;
    }

    return String(input);
  }
};

const customSplit = input => {
  const string = convertToString(input);
  const regEx = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

  return string.match(regEx);
};

const arrayToCamelCaseString = array => {
  let camelCasedString = '';
  const arrayLength = array.length;

  for (let i = 0; i < arrayLength; i++) {
    let modifiedString = array[i].toLowerCase();

    if (i !== 0) {
      modifiedString = modifiedString.substr(0, 1).toUpperCase() + modifiedString.substr(1);
    }

    camelCasedString += modifiedString;
  }

  return camelCasedString;
};

export const toCamelCase = input => arrayToCamelCaseString(customSplit(input));
//--
