const { v4: uuidv4 } = require('uuid')
const database = require('../models');

class RoleService {
    async cadastrarRole(dto) {
        const role = await database.roles.findOne({
            where: {
                nome: dto.nome
            }
        });

        if (role) {
            throw new Error('Role já cadastrada');
        }

        try {
            const novaRole = await database.roles.create({
                id: uuidv4(),
                nome: dto.nome,
                descricao: dto.descricao
            });

            return novaRole;
        }catch(error){
            throw new Error("Erro ao cadastrar role");
        }
    }

    async listarRoles() {
        const roles = await database.roles.findAll();

        return roles;
    }
}

module.exports = RoleService;