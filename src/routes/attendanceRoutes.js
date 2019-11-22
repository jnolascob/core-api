const express = require('express');
const attendanceController = require('../controllers/attendaceController');

const Router = express.Router();

Router.post('/init', attendanceController.initDay);
Router.post('/register', attendanceController.registerAttendance);
Router.post('/list/:id', attendanceController.getAttendanceByMonth);

module.exports = Router;
