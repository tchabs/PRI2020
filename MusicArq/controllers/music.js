const mongoose = require('mongoose')

var MusicModel = require('../models/music')

const Music = module.exports


Music.listar = () => {
    console.log("cheguei")
    return MusicModel
        .find({},{"id":"id","titulo":"titulo","tipo":"tipo","compositor":"compositor"})
        .exec()
}

Music.getObra = (id) =>{
    return MusicModel
        .findOne({id: id})
        .exec()
}

Music.getCompositores = () =>{
    return MusicModel
        .distinct("compositor")
        .exec()
}

Music.getByCompositor = (compositor) =>{
    return MusicModel
        .find({compositor: compositor})
        .exec()
}

Music.getByInstrumento = (instrumento) => {
    return MusicModel
        .find({"instrumentos": {$elemMatch: {designacao: instrumento}}})
        .exec()
}

// Musica.getObrasQuant = () =>{

// }