function amendTheSentence(str) {
  let result = [];
  result[0] = str[0].toLowerCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result.push(" ", str[i].toLowerCase());
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

module.exports = amendTheSentence;
