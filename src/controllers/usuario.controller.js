import models from "./../models"

export const listaUsuarios = async (req, res) => {
    let usuarios = await models.Usuario.findAll({attributes: ['id', 'username', 'email', 'estado']});
    // res.json(usuarios, 200)
    res.status(200).json(usuarios)
}

export const guardarUsuario = async (req, res) => {
    // validar
    //guardar
    try {
        await models.Usuario.create(req.body)
        res.status(201).json({mensaje: "Usuario Registrado", error: false})
    } catch (error) {
        res.status(422).json({mensaje: "Error al registrar Usuario", error: error})
    }
}

export const modificarUsuario = async (req, res) => {
    let id = req.params.id;
    let datos = req.body;

    await models.Usuario.update(datos, {
        where: {
            id: id
        }
    });
    res.status(200).json({mensaje: "Usuario Actualizado", error: false})
}

export const mostrarUsuario = async (req, res) => {
    let id = req.params.id;

    let usuario = await models.Usuario.findByPk(id);
    res.status(200).json(usuario)
}

export const eliminarUsuario = (req, res) => {

}
