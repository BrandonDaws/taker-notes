const router = require('express').Router();
const notesRoutes = require('./notes.js');

router.use(notesRoutes);

module.exports = router;