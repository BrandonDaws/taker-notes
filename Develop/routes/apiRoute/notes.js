const router = require('express').Router();
// import functions...
 
 const { notes } = require('../../db/db.json'); 

router.get('/notes', (req, res) => {
    let results = notes;
    if (req) {
        res.json()
    }

});



module.exports = router;