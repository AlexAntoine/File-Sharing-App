const mongoose = require('mongoose');

const localDb = async()=>{

   return await mongoose.connect('mongodb://127.0.0.1:27017/filesDb',{useNewUrlParser:true, useUnifiedTopology: true});
}

module.exports = {
    localDb
}