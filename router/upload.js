const express  = require('express');

const multer = require('multer');
const upload = multer({dest:"uploads"});

const {home, uploads, downloadFile, handleDownload} = require('../controller/uploads.js')
const Router = express.Router();

Router.route('/').get(home);
Router.route('/file/:id').get(downloadFile).post(handleDownload);
Router.route('/upload').post(upload.single("file"),uploads);

module.exports = Router;