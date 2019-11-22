const express = require('express');
const multer = require('multer');
const upload = multer();
const suggestionController = require('../controllers/suggestionController');

const Router = express.Router();

Router.post('/', upload.fields([]), suggestionController.create);

module.exports = Router;
