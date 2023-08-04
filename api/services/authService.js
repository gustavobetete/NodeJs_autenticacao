const database = require('../models');
const { compare } = require('bcryptjs');
const { sign } = require('jsonwebtoken');
const jsonSecret = require('../config/jsonSecret');

class AuthService {
    async login(dto) {
        const usuarioEncontrado = await database.usuarios.findOne({
            attributes: ['id', 'email', 'senha' ],
            where: {
                email: dto.email
            }
        });

        if (!usuarioEncontrado) {
            throw new Error('Usuário não encontrado!');
        }

        const senhaValida = await compare(dto.senha, usuarioEncontrado.senha);

        if (!senhaValida) {
            throw new Error('Senha inválida!');
        }

        const acessToken = sign({
            id: usuarioEncontrado.id,
            email: usuarioEncontrado.email
        }, jsonSecret.secret, {
            expiresIn: '1d'
        });

        return {acessToken};
    }
}

module.exports = AuthService;