const database = require('../models');
const { v4: uuidv4 } = require('uuid')

class PermissaoService {
    async cadastrarPermissao(dto) {
        const permissao = await database.permissoes.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (permissao) {
            throw new Error('Permissão já cadastrado');
        }

        try {
            const newPermissoes = await database.permissoes.create({ 
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao,
            });

            return newPermissoes;
        } catch (error) {
            console.error('Message error: ', error.message);
            throw error;
        }
    }
}

module.exports = PermissaoService;