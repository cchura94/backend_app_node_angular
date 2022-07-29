import models from "../models"


/**
 * 
 * http.//127.0.0.1:3000/api/producto?page=1$limit=10
 *  
 */
export async function listaPaginacion(req, res) {

    try {
        // paginar
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit) 

        let offset = 0+(page-1)*10;

        console.log(offset);

        let lista_productos = await models.Producto.findAndCountAll({
            offset: offset,
            limit: limit,
            include: models.Categoria
        });
console.log(lista_productos)

        res.status(200).json(lista_productos)

        
    } catch (error) {
        res.status(500).json({
            mensaje: "Problemas con el servidor",
            error: error
        })
        
    }
    
}

export const guardarProducto = async function(req, res){
    // let id = req.params.id;
    let datos = req.body;

    await models.Producto.create(datos);
    res.status(200).json({mensaje: "Producto Actualizado", error: false})
}

export const actualizaImagen = async function(req, res) {
    console.log("*************************", req.body)
    try{
        let id = req.params.id
        let datos = req.body
        if(req.file){
            datos.imagen = req.file.filename
        }
        console.log(datos)
        // guardar

        await models.Producto.update(datos, {where: {id}})
        return res.status(200).send({mensaje: "Imagen Producto Actualizado"})
    
    }catch(error){
        return res.status(500).send({
            "mensaje": error,
            error: true
        })
    }
}


