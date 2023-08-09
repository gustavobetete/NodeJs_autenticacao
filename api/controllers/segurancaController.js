const SegurancaService = require('../services/segurancaService');
const segurancaService = new SegurancaService();

class SegurancaController {
    static async cadastrarAcl(req, res) {
        const { roles, permissoes } = req.body;
        const { usuarioId } = req;

        try {
            const result = await segurancaService.cadastrarAcl(roles, permissoes, usuarioId);
            res.status(201).json(result);
        }catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = SegurancaController;