const express = require('express');
const exampleControllers = require('../controllers/exampleControllers');

const Router = express.Router();

Router.get('/example', exampleControllers.getExample);

module.exports = Router;
