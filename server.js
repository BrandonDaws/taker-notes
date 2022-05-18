const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require('./routes/apiRoute');
const htmlRoutes = require('./routes/htmlRoute');

/* const fs = require('fs');
const path = require('path'); */

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

// ...instructs the server to make certain files readily available and to not gate it behind a server endpoint
app.use(express.static('public'));

// ...use htmlRoutes
app.use('/api', apiRoutes);
// ...use apiRoutes
app.use('/', htmlRoutes);

// ...LISTEN for requests on PORT
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});









