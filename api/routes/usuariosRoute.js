const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado)

router.post('/usuarios', (req, res) => {
    return UsuarioController.cadastrarUsuario(req, res);
});

router.get('/usuarios', (req, res) => {
    return UsuarioController.listarUsuarios(req, res);
});

router.get('/usuarios/:id', (req, res) => {
    return UsuarioController.listarUsuarioPorId(req, res);
});

router.put('/usuarios/:id', (req, res) => {
    return UsuarioController.atualizarUsuario(req, res);
});

router.delete('/usuarios/:id', (req, res) => {
    return UsuarioController.deletarUsuario(req, res);
});

module.exports = router;