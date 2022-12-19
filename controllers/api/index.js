const router = require('express').Router();

// create connections to user-routes, post-routes, & comment-routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// router.use creating connection for userRoutes, postRoutes, commentRoutes
router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;