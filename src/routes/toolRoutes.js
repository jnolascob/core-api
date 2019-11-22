const express = require('express');
const toolController = require('../controllers/toolController');

const Router = express.Router();

Router.get('/:id', toolController.getTools);

module.exports = Router;
