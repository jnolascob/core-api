const express = require('express');
const justificationController = require('../controllers/justificationController');

const Router = express.Router();

Router.post('/', justificationController.create);

module.exports = Router;
