const express = require('express');
const benefitController = require('../controllers/benefitController');

const Router = express.Router();

Router.get('/', benefitController.getBenefits);

module.exports = Router;
