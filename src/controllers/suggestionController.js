const { handleError } = require('../utils/helpers/expressHelper');

async function create(req, res) {
  const { db } = req.app;
  const { message } = req.body;
  try {
    if (message.trim().length === 0) {
      return res.status(400).json({ message: 'No puedes enviar sugerencias en blanco' });
    }
    const suggestion = await db('suggestion').insert(
      { message },
    );
    if (suggestion.length > 0) {
      return res.json({ message: 'Se registró tu sugerencia' });
    }
    return res.status(400).json({ message: 'No se completó la sugerencia' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  create,
};
