const { Router } = require('express');
const PermissaoController = require('../controllers/permissaoController');

const router = Router();

router 
    .post('/permissao', PermissaoController.cadastrarPermissao)
    .get('/permissao')
    .get('/permissao/:id')
    .put('/permissao/:id')
    .delete('/permissao/:id')

module.exports = router;