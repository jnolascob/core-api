const { handleError } = require('../utils/helpers/expressHelper');

async function getTools(req, res) {
  const { db } = req.app;
  const { id } = req.params;
  try {
    const tools = await db.select('tool.name', 'description', 'website', 'serial', 'username', 'tool.password').from('tool')
      .innerJoin('role', 'role.id', 'tool.role_id')
      .innerJoin('role_employee', 'role_employee.role_id', 'role.id')
      .innerJoin('employee', 'employee.id', 'role_employee.employee_id')
      .where('employee.id', id);
    if (tools.length === 0) {
      return res.status(404).send({ message: 'No hay herramientas encontrados para este usuario' });
    }
    return res.status(200).json(tools);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getTools,
};
