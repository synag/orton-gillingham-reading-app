const router = require('express').Router();
const wordSetRoutes = require('./wordSetRoutes');


router.use('/wordSetRoutes', wordSetRoutes);

module.exports = router;