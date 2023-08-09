const { Router } = require('express');
const RoleController = require('../controllers/roleController');

const router = Router();

router
    .post('/roles', RoleController.cadastrarRole)
    .get('/roles', RoleController.listarRoles)
    .get('/roles/:id')
    .put('/roles/:id')
    .delete('/roles/:id')

module.exports = router;