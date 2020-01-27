const express = require('express')
const router = express.Router()

const Music = require('../controllers/music')


/* GET home page. */
router.get('/obras',(req, res)=> {
  if(req.query.by === 'compositor'){
    Music.getByCompositor()
      .then(dados => res.jsonp(dados))
      .catch(err => res.status(500).jsonp(err))
  }else if(req.query.by === 'instrumento'){
    Music.getByInstrumento()
      .then(dados => res.jsonp(dados))
      .catch(err => res.status(500).jsonp(err))
  }else{
    Music.listar()
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
  }
});


router.get('/obras/:id', (req,res)=>{
  Music.getObra(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
})

router.get('/compositores', (req,res)=>{
  Music.getCompositores()
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
})

router.get('/obras', (req,res)=>{
  Music.getObra(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
})

router.get('/obrasQuant', (req,res)=>{
  Music.getObraQuant(req.params.id)
    .then(dados => res.jsonp(dados))
    .catch(err => res.status(500).jsonp(err))
})

module.exports = router;
