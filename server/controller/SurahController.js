
var express = require('express');
var surahController = require('../models/surah');
var router = express.Router();


router.post('/', function(request, response){
    console.log(request.body);
    // response.send(request.body);

    const suranInstance = new surah.SurahModel();
    suranInstance.number = request.body.number;
    suranInstance.name = request.body.name;
    suranInstance.totalAayats = request.body.totalAayats;

    suranInstance.save(function(err, doc){
        if(err){
            console.log("can not save surah ", suranInstance, " due to error: ", err);
            response.status(400).send(err);
        }else{
            response.send(doc);
        }
    });

});

router.get('/', function(request, response){
    surah.SurahModel.find({}).then((( docs, err)=>{
        if(err){
            console.log("error in surah get err:",err)
            return response.status(400).send(err);
        }else {
            console.log("sucess docs", docs);
            return response.status(200).send(docs);
        }
    }));
});

module.exports = router;