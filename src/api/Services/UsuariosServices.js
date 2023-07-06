const { hash } = require('bcryptjs');
const db = require('../models');

class UsuariosServices {

        async usuarios() {
                try {
                        const user = await db.Usuarios.findAll()
                        return user;
                } catch (error) {
                        throw new Error(error)
                }
        }

        async cadastrarUsuario(dto) {
                 const usuario = await db.Usuarios.findOne(
                         {where: {email: dto.email}}
                         )
                 
                         if(usuario) {
                                 throw new Error('Email ja cadastrado, cadastre outro');
                         }

                        const senhaHash = await hash(dto.senha, 8);

                        try {
                                const usuarioCadastrado =  await db.Usuarios.create({
                                        nome: dto.nome,
                                        email: dto.email,
                                        telefone: dto.telefone,
                                        senha: senhaHash
                                })
                                return usuarioCadastrado;
                        } catch (error) {
                                throw new Error('Erro ao cadastrar usuario.');
                        }
                }
        
        async deleteUsuarios(dto) {
                try {
                        const deleteUsuario = await db.Usuarios.destroy({
                                where: {id: dto.id}
                        });
                        return deleteUsuario;
                } catch (error) {
                        throw new Error('Erro ao deletar usuario, tente novamente :)')
                }
        }

}

module.exports = UsuariosServices;