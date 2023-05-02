var express = require('express');
var router = express.Router();
var Emd = require('../controllers/emd')

/* GET home page. */
router.get('/api/emd/', function(req, res, next) {
  Emd.list()
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(601).json({erro:erro}))
  
});

router.get('/api/emd/:id', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});

router.get('/api/modalidades', function(req, res, next) {
  Emd.getModalidades(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});

router.get('/api/emd?res=OK', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});

router.get('/api/emd?modalidade=X', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});

router.get('/api/atletas?gen=F', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});

router.get('/api/atletas?clube=X', function(req, res, next) {
  Emd.getEmd(req.params.id)
    .then(dados => {
      res.json(dados);
    })
    .catch(erro => res.status(602).json({erro:erro}))
  
});



// temos que testar com o postman (ou curl)
router.post('/reg',(req,res) => {
  Emd.addEmd(req.body)
    .then(dados => res.status(201).json(dados))
    .catch(erro => res.status(603).json({erro:erro}))

})

router.put('/:id',(req,res) => {
  Emd.updateEmd(req.body)
    .then(dados => res.json(dados))
    .catch(erro => res.status(604).json({erro:erro}))

})

router.delete('/:id',(req,res) => {
  Emd.deleteEmd(req.params.id)
    .then(dados => res.json(dados))
    .catch(erro => res.status(605).json({erro:erro}))
})

module.exports = router;
