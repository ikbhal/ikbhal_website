const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SurahSchema = new Schema({
    number: {type:String, default: ''},
    name: {type: String, default: ''},
    totalAayats: {type: Number, default: ''},
});

exports.SurahModel = mongoose.model('Surah', SurahSchema);