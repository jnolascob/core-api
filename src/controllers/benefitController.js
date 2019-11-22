const { handleError } = require('../utils/helpers/expressHelper');

async function getBenefits(req, res) {
  const { db } = req.app;

  try {
    const benefits = await db('benefit');
    return res.json(benefits);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getBenefits,
};
