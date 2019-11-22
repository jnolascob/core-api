const express = require('express');
const vacationController = require('../controllers/vacationRequestController');

const Router = express.Router();

Router.post('/:id', vacationController.setVacationRequest);

module.exports = Router;
