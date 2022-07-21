import models from "./../models"

export const listaCategoria = async function(req, res){
    let categorias = await models.Categoria.findAll({attributes: ['id', 'nombre', 'detalle']});
    // res.json(usuarios, 200)
    res.status(200).json(categorias)

}

export const guardarCategoria = function(req, res){
    let id = req.params.id;
    let datos = req.body;

    await models.Categoria.update(datos, {
        where: {
            id: id
        }
    });
    res.status(200).json({mensaje: "Categoria Actualizado", error: false})
}



export const mostrarCategoria = function(req, res){
    let id = req.params.id;

    let categoria = await models.Categoria.findByPk(id);
    res.status(200).json(categoria)
}

export const modificarCategoria = function(req, res){

    let id = req.params.id;
    let datos = req.body;

    await models.Categoria.update(datos, {
        where: {
            id: id
        }
    });
    res.status(200).json({mensaje: "Usuario Actualizado", error: false})

}

export const eliminarCategoria = function(req, res){

}
