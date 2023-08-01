const mongoose = require('mongoose');

const file = new mongoose.Schema({

    path:{
        type:String,

    },

    originalName:{
        type:String,
    },

    password:{
        type:String,
    },

    downloadCount:{
        type:Number,
        default: 0
    }
});

module.exports = mongoose.model('File',file);