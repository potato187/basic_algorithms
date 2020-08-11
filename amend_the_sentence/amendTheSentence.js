function amendTheSentence(str) {
  let result = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += " " + str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = amendTheSentence;
