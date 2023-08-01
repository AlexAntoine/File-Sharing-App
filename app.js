const express = require('express');
const bcrypt = require('bcrypt');
const {localDb} = require('./db/database');
const uploadRouter = require('./router/upload');

const app  = express();

app.use(express.urlencoded({extended:true}));
app.set('view engine', 'ejs');

localDb();

app.use(uploadRouter);

module.exports = app;
