const { handleError } = require('../utils/helpers/expressHelper');

async function signin(req, res) {
  const { db } = req.app;
  const { email, password } = req.body;

  let user;
  try {
    if (password) {
      user = await db.first('employee.id', 'employee.name', 'lastname', 'email', 'headquarter.qr_code')
        .from('employee').innerJoin('headquarter', 'employee.headquarter_id', 'headquarter.id')
        .where({
          email, password,
        });
    } else {
      user = await db.first('employee.id', 'employee.name', 'lastname', 'email', 'headquarter.qr_code')
        .from('employee').innerJoin('headquarter', 'employee.headquarter_id', 'headquarter.id')
        .where({ email });
    }

    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).json({ message: 'Credenciales incorrectas' });
  } catch (error) {
    const errorMessage = handleError(error);
    return res.status(500).json(errorMessage);
  }
}

module.exports = {
  signin,
};
