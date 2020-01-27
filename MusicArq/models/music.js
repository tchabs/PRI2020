const mongoose = require('mongoose')

var instrumentosSchema = new mongoose.Schema({
    designacao: String,
    partitura:{
        path: String
    }
})


var musicSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    instrumentos:[instrumentosSchema]
})
module.exports = mongoose.model('music',musicSchema)