const mongoose = require('mongoose');
const bath = require('./models/bath');
console.log("bath,", bath);
var express = require('express');
const cors = require('cors');
const { response } = require('express');
var app = express();

// connect to mongoose
mongoose.connect('mongodb://localhost/bath');

// create test bath instance

app.use(express.json());
app.use(cors());

app.post('/bath', function(request, response){
    console.log(request.body);
    // response.send(request.body);

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

app.get('/bath', function(request, response){
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

app.listen(4000);