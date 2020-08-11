function checkPalindrome(str) {
  let cleanStr = [...str];
  for (let i = 0; i < cleanStr.length / 2; i++) {
    if (cleanStr[i] !== cleanStr[cleanStr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(str) {
  let cleanStr = [...str];
  for (let c of cleanStr) {
    if (c !== cleanStr.pop()) {
      return false;
    }
  }
  return true;
}

function checkPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr === str;
}

function checkPalindrome(str) {
  let cleanStr = [...str],
    isPalindrome = true;
  cleanStr.forEach((c, i) => {
    if (c !== cleanStr[cleanStr.length - i - 1]) {
      isPalindrome = false;
    }
  });
  return isPalindrome;
}

function checkPalindrome(str) {
  const cleanStr = [...str];
  return cleanStr.every((c, i) => c === cleanStr[cleanStr.length - i - 1]);
}

function checkPalindrome(str) {
  let cleanStr = [...str];
  return cleanStr.reduce((match, c, i) => {
    console.log(match);
    if (!match) {
      return false;
    }
    return c === cleanStr[cleanStr.length - i - 1];
  }, true);
}

module.exports = checkPalindrome;
