const { handleError } = require('../utils/helpers/expressHelper');

async function getDocs(req, res) {
  const { db } = req.app;
  const { id } = req.params;
  try {
    const docs = await db.select('doc.name', 'description', 'document_url', 'author', 'upload_date').from('doc')
      .innerJoin('employee', 'employee.id', 'doc.employee_id')
      .where('employee_id', id);
    if (docs.length === 0) {
      return res.status(404).send({ message: 'No hay documentos encontrados para este usuario' });
    }
    return res.status(200).json(docs);
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  getDocs,
};
