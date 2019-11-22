const { handleError } = require('../utils/helpers/expressHelper');

function getExample(req, res) {
  try {
    res.send('example');
  } catch (error) {
    const errorMessage = handleError(error);
    return res.json(errorMessage);
  }
}

module.exports = {
  getExample
};
