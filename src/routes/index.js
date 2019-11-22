const express = require('express');
const exampleRoutes = require('./exampleRoutes');
const benefitRoutes = require('./benefitRoutes');
const authRoutes = require('./authRoutes');
const docRoutes = require('./docRoutes');
const justificationRoutes = require('./justificationRoutes');
const toolRoutes = require('./toolRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const suggestionRoutes = require('./suggestionRoutes');
const tripRoutes = require('./tripRoutes');
const vacationRoutes = require('./vacationRequestRoutes');

const Router = express.Router();

// Aqui puede configurar el Router
Router.use('/example', exampleRoutes);
Router.use('/doc', docRoutes);
Router.use('/tool', toolRoutes);
Router.use('/suggestion', suggestionRoutes);
Router.use('/trip', tripRoutes);
Router.use('/vacation', vacationRoutes);
Router.use('/benefit', benefitRoutes);
Router.use('/auth', authRoutes);
Router.use('/justification', justificationRoutes);
Router.use('/attendance', attendanceRoutes);

module.exports = Router;
