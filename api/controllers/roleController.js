const RoleService = require('../services/roleService');
const roleService = new RoleService();

class RoleController {
    static async cadastrarRole(req, res) {
        const { nome, descricao } = req.body;

        try {
            const role = await roleService.cadastrarRole({ nome, descricao });

            res.status(201).json(role);

        } catch (error) {
            console.log('Message error: ', error.message);
            res.status(400).send({ message: error.message });
        }
    }
}

module.exports = RoleController;