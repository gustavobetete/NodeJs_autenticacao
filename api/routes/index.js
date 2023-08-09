const bodyParser = require('body-parser')
 
const produto = require('./produtoRoute')
const usuario = require('./usuariosRoute')
const auth = require('./authRoute')
const role = require('./roleRoute')
const permissao = require('./permissaoRouter')
const seguranca = require('./segurancaRoute')

module.exports = app => {
  app.use(
    bodyParser.json(),
    auth,
    produto,
    usuario,
    role,
    permissao,
    seguranca
  )
}
