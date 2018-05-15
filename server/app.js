const express = require('express');
const path = require('path');

//allow CORSS, this task is implemented in localhost, otherwist, the ajax request will be blocked 
var cors = require('cors');

const db = require('./config/db');

const routes = require('./routes/index');

const app = express();

app.use(cors());
app.use('/', routes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

//export for unit testing
module.exports = app;

