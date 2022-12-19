// Connecting index.js to all routes
const router = require('express').Router();
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// initiates .use for dashboardRoutes & homeRoutes
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

module.exports = router;
