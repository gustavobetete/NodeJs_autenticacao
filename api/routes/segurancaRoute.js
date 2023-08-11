const { Router } = require('express')
const SegurancaController = require('../controllers/segurancaController')

const router = Router()

router
    .post('/seguranca/acl', SegurancaController.cadastrarAcl)
    .post('/seguranca/permissoes-roles', SegurancaController.cadastrarPermissoesRoles)
    .post('/seguranca/roles', SegurancaController.cadastrarRoles)

module.exports = router