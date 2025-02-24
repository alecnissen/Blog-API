require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000;


const createUserRouter = require('./routes/create_user_form');

app.use('/create_user_form', createUserRouter);

app.listen(port, () => { 
    console.log(`server running at http://localhost:${port}`);
}) 

module.exports = app;
