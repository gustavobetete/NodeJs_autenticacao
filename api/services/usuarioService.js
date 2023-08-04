const { v4: uuidv4 } = require('uuid')
const database = require('../models')
const { hash } = require('bcryptjs')

class UsuarioService {
    async cadastrarUsuario(dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: dto.email
            }
        });

        if (usuario) {
            throw new Error('Usuário já cadastrado');
        }

        try{
            const senhaCriptografada = await hash(dto.senha, 8);

            const novoUsuario = await database.usuarios.create({
                id: uuidv4(),
                nome: dto.nome,
                email: dto.email,
                senha: senhaCriptografada
            });

            return novoUsuario;
        }catch(error){
            throw new Error("Erro ao cadastrar usuario");
        }
    }

    async listarUsuarios() {
        const usuarios = await database.usuarios.findAll();

        return usuarios;
    }

    async listarUsuarioPorId(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
    }

    async atualizarUsuario(id, dto) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        try {
            const usuarioAtualizado = await database.usuarios.update({
                nome: dto.nome,
                email: dto.email,
                senha: dto.senha
            }, {
                where: {
                    id: id
                }
            });

            return usuarioAtualizado;
        } catch (error) {
            throw new Error('Erro ao atualizar usuário');
        }
    }

    async deletarUsuario(id) {
        const usuario = await database.usuarios.findOne({
            where: {
                id: id
            }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        try {
            await database.usuarios.destroy({
                where: {
                    id: id
                }
            });
        } catch (error) {
            throw new Error('Erro ao deletar usuário');
        }
    }

    async listarUsuarioPorEmail(email) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: email
            }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
    }

    async listarUsuarioPorEmailESenha(email, senha) {
        const usuario = await database.usuarios.findOne({
            where: {
                email: email,
                senha: senha
            }
        });

        if (!usuario) {
            throw new Error('Usuário não encontrado');
        }

        return usuario;
    }
}

module.exports = UsuarioService;