const router = require('express').Router();
const wordSetRoutes = require('./wordSetRoutes');


router.use('/wordSetRoute', wordSetRoutes);

module.exports = router;