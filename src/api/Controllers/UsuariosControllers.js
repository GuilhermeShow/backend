const UsuariosServices = require('../Services/UsuariosServices');

const usuariosServices = new UsuariosServices();

class UsuariosControllers {

        static async usuarios(req ,res) {
                try {
                        const usuarios = await usuariosServices.usuarios({});
                        res.status(200).send(usuarios);
                } catch (error) {
                        res.status(401).send({message: error.message});
                }
        }

        static async cadastrar(req, res) {
                
                const {nome, email, telefone, senha} = req.body;

                try {
                        const usuario = await usuariosServices.cadastrarUsuario({
                                nome, email, telefone, senha
                        })

                        res.status(201).send(usuario);
                } catch (error) {
                        res.status(401).send({message: error.message})
                }

        }

        static async deletarUsuario(req, res) {
                const {id} = req.params;

                try {
                        const deletarUsuario = await usuariosServices.deleteUsuarios({id})
                        res.status(200).send("Usuario deletado com sucesso");
                } catch (error) {
                        res.status(401).send({message: error.message});
                }
        }



}

module.exports = UsuariosControllers;