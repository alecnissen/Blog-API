require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 3000;

const indexRouter = require('./routes/index');

app.get('/',  (req, res) => { 
    
    res.render('indexRouter')
    
})

app.listen(port, () => { 
    console.log(`server running at http://localhost:${port}`);
}) 

module.exports = app;
