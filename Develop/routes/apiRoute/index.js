const router = require('express').Router();
const notesRoutes = require('../apiRoute/notes.js');

router.use(notesRoutes);

module.exports = router;