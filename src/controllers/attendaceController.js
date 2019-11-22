const moment = require('moment');
const { handleError } = require('../utils/helpers/expressHelper');

async function initDay(req, res) {
  const { db } = req.app;

  try {
    const lastAttendance = await db.first('register_date').from('attendance').orderBy('id', 'desc');
    const register_date = new Date(lastAttendance.register_date);
    const current_date_formated = `${register_date.getFullYear()}-${register_date.getMonth() + 1}-${register_date.getDate()}`;

    if (`${current_date_formated}` === moment().format('YYYY-M-D')) {
      return res.status(400).json({ message: 'El dia ya ha sido inicializado con anterioridad' });
    }
    const current_date = moment().format('YYYY-MM-DD');
    const employees = await db.select('id').from('employee');

    const attendanceArray = employees.map(item => ({
      employee_id: item.id,
      register_date: current_date,
    }));

    const result = await db('attendance').insert(attendanceArray);
    if (result.length > 0) {
      return res.json({ message: 'Inicialización completada' });
    }
    return res.status(400).json({ message: 'No se pudo registrar' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function registerAttendance(req, res) {
  const { db } = req.app;
  const { employee_id } = req.body;

  const current_date = moment().format('YYYY-MM-DD');

  try {
    const employee = await db.first().from('employee').where({ id: employee_id });
    const attendance = await db
      .first('employee_id', 'register_date', 'check_in', 'check_out', 'status')
      .from('attendance')
      .where({ employee_id, register_date: current_date });

    if (!employee) { return res.status(400).json({ message: 'El usuario no existe' }); }
    if (attendance) {
      if (attendance.check_in && attendance.check_out) {
        return res.json({ message: 'Usted ya registró su entrada y salida' });
      }
      if (!attendance.check_in) {
        await db('attendance')
          .where({ employee_id, register_date: current_date })
          .update({
            check_in: new Date(),
            status: 'attended',
          });
        return res.json({ message: 'Su ingreso se ha registrado correctamente' });
      }
      if (attendance.check_in && !attendance.check_out) {
        await db('attendance')
          .where({ employee_id, register_date: current_date })
          .update({
            check_out: new Date(),
            status: 'attended',
          });
        return res.json({ message: 'Su salida se ha registrado correctamente' });
      }
    }
    return res.status(400).json({ message: 'Hoy no es posible registrar la asistencia' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

async function getAttendanceByMonth(req, res) {
  const { db } = req.app;
  const { month, year } = req.body;
  const { id } = req.params;

  try {
    const attendances = await db.select('check_in', 'check_out', 'status', 'has_justification').from('attendance')
      .whereRaw(`YEAR(register_date) = ${year}`)
      .whereRaw(`MONTH(register_date) = ${month}`)
      .whereRaw(`employee_id = ${id}`);

    if (attendances.length === 0) {
      return res.status(400).json({ message: 'Este usuario no tiene asistencias en el mes seleccionado' });
    }
    return res.status(200).json(attendances);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  initDay,
  registerAttendance,
  getAttendanceByMonth,
};
