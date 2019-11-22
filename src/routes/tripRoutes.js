const express = require('express');
const tripController = require('../controllers/tripController');

const Router = express.Router();

Router.get('/:id', tripController.getTrip);
Router.post('/:id', tripController.setTrip);

module.exports = Router;
