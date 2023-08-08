const PermissaoService = require('../services/permissaoService');
const permissaoService = new PermissaoService();

class PermissaoController{
    static async cadastrarPermissao(req, res){
        const novaPermissao = req.body;
        try{
            const novaPermissaoCadastrada = await permissaoService.cadastrarPermissao(novaPermissao);
            res.status(201).json(novaPermissaoCadastrada);
        }catch(erro){
            res.status(400).json({mensagem: erro.message});
        }
    }

    static async listarPermissoes(req, res){
        try{
            const permissoes = await permissaoService.listarPermissoes();
            res.status(200).json(permissoes);
        }catch(erro){
            res.status(400).json({mensagem: erro.message});
        }
    }

}

module.exports = PermissaoController;