const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BathSchema = new Schema({
    bathDate: {type:String, default: ''},
    status: {type: Boolean, default: false}
});

exports.BathModel = mongoose.model('Bath', BathSchema);a