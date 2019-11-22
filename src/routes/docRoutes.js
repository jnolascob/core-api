const express = require('express');
const docController = require('../controllers/docController');

const Router = express.Router();

Router.get('/:id', docController.getDocs);

module.exports = Router;
