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
}

module.exports = UsuarioService;