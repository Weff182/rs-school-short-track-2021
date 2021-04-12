/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const indxNumb = email.lastIndexOf('@');
  let myEmail = email;
  myEmail = myEmail.split('');
  myEmail.splice(0, (indxNumb + 1));
  myEmail = myEmail.join('');
  return myEmail;
}

module.exports = getEmailDomain;
