const mongoose = require('mongoose');
var express = require('express');
const cors = require('cors');
const { response } = require('express');
var app = express();

// connect to mongoose
mongoose.connect('mongodb://localhost/bath');

app.use(express.json());
app.use(cors());

var surahController = require('./controller/SurahController');
app.use('/surah', surahController);

var bathController = require('./controller/BathController');
app.use('/bath', bathController);

app.listen(4000);