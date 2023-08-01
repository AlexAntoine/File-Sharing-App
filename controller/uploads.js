const bcrypt = require('bcrypt');
const File = require('../models/files');

exports.home = (req, res)=>{
    res.render('index');
}

exports.uploads = async (req, res) =>{

    const fileData = {
        path: req.file.path,
        originalName: req.file.originalname,
    }

    if(req.body.password !=null && req.body.password !== ""){
        fileData.password = await bcrypt.hash(req.body.password,10);
    }

    const file = await File.create(fileData);
    
    res.render('index',{fileLink:`${req.headers.origin}/file/${file.id}`});
}

exports.downloadFile = async(req, res)=>{

    const file = await File.findById(req.params.id);

    if(file.password != null){
        if(req.body.password == null){

            res.render('password');
            return
        }

        if(!await bcrypt.compare(req.body.password, file.password)){

            res.render("password", {error:true});
            return
        }

    }

    console.log(file);
    file.downloadCount++
    await file.save();
    console.log(file.downloadCount);

    res.download(file.path, file.originalName);
}

exports.handleDownload = async(req, res)=>{

    const file = await File.findById(req.params.id);

    if(file.password != null){
        if(req.body.password == null){

            res.render('password');
            return
        }

        if(!await bcrypt.compare(req.body.password, file.password)){

            res.render("password", {error:true});
            return
        }

    }

    console.log(file);
    file.downloadCount++
    await file.save();
    console.log(file.downloadCount);

    res.download(file.path, file.originalName);
}