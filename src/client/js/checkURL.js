const validUrl = require("valid-url");

// validate the url
const isValide = (url) => Boolean(validUrl.isWebUri(`${url}`));

const validate = (url) => {
  return isValide(url);
};

export { validate };
