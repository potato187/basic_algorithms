function checkStrongPassword(password) {
  const regex = new RegExp(
    /^(?=.*[a-z])(?=.*[!@#$$*])(?=.*[0-9])(?=.*[a-z]).{6,}$/
  );
  return regex.test(password);
}

module.exports = checkStrongPassword;
