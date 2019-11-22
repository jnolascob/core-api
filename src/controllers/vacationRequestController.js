const moment = require('moment');
const { handleError } = require('../utils/helpers/expressHelper');

async function setVacationRequest(req, res) {
  const { db } = req.app;
  const { id } = req.params;
  const { start_date, end_date, description } = req.body;
  try {
    const startDate = moment(start_date).format('YYYY-MM-DD HH:mm:ss');
    const endDate = moment(end_date).format('YYYY-MM-DD HH:mm:ss');
    const vacation_request = await db('vacation_request').insert(
      { start_date: startDate, end_date: endDate, description, employee_id: id },
    );
    if (vacation_request.length > 0) {
      return res.status(200).json({ message: 'Se envió tu solicitud de vacaciones' });
    }
    return res.status(400).json('No se envió tu solicitud de vacaciones');
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  setVacationRequest,
};
