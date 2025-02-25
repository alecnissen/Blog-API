require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000;

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

const createUserRouter = require('./routes/create_user_form');

app.use('/create_user_form', createUserRouter);

app.listen(port, () => { 
    console.log(`server running at http://localhost:${port}`);
}) 

module.exports = app;
