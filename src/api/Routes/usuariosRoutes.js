const {Router} = require('express');
const UsuariosControllers = require('../Controllers/UsuariosControllers');

const router = new Router();

router.get('/usuarios', UsuariosControllers.usuarios)

router.post('/usuarios', UsuariosControllers.cadastrar)

router.delete('/usuarios/:id', UsuariosControllers.deletarUsuario)

module.exports = router;