const { handleError } = require('../utils/helpers/expressHelper');

async function create(req, res) {
  const { db } = req.app;
  const { reason, comment, attendance_id } = req.body;

  const register_date = Date.now();
  console.log(`--> now: ${register_date}`);

  try {
    const justification = await db('justification').insert(
      {
        reason,
        comment,
        attendance_id,
      },
    );
    if (justification.length > 0) {
      return res.json({ message: 'Se registró tu justificación' });
    }
    return res.status(400).json({ message: 'No se completó el registro' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  create,
};
