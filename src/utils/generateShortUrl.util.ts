/**
 * Generates a random string with a given size and characters from [a-z], [A-Z] and [0-9]
 * @example
 * generateShortUrl(6)
 * => returns AgH9k3
 * @param {number} length - The length of the string to generate
 * @returns {string} - The generated string
 */
function generateShortUrl(length: number) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

export { generateShortUrl };
