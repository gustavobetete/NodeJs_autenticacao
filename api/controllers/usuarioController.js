const UsuarioService = require('../services/usuarioService');
const usuarioService = new UsuarioService();

class UsuarioController {
    static async cadastrarUsuario(req, res) {
        const { nome, email, senha } = req.body;

        try {
            const usuario = await usuarioService.cadastrarUsuario({ nome, email, senha });

            res.status(201).json(usuario);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async listarUsuarios(req, res) {
        try {
            const usuarios = await usuarioService.listarUsuarios();

            res.status(200).json(usuarios);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async listarUsuarioPorId(req, res) {
        const { id } = req.params;

        try {
            const usuario = await usuarioService.listarUsuarioPorId(id);

            res.status(200).json(usuario);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async atualizarUsuario(req, res) {
        const { id } = req.params;
        const { nome, email, senha } = req.body;

        try {
            const usuario = await usuarioService.atualizarUsuario(id, { nome, email, senha });

            res.status(200).json(usuario);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }

    static async deletarUsuario(req, res) {
        const { id } = req.params;

        try {
            await usuarioService.deletarUsuario(id);

            res.status(204).end();

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = UsuarioController;