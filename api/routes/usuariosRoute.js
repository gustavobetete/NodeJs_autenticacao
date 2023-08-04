const { Router } = require('express');
const UsuarioController = require('../controllers/usuarioController');
const autenticado = require('../middleware/autenticado');

const router = Router();

router.use(autenticado)

router.post('/usuarios', (req, res) => {
    return UsuarioController.cadastrarUsuario(req, res);
});

router.get('/usuarios', (req, res) => {});

router.get('/usuarios/:id', (req, res) => {});

router.put('/usuarios/:id', (req, res) => {});

router.delete('/usuarios/:id', (req, res) => {});

module.exports = router;