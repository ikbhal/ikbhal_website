var express = require('express');
const bath = require('./models/bath');
var router = express.Router();

router.post('/', function(request, response){
    console.log(request.body);
    const bathInstance = new bath.BathModel();
    bathInstance.bathDate = request.body.bathDate;
    bathInstance.save(function(err, doc){
        if(err){
            console.log("can not save bath ", bathInstance, " due to error: ", err);
            response.status(400).send(err);
        }else{
            response.send(doc);
        }
    });

});

router.get('/', function(request, response){
    bath.BathModel.find({}).then((( docs, err)=>{
        if(err){
            console.log("error in bath get err:",err)
            return response.status(400).send(err);
        }else {
            console.log("sucess docs", docs);
            return response.status(200).send(docs);
        }
    }));
});


module.exports = router;