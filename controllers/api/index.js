const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./postRoutes.js');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;
