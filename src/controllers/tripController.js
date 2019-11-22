const moment = require('moment');
const { handleError } = require('../utils/helpers/expressHelper');

async function setTrip(req, res) {
  const { db } = req.app;
  const { id } = req.params;
  const { reason, origin_address, destination_address, price, image_url, date } = req.body;
  let trip;
  try {
    if (date !== undefined) {
      const dateFormat = moment(date).format('YYYY-MM-DD HH:mm:ss');
      trip = await db('trip').insert(
        { reason, origin_address, destination_address, price, date: dateFormat, employee_id: id },
      );
    } else {
      trip = await db('trip').insert(
        { reason, image_url, employee_id: id },
      );
    }
    if (trip.length > 0) {
      return res.status(200).json({ message: 'Se registró tu historial de movilidad' });
    }
    return res.status(400).json({ message: 'No se completó el historial de movilidad' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function getTrip(req, res) {
  const { db } = req.app;
  const { id } = req.params;
  try {
    const trips = await db.select('reason', 'origin_address', 'destination_address', 'price', 'image_url', 'date', 'employee.name', 'employee.lastname').from('trip')
      .innerJoin('employee', 'employee.id', 'trip.employee_id')
      .where('employee_id', id);
    if (trips.length === 0) {
      return res.status(404).send({ message: 'No se encontró historial de viajes para este usuario' });
    }
    return res.status(200).json(trips);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  setTrip,
  getTrip,
};
